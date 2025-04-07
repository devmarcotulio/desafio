import { TransactionRepository } from "../repositories/TransactionRepository";

export class DeleteTransactionsUseCase {
  constructor(private transactionsRepository: TransactionRepository) {}

  async execute(): Promise<void> {
    await this.transactionsRepository.delete();
  }
}