import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import routes from "./routes";
import health from "./controllers/health";
import { notFound } from "./middlewares/notFound";
import { errorHandler } from "./middlewares/errorHandler";
import { swagger } from "./lib/swagger/swagger";

const PREFIX = "/api";

// Express App
const app: Express = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

// Routes
swagger(app);
app.use(health);
app.get("/", (_req, res) => {
  res.json({
    message: "🦄🌈✨🐸🍊🍭",
  });
});
app.use(PREFIX, routes);

// Error Handler
app.use(notFound);
app.use(errorHandler);

export default app;
