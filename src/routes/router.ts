import { type FastifyInstance } from "fastify";
import v1Routes from "@/routes/v1/router";

export default async function routes(fastify: FastifyInstance) {
	fastify.get("/", async () => {
		return {
			message: "Welcome",
		};
	});

	await fastify.register(v1Routes, {
		prefix: "/v1",
	});
}
