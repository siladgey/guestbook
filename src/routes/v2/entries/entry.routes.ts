import { type FastifyInstance } from "fastify";
import { nanoid } from "nanoid";
import slug from "slug";
import { z } from "zod";
import { prisma } from "@/db";

export default async function guestbookRoutes(fastify: FastifyInstance) {
	fastify.get("/", async () => {
		return prisma.guestbookEntry.findMany({
			orderBy: {
				publishedDate: "desc",
			},
		});
	});

	fastify.get("/:slug", async (request, reply) => {
		const params = z
			.object({
				slug: z.string(),
			})
			.parse(request.params);

		const entry = await prisma.guestbookEntry.findUnique({
			where: {
				slug: params.slug,
			},
		});

		if (!entry) {
			return reply.code(404).send({
				message: "Entry not found",
			});
		}

		return entry;
	});

	fastify.post("/", async (request, reply) => {
		const body = z
			.object({
				title: z.string().min(1),
				content: z.string().min(1),
				author: z.string().min(1),
			})
			.parse(request.body);

		const entry = await prisma.guestbookEntry.create({
			data: {
				title: body.title,
				content: body.content,
				author: body.author,
				slug: slug(body.title) + "-" + nanoid(6),
				publishedDate: new Date(),
			},
		});

		return reply.code(201).send(entry);
	});

	fastify.delete("/:id", async (request) => {
		const params = z
			.object({
				id: z.string(),
			})
			.parse(request.params);

		return prisma.guestbookEntry.delete({
			where: {
				id: params.id,
			},
		});
	});
}
