import { Request, Response } from "express";
import { CreateTransactionUseCase } from "../../domain/usecases/CreateTransactionUseCase";

export class CreateTransactionController {
  constructor(private createTransactionUseCase: CreateTransactionUseCase) {}

  async handler(req: Request, res: Response) {
    try {
      const { valor, dataHora } = req.body;
      await this.createTransactionUseCase.execute(valor, dataHora);
      res.status(201).end();
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ message: err.message });
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}