package com.moneytrace.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.moneytrace.model.Expense;
import com.moneytrace.object.IAmountSum;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long>{
    @Query(value = "SELECT sum(amount) AS amountSum FROM expenses", nativeQuery = true)
    IAmountSum selectTotals();

}