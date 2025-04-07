import { Transaction } from "../../domain/entities/Transaction";
import { TransactionRepository } from "../../domain/repositories/TransactionRepository";

export class InMemoryDatabase implements TransactionRepository {

  private transactions: Transaction[] = [];

  save(transaction: Transaction): void {
    this.transactions.push(transaction);
  }

  delete(): void {
    this.transactions = [];
  }
}