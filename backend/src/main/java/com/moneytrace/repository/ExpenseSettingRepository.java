package com.moneytrace.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.moneytrace.model.ExpenseSetting;

@Repository
public interface ExpenseSettingRepository extends JpaRepository<ExpenseSetting, Long>{
    
}