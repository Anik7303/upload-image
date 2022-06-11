import { NextFunction, Request, Response } from "express";

// interfaces
import { IErrorWithCode } from "../interfaces";

export function error404(req: Request, res: Response, _next: NextFunction) {
  const { method, url } = req;
  const message = `A '${method.toUpperCase()}' route for URL('${url}') does not exists.`;
  res.status(404).json({ message });
}

export function customErrorMiddleware(
  error: IErrorWithCode,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  const { message, statusCode } = error;
  res.status(statusCode).json({ message });
}
