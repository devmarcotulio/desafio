import { Transaction } from "./Transaction";

describe('Transaction entity', () => { 
  it('Should be possible to create a transaction', () => {
    const transaction = Transaction.create(100, new Date("2025-04-09T09:42:00.789-03:00"));
    const transaction1 = Transaction.create(100, new Date("2025-04-09T09:42:00.789-03:00"));
    expect(transaction).toBeInstanceOf(Transaction);
    expect(transaction.id).toBeDefined();
    expect(transaction.valor).toBe(100);
    expect(transaction.dataHora).toEqual(new Date("2025-04-09T09:42:00.789-03:00"));
    expect(transaction1.id).not.toEqual(transaction.id);
  })

  it('Should not be possible to create a transaction with negative value', () => {
    expect(() => Transaction.create(-100, new Date("2025-04-09T09:42:00.789-03:00"))).toThrow(new Error('Valor deve ser maior ou igual a zero'));
  })

  it('Should not be possible to create a transaction with future date', () => {
    expect(() => Transaction.create(100, new Date("2030-04-09T09:42:00.789-03:00"))).toThrow(new Error('Data e hora não podem ser no futuro'));
  })
})