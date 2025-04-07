import { Router } from 'express';
import { createTransactionController, deleteTransactionsController, statisticsTransactionController } from '../../../../application/factories/TransactionFactory';
import { validator } from '../middlewares/zodValidator';
import { transactionSchema } from '../../../../domain/schemas/TransactionSchema';

const transactionRoutes = Router(); 

transactionRoutes.post('/transacao', 
  validator(transactionSchema),
  (req, res) => {
  createTransactionController.handler(req, res);
});

transactionRoutes.delete('/transacao', (req, res) => {
  deleteTransactionsController.handler(req, res);
});

transactionRoutes.get('/estatistica', (req, res) => {
  statisticsTransactionController.handler(req, res);
});


export { transactionRoutes };