import { Request, Response } from "express";
import { StatisticsTransactionUseCase } from "../../domain/usecases/StatisticsTransactionUseCase";

export class StatisticsTransactionController {
  constructor(private statisticsTransactionUseCase: StatisticsTransactionUseCase) {}

  async handler(req: Request, res: Response) {
    try {
      const time = req.query.time as any || '60';
      const statistics = await this.statisticsTransactionUseCase.execute(time);
      res.status(200).json(statistics);
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ message: err.message });
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}