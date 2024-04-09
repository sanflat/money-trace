package com.moneytrace.object;

import java.util.Map;

public class Balance {
    private Map<String, String> income;
    private Map<String, String> expense;
    private String balance;

    public Map<String, String> getIncome(){
        return income;
    }
    public Map<String, String> getExpense(){
        return expense;
    }
    public String getBalance(){
        return balance;
    }

    public void setIncome(Map<String,String> income){
        this.income = income;
    }
    public void setExpense(Map<String,String> expense){
        this.expense = expense;
    }
    public void setBalance(String balance){
        this.balance = balance;
    }

}