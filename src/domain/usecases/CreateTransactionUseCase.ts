import { Transaction } from "../entities/Transaction";
import { TransactionRepository } from "../repositories/TransactionRepository";

export class CreateTransactionUseCase {
  constructor(private transactionRepository: TransactionRepository) {}

  async execute(valor: number, dataHora: Date) {
    const transaction = Transaction.create(valor, dataHora);
    await this.transactionRepository.save(transaction);
  }
}