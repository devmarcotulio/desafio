import { Transaction } from "../entities/Transaction";

export interface TransactionRepository {
  save(transaction: Transaction): Promise<void>;
  delete(id: string): Promise<void>;
}