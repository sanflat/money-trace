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
import com.moneytrace.model.ExpenseSetting;
import com.moneytrace.repository.ExpenseSettingRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ExpenseSettingController {

    private final ExpenseSettingRepository expenseSettingRepository;

	@Autowired
	public ExpenseSettingController(ExpenseSettingRepository expenseSettingRepository){
		this.expenseSettingRepository = expenseSettingRepository;
	}

	@GetMapping("/expense_setting")
	public List<ExpenseSetting> getExpenseSetting(){
		List<ExpenseSetting> expenseSettings = expenseSettingRepository.findAll();
		return expenseSettings;
	}

	@PostMapping("/expense_setting")
	public ExpenseSetting createExpenseSetting(@RequestBody ExpenseSetting expenseSetting) {
		return expenseSettingRepository.save(expenseSetting);
	}

	@GetMapping("/expense_setting/{id}")
	public ResponseEntity<ExpenseSetting> getExpenseSetting(@PathVariable(value = "id") long id){
		ExpenseSetting expenseSetting = getExpenseSettingFindById(id);
		return ResponseEntity.ok(expenseSetting);
	}

	@PutMapping("/expense_setting/{id}")
	public ResponseEntity<ExpenseSetting> updateExpenseSetting(@PathVariable Long id, @RequestBody ExpenseSetting putExpenseSetting){
		ExpenseSetting expenseSetting = getExpenseSettingFindById(id);

		expenseSetting.setCategoryName(putExpenseSetting.getCategoryName());

		ExpenseSetting updateExpenseSetting = expenseSettingRepository.save(expenseSetting);
		return ResponseEntity.ok(updateExpenseSetting);
	}

	@DeleteMapping("/expense_setting/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteIncome(@PathVariable Long id){
		ExpenseSetting expenseSetting = getExpenseSettingFindById(id);

		expenseSettingRepository.delete(expenseSetting);
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	private ExpenseSetting getExpenseSettingFindById(long id){
		return expenseSettingRepository.findById(id)
		.orElseThrow(() -> new HttpStatusNotFoundException("Expense Setting record not found with id :" + id));
	}
}