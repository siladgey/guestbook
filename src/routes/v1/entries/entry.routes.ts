import { type FastifyInstance, type FastifyRequest } from "fastify";

type EntryParams = {
	id: string;
};

export default async function entryRoutes(fastify: FastifyInstance) {
	fastify.get(
		"/:id",
		async (request: FastifyRequest<{ Params: EntryParams }>) => {
			const { id } = request.params;

			return {
				entryId: id,
			};
		},
	);
}
