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
import com.moneytrace.model.IncomeSetting;
import com.moneytrace.repository.IncomeSettingRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class IncomeSettingController {

    private final IncomeSettingRepository incomeSettingRepository;

	@Autowired
	public IncomeSettingController(IncomeSettingRepository incomeSettingRepository){
		this.incomeSettingRepository = incomeSettingRepository;
	}

	@GetMapping("/income_setting")
	public List<IncomeSetting> getIncomeSetting(){
		List<IncomeSetting> incomeSettings = incomeSettingRepository.findAll();
		return incomeSettings;
	}

	@PostMapping("/income_setting")
	public IncomeSetting createIncomeSetting(@RequestBody IncomeSetting incomeSetting) {
		return incomeSettingRepository.save(incomeSetting);
	}

	@GetMapping("/income_setting/{id}")
	public ResponseEntity<IncomeSetting> getIncomeSetting(@PathVariable(value = "id") long id){
		IncomeSetting incomeSetting = getIncomeSettingFindById(id);
		return ResponseEntity.ok(incomeSetting);
	}

	@PutMapping("/income_setting/{id}")
	public ResponseEntity<IncomeSetting> updateIncomeSetting(@PathVariable Long id, @RequestBody IncomeSetting putIncomeSetting){
		IncomeSetting incomeSetting = getIncomeSettingFindById(id);

		incomeSetting.setCategoryName(putIncomeSetting.getCategoryName());

		IncomeSetting updateIncomeSetting = incomeSettingRepository.save(incomeSetting);
		return ResponseEntity.ok(updateIncomeSetting);
	}

	@DeleteMapping("/income_setting/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteIncome(@PathVariable Long id){
		IncomeSetting incomeSetting = getIncomeSettingFindById(id);

		incomeSettingRepository.delete(incomeSetting);
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	private IncomeSetting getIncomeSettingFindById(long id){
		return incomeSettingRepository.findById(id)
		.orElseThrow(() -> new HttpStatusNotFoundException("Income Setting record not found with id :" + id));
	}
}