import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/server.ts"],
	format: ["esm"],
	platform: "node",
	target: "esnext",
	sourcemap: true,
	clean: true,

	bundle: true,
	external: ["dotenv", "fastify", "@prisma/client"],
});
