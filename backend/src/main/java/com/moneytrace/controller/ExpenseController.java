package com.moneytrace.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moneytrace.exception.HttpStatusNotFoundException;
import com.moneytrace.model.Expense;
import com.moneytrace.repository.ExpenseRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ExpenseController {

    private final ExpenseRepository expenseRepository;

	@Autowired
	public ExpenseController(ExpenseRepository expenseRepository){
		this.expenseRepository = expenseRepository;
	}

	@GetMapping("/expense")
	public List<Expense> getExpenses(){
		List<Expense> expenses = expenseRepository.findAll();
		return expenses;
	}

	@PostMapping("/expense")
	public Expense createExpense(@RequestBody Expense postExpense) {
		Expense expense = getCreateExpense(postExpense);
		return expenseRepository.save(expense);
	}

	@GetMapping("/expense/{id}")
	public ResponseEntity<Expense> getExpense(@PathVariable(value = "id") long id){
		Expense expense = getExpenseFindById(id);
		return ResponseEntity.ok(expense);
	}

	@PutMapping("/expense/{id}")
	public ResponseEntity<Expense> updateExpense(@PathVariable Long id, @RequestBody Expense putExpense){
		Expense expense = getExpenseFindById(id);

		expense.setSettingId(putExpense.getSettingId());
		expense.setAmount(putExpense.getAmount());

		Expense updateExpense = expenseRepository.save(expense);
		return ResponseEntity.ok(updateExpense);
	}

	@DeleteMapping("/expense/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteExpense(@PathVariable Long id){
		Expense expense = getExpenseFindById(id);
		expenseRepository.delete(expense);
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	private Expense getExpenseFindById(long id){
		return expenseRepository.findById(id)
		.orElseThrow(() -> new HttpStatusNotFoundException("Expense record not found with id :" + id));
	}

	private Expense getCreateExpense(Expense expense){
		Expense createExpense = new Expense();
		createExpense.setSettingId(expense.getSettingId());
		createExpense.setAmount(expense.getSettingId());
		return createExpense;
	}
}