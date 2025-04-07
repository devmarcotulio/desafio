import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export function validator(schema: ZodSchema<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err: any) {
      if (err.name === "ZodError" && err.issues[0].code != "unrecognized_keys") {
        res.status(422).end();
      }
      res.status(400).end();
    }
  };
}