import { Request, Response } from "express";
import { CreateTransactionUseCase } from "../../domain/usecases/CreateTransactionUseCase";
import logger from "../../utils/logger";

export class CreateTransactionController {
  constructor(private createTransactionUseCase: CreateTransactionUseCase) {}

  async handler(req: Request, res: Response) {
    try {
      logger.info('Iniciando a criação de uma nova transação');
      const { valor, dataHora } = req.body;
      await this.createTransactionUseCase.execute(valor, dataHora);
      logger.info('Transação criada com sucesso');
      res.status(201).end();
    } catch (err) {
      logger.error('Erro ao criar transação', JSON.stringify(err));
      if (err instanceof Error) return res.status(400).json({ message: err.message });
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}