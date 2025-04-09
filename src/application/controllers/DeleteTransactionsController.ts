import { Request, Response } from "express";
import { DeleteTransactionsUseCase } from "../../domain/usecases/DeleteTransactionsUseCase";
import logger from "../../utils/logger";

export class DeleteTransactionsController {
  constructor(private deleteTransactionsUseCase: DeleteTransactionsUseCase) {}

  async handler(req: Request, res: Response) {
    try {
      logger.info('Iniciando a exclusão de transações');
      await this.deleteTransactionsUseCase.execute();
      res.status(200).end();
      logger.info('Transações excluídas com sucesso');
    } catch (err) {
      logger.error('Erro ao excluir transações', JSON.stringify(err));
      if (err instanceof Error) res.status(400).json({ error: err.message });
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}