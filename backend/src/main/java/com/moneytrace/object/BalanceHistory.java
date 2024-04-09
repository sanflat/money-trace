package com.moneytrace.object;

import java.util.Date;

public class BalanceHistory {

    private String type;
    private String category;
    private String amount;
    private String balance;
    private Date date;

    public BalanceHistory(){

    }
    public BalanceHistory(String type, String category, String amount, String balance, Date date) {
        this.type = type;
        this.category = category;
        this.amount = amount;
        this.balance = balance;
        this.date = date;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getBalance() {
        return balance;
    }

    public void setBalance(String balance) {
        this.balance = balance;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}