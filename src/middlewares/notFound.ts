import { Request, Response, NextFunction } from "express";
import { statusCodes } from "../constants/statusCodes";

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(statusCodes.NOT_FOUND);
  const error = new Error(`Not found - ${req.originalUrl}`);
  next(error);
}
