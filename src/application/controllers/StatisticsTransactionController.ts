import { Request, Response } from "express";
import { StatisticsTransactionUseCase } from "../../domain/usecases/StatisticsTransactionUseCase";
import logger from "../../utils/logger";

export class StatisticsTransactionController {
  constructor(private statisticsTransactionUseCase: StatisticsTransactionUseCase) {}

  async handler(req: Request, res: Response) {
    try {
      const start = Date.now();
      const time = req.query.time as any || '60';
      logger.info(`Iniciando cálculo de estatísticas para o time de ${time} segundos`);
      const statistics = await this.statisticsTransactionUseCase.execute(time);
      const end = Date.now();
      logger.info(`Estatísticas calculadas com sucesso em ${end - start}ms`);
      res.status(200).json({...statistics, durationMs: end - start});
    } catch (err) {
      logger.error('Erro ao calcular estatísticas', JSON.stringify(err));
      if (err instanceof Error) return res.status(400).json({ message: err.message });
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}