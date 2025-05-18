# API de Transações e Estatísticas

Projeto de uma API REST que recebe transações financeiras e retorna estatísticas com base nas transações dos últimos 60 segundos, ou de forma dinâmica.

## Tecnologias utilizadas

- Node.js
- Express

## Endpoints

### `POST /transacoes`
- Recebe uma transação no seguinte formato:

```json
{
  "valor": 100.5,
  "dataHora": "2025-05-18T14:30:00.000Z"
}
```

### `DELETE /transacoes`
- Deleta todas as transações.

### `GET /estatisticas`
- Retorna as estatísticas dos úlitmos 60 segundos, caso não seja passado a query time na URL da requisição.

## Extras
- Foi adicionado logs na aplicação, mostrando o que está acontecendo enquanto ela trabalha.
- Um endpoint de observabilidade, para mostrar a saúde da aplicação. **/saude**.
- O endpoint **/estatisticas** também mostra quanto tempo é necessário para o seu cálculo, trazendo consigo dados sobre performance.
