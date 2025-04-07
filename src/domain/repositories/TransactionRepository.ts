import { Transaction } from "../entities/Transaction";

export interface TransactionRepository {
  save(transaction: Transaction): void;
  delete(id: string): void;
}