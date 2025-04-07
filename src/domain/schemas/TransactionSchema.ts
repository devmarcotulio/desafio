import { z } from "zod";

export const transactionSchema = z.object({
  valor: z.number().positive(),
  dataHora: z
    .string()
    .refine((val) => {
      const isoWithOffsetRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}(?:[+-]\d{2}:\d{2})$/;
      return isoWithOffsetRegex.test(val);
    }, {
      message: "dataHora deve estar no formato ISO 8601",
    })
    .transform((val) => new Date(val))
    .refine((date) => date <= new Date(), {
      message: "dataHora não pode ser no futuro",
    })
}).strict();