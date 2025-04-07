import { Transaction } from "../entities/Transaction";

export interface TransactionRepository {
  save(transaction: Transaction): void;
  delete(): void;
  getAll(): Transaction[];
}