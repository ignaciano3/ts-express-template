import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import { specs } from "./specs";

export const swagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
