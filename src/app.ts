import Fastify from "fastify";
import routes from "@/routes/router";

export const app = Fastify({
	logger: true,
});

await app.register(routes, { prefix: "/api" });
