import { CreateTransactionUseCase } from "../../domain/usecases/CreateTransactionUseCase";
import { DeleteTransactionsUseCase } from "../../domain/usecases/DeleteTransactionsUseCase";
import { InMemoryDatabase } from "../../infrastructure/database/InMemoryDatabase";
import { CreateTransactionController } from "../controllers/CreateTransactionController";
import { DeleteTransactionsController } from "../controllers/DeleteTransactionsController";

const transactionRepository = new InMemoryDatabase();

const createTransactionUseCase = new CreateTransactionUseCase(transactionRepository);
const createTransactionController = new CreateTransactionController(createTransactionUseCase);

const deleteTransactionsUseCase = new DeleteTransactionsUseCase(transactionRepository);
const deleteTransactionsController = new DeleteTransactionsController(deleteTransactionsUseCase);

export { createTransactionController, deleteTransactionsController };