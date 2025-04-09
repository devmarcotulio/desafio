import { Transaction } from "../entities/Transaction";
import { TransactionRepository } from "../repositories/TransactionRepository";

export class StatisticsTransactionUseCase {
  constructor(private transactionRepository: TransactionRepository) {}

  async execute(time: string) {
    const transactions = await this.transactionRepository.getAll();
    const recentTransactions = transactions.filter(({ dataHora }) => {
      return new Date().getTime() - new Date(dataHora).getTime() <= parseInt(time) * 1000
    });
    if (recentTransactions.length === 0) {
      return {
        count: 0,
        sum: 0,
        avg: 0,
        min: 0,
        max: 0,
      };
    }
    return this.calculateStats(recentTransactions);
  }

  private calculateStats(transactions: Transaction[]) {
    const count = transactions.length;
    let sum = 0;
    let min = transactions[0].valor;
    let max = transactions[0].valor;
    for (const { valor } of transactions) {
      sum += valor;
      if (valor < min) min = valor;
      if (valor > max) max = valor;
    }
    const avg = sum / count;
    return {
      count,
      sum: Number(sum.toFixed(2)),
      avg: Number(avg.toFixed(2)),
      min: Number(min.toFixed(2)),
      max: Number(max.toFixed(2)),
    };
  }
}