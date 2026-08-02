import "dotenv/config";

export const env = {
	DATABASE_URL: process.env.DATABASE_URL!,
	PORT: process.env.PORT ? parseInt(process.env.PORT) : 3000,
	HOST: process.env.HOST || "0.0.0.0",
};
