import { type FastifyInstance } from "fastify";
import v2Routes from "@/routes/v2/router";

export default async function routes(fastify: FastifyInstance) {
	fastify.get("/", async () => {
		return {
			message: "Welcome",
		};
	});

	await fastify.register(v2Routes, {
		prefix: "/v2",
	});
}
