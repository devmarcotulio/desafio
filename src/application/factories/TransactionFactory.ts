import { CreateTransactionUseCase } from "../../domain/usecases/CreateTransactionUseCase";
import { InMemoryDatabase } from "../../infrastructure/database/InMemoryDatabase";
import { CreateTransactionController } from "../controllers/CreateTransactionController";

const transactionRepository = new InMemoryDatabase();

const createTransactionUseCase = new CreateTransactionUseCase(transactionRepository);
const createTransactionController = new CreateTransactionController(createTransactionUseCase);

export { createTransactionController };