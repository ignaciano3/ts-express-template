import { NextFunction, Request, Response } from "express";
import statusCodes from "../constants/statusCodes";

type ErrorResponse = {
  message: string;
  statusCode: number;
  statusMessage: string;
  stack?: string;
};

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  const statusCode =
    res.statusCode !== statusCodes.OK
      ? res.statusCode
      : statusCodes.INTERNAL_SERVER_ERROR;

  const response: ErrorResponse = {
    message: err.message,
    statusCode: statusCode,
    statusMessage: res.statusMessage,
  };

  if (process.env.NODE_ENV === "development") {
    response.stack = err.stack;
  }

  res.status(statusCode).json(response);
}
