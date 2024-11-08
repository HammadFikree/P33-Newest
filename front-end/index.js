const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const app = express();
const PORT = 3000;

app.get('/transactions/:accountId', (req, res) => {
    const accountId = req.params.accountId;
    const filePath = `../demo-main/src/Accounts/Account${accountId}Transactions.csv`;

    const transactions = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
          delete row[""]; 
          transactions.push(row);
      })
      .on('end', () => {
          res.json(transactions);
      })
      .on('error', (error) => {
          res.status(500).json({ message: 'Error reading the file', error });
      });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
