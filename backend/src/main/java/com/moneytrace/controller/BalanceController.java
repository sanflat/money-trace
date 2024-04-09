package com.moneytrace.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.moneytrace.object.IHistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moneytrace.object.Balance;
import com.moneytrace.object.BalanceHistory;
import com.moneytrace.repository.IncomeRepository;
import com.moneytrace.repository.ExpenseRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class BalanceController {

    private final IncomeRepository incomeRepository;
	private final ExpenseRepository expenseRepository;

	@Autowired
	public BalanceController(IncomeRepository incomeRepository, ExpenseRepository expenseRepository) {
		this.incomeRepository = incomeRepository;
		this.expenseRepository = expenseRepository;
	}

	@GetMapping("/balance")
	public Balance getBalance(){
		Balance balanceObj = new Balance();

		int totalIncome = incomeRepository.selectTotals().getAmountSum();
		int totalExpense = expenseRepository.selectTotals().getAmountSum();

		double shareIncome = getShare(totalIncome, totalExpense);
		double shareExpense = getShare(totalExpense, totalIncome);
		int balance = totalIncome - totalExpense;

		balanceObj.setIncome(getBalanceMap(totalIncome, shareIncome));
		balanceObj.setExpense(getBalanceMap(totalExpense, shareExpense));
		balanceObj.setBalance(getPriceFormat(balance));

		return balanceObj;
	}

	@GetMapping("/balance/history")
	public List<BalanceHistory> getBalanceHistory(){

		List<IHistory> histories = incomeRepository.selectBalanceHistory();
		List<BalanceHistory> balanceHistories = new ArrayList<>();
		int calcAmount = 0;
		for (IHistory date : histories){
			if(date.getType().equals("INCOME")){
				calcAmount = calcAmount + date.getAmount();
			}else{
				calcAmount = calcAmount - date.getAmount();
			}
			BalanceHistory history = new BalanceHistory();
			history.setType(date.getType());
			history.setCategory(date.getCategory());
			history.setAmount(getPriceFormat(date.getAmount()));
			history.setBalance(getPriceFormat(calcAmount));
			history.setDate(date.getDate());
			balanceHistories.add(history);
		}

		return balanceHistories;
	}

	private double getShare(int compare, int other){
		int source = compare + other;
		double share = (double) compare / source;
		return share;
	}

	private Map<String,String> getBalanceMap(int price, double share){
		Map<String,String> map = new HashMap();
		map.put("price", getPriceFormat(price));
		map.put("share", getShareFormat(share));
		return map;
	}

	private String getPriceFormat(int price){
		String currency = "¥";
		return currency + price;
	}

	private String getShareFormat(double share){
		String percent = "%";
		double percentShare = share * 100;
		return String.format("%.1f", percentShare) + percent;
	}

}