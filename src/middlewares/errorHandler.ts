import { Request, Response } from "express";
import { statusCodes } from "../constants/statusCodes";

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
) {
  const response =
    process.env.NODE_ENV !== "production"
      ? { message: err.message, stack: err.stack, statusCode: res.statusCode }
      : { message: err.message, statusCode: res.statusCode };

  res.status(statusCodes.INTERNAL_SERVER_ERROR).json(response);
}
