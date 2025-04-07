import { CreateTransactionUseCase } from "../../domain/usecases/CreateTransactionUseCase";
import { DeleteTransactionsUseCase } from "../../domain/usecases/DeleteTransactionsUseCase";
import { StatisticsTransactionUseCase } from "../../domain/usecases/StatisticsTransactionUseCase";
import { InMemoryDatabase } from "../../infrastructure/database/InMemoryDatabase";
import { CreateTransactionController } from "../controllers/CreateTransactionController";
import { DeleteTransactionsController } from "../controllers/DeleteTransactionsController";
import { StatisticsTransactionController } from "../controllers/StatisticsTransactionController";

const transactionRepository = new InMemoryDatabase();

const createTransactionUseCase = new CreateTransactionUseCase(transactionRepository);
const createTransactionController = new CreateTransactionController(createTransactionUseCase);

const deleteTransactionsUseCase = new DeleteTransactionsUseCase(transactionRepository);
const deleteTransactionsController = new DeleteTransactionsController(deleteTransactionsUseCase);

const statisticsTransactionUseCase = new StatisticsTransactionUseCase(transactionRepository);
const statisticsTransactionController = new StatisticsTransactionController(statisticsTransactionUseCase);

export { createTransactionController, deleteTransactionsController, statisticsTransactionController };