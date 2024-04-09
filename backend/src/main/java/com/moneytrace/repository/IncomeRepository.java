package com.moneytrace.repository;

import com.moneytrace.object.BalanceHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.moneytrace.model.Income;
import com.moneytrace.object.IAmountSum;
import com.moneytrace.object.IHistory;

import java.util.List;

@Repository
public interface IncomeRepository extends JpaRepository<Income, Long>{
    @Query(value = "SELECT sum(amount) AS amountSum FROM incomes", nativeQuery = true)
    IAmountSum selectTotals();

    @Query(value = "("
            + "SELECT 'INCOME' AS type, category_name AS category, amount, incomes.created_date as date "
            + "FROM incomes "
            + "INNER JOIN income_setting ON incomes.setting_id = income_setting.setting_id "
            + ")"
            + "UNION"
            + "("
            + "SELECT 'EXPENSE' AS type, category_name AS category, amount, expenses.created_date as date "
            + "FROM expenses "
            + "INNER JOIN expense_setting ON expenses.setting_id = expense_setting.setting_id "
            + ")"
            + "ORDER BY date DESC", nativeQuery = true)
    List<IHistory> selectBalanceHistory();
}