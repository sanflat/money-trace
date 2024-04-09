package com.moneytrace.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.moneytrace.model.Expense;
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
import com.moneytrace.model.Income;
import com.moneytrace.repository.IncomeRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class IncomeController {

    private final IncomeRepository incomeRepository;

	@Autowired
	public IncomeController(IncomeRepository incomeRepository){
		this.incomeRepository = incomeRepository;
	}

	@GetMapping("/income")
	public List<Income> getIncomes(){
		List<Income> incomes = incomeRepository.findAll();
		System.out.println(incomes);
		return incomes;
	}

	@PostMapping("/income")
	public Income createIncome(@RequestBody Income postIncome) {
		Income income = getCreateIncome(postIncome);
		return incomeRepository.save(income);
	}

	@GetMapping("/income/{id}")
	public ResponseEntity<Income> getIncome(@PathVariable(value = "id") long id){
		Income income = getIncomeFindById(id);
		return ResponseEntity.ok(income);
	}

	@PutMapping("/income/{id}")
	public ResponseEntity<Income> updateIncome(@PathVariable Long id, @RequestBody Income putIncome){
		Income income = getIncomeFindById(id);

		income.setSettingId(putIncome.getSettingId());
		income.setAmount(putIncome.getAmount());

		Income updateIncome = incomeRepository.save(income);
		return ResponseEntity.ok(updateIncome);
	}

	@DeleteMapping("/income/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteIncome(@PathVariable Long id){
		Income income = getIncomeFindById(id);

		incomeRepository.delete(income);
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	private Income getIncomeFindById(long id){
		return incomeRepository.findById(id)
		.orElseThrow(() -> new HttpStatusNotFoundException("Income record not found with id :" + id));
	}

	private Income getCreateIncome(Income income){
		Income createIncome = new Income();
		createIncome.setSettingId(income.getSettingId());
		createIncome.setAmount(income.getSettingId());
		return createIncome;
	}
}