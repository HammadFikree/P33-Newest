package com.example.demo;

import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.opencsv.CSVReader;

@RestController
public class TransactionController {

    @GetMapping("/transactions/{accountId}")
    public ResponseEntity<List<Transaction>> getTransactions(@PathVariable String accountId) {
        List<Transaction> transactions = new ArrayList<>();
        String filePath = "src/Accounts/Account" + accountId + "Transactions.csv";

        try (CSVReader reader = new CSVReader(new FileReader(filePath))) {
            String[] nextLine;
            reader.readNext(); // Skip header row
            while ((nextLine = reader.readNext()) != null) {
                Transaction transaction = new Transaction(
                    nextLine[1], // date
                    nextLine[2], // card
                    nextLine[3], // type
                    nextLine[4], // amount
                    nextLine[5]  // balance
                );
                transactions.add(transaction);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).build();
        }

        return ResponseEntity.ok(transactions);
    }
}
