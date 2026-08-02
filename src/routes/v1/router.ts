import { type FastifyInstance } from "fastify";
import entryRoutes from "@/routes/v1/entries/entry.routes";

export default async function v1Routes(fastify: FastifyInstance) {
	fastify.get("/", async () => {
		return {
			message: "Version 1 API",
		};
	});

	await fastify.register(entryRoutes, {
		prefix: "/entries",
	});
}
