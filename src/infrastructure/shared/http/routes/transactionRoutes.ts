import { Router } from 'express';
import { createTransactionController, deleteTransactionsController, statisticsTransactionController } from '../../../../application/factories/TransactionFactory';
import { Joi, Segments, celebrate } from "celebrate";

const transactionRoutes = Router(); 

transactionRoutes.post('/transacao', 
  celebrate({
    [Segments.BODY]: {
      valor: Joi.number().min(0).required()
        .messages({
          'any.required': 'Valor é obrigatório',
          'number.base': 'Valor deve ser um número',
          'number.min': 'Valor deve ser maior ou igual a zero',
        }),
      dataHora: Joi.date().iso().required()
        .messages({
          'any.required': 'Data e hora são obrigatórios',
          'date.format': 'Data e hora devem estar no formato ISO 8601',
        })
    }
  })
  ,(req, res) => {
  createTransactionController.handler(req, res);
});

transactionRoutes.delete('/transacao', (req, res) => {
  deleteTransactionsController.handler(req, res);
});

transactionRoutes.get('/estatistica', (req, res) => {
  statisticsTransactionController.handler(req, res);
});


export { transactionRoutes };