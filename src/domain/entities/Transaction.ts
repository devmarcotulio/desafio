export class Transaction {
  constructor(readonly id: string, readonly valor: number, readonly dataHora: Date) { }

  static create(valor: number, dataHora: Date): Transaction {
    this.validate(valor, dataHora);
    const id = crypto.randomUUID();
    return new Transaction(id, valor, dataHora);
  }

  private static validate(valor: number, dataHora: Date): void {
    if (valor < 0) {
      throw new Error('Valor deve ser maior ou igual a zero');
    }
    if (dataHora > new Date()) {
      throw new Error('Data e hora não podem ser no futuro');
    }
  }
}
