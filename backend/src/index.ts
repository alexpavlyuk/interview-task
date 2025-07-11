import Fastify from "fastify";
import cors from "@fastify/cors";
import userRoutes from "./routes/users";

const app = Fastify();

app.register(cors, {
  origin: "*",
  // TODO: add more specific CORS settings for production (methods, headers, etc.)
});

app.register(userRoutes, { prefix: "/users" });

const start = async () => {
  try {
    // TODO: Start the Fastify server on port 3001
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

// TODO: Start the server