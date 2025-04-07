import { TransactionRepository } from "../repositories/TransactionRepository";

export class DeleteTransactionsUseCase {
  constructor(private transactionsRepository: TransactionRepository) {}

  async execute() {
    await this.transactionsRepository.delete();
  }
}