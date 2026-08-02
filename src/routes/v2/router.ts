import { type FastifyInstance } from "fastify";
import guestbookRoutes from "@/routes/v2/entries/entry.routes";

export default async function v2Routes(fastify: FastifyInstance) {
	fastify.get("/", async () => {
		return {
			message: "Version 2 API",
		};
	});

	await fastify.register(guestbookRoutes, {
		prefix: "/entries",
	});
}
