import "dotenv/config";

export const env = {
	PORT: process.env.PORT ? parseInt(process.env.PORT) : 3000,
	HOST: process.env.HOST || "0.0.0.0",
};
