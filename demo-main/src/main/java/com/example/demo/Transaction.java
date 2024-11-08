package com.example.demo;

public class Transaction {
    private String date;
    private String card;
    private String type;
    private String amount;
    private String balance;

    public Transaction(String date, String card, String type, String amount, String balance) {
        this.date = date;
        this.card = card;
        this.type = type;
        this.amount = amount;
        this.balance = balance;
    }

    public String getDate() { return date; }
    public String getCard() { return card; }
    public String getType() { return type; }
    public String getAmount() { return amount; }
    public String getBalance() { return balance; }
}
