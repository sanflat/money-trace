package com.moneytrace.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.moneytrace.model.IncomeSetting;

@Repository
public interface IncomeSettingRepository extends JpaRepository<IncomeSetting, Long>{
    
}