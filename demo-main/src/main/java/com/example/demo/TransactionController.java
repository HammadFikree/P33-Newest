package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TransactionController {

    @GetMapping("/transactions/{accountId}")
    public ResponseEntity<List<Transaction>> getTransactions(@PathVariable String accountId) {
        List<Transaction> transactions = new ArrayList<>();
        transactions.add(new Transaction("7/1/2015", "7346", "DEPOSIT", "5000.00", "5000.00")); // Example data
        return ResponseEntity.ok(transactions);
    }
}
