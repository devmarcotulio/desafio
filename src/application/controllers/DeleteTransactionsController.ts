import { Request, Response } from "express";
import { DeleteTransactionsUseCase } from "../../domain/usecases/DeleteTransactionsUseCase";

export class DeleteTransactionsController {
  constructor(private deleteTransactionsUseCase: DeleteTransactionsUseCase) {}

  async handler(req: Request, res: Response) {
    try {
      await this.deleteTransactionsUseCase.execute();
      res.status(200).end();
    } catch (err) {
      if (err instanceof Error) res.status(400).json({ error: err.message });
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}