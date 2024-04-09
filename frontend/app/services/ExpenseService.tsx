import axios from 'axios';
import { Expense } from '../expense/interfaces';

const EXPENSE_API_BASE_URL = "http://localhost:8080/api/v1/expense";

class ExpenseService {

    getExpenses(){
        return axios.get<Expense[]>(EXPENSE_API_BASE_URL);
    }

    createExpense(expense : Expense){
        return axios.post(EXPENSE_API_BASE_URL, expense);
    }

    getExpenseById(expenseId : number){
        return axios.get<Expense>(EXPENSE_API_BASE_URL + '/' + expenseId);
    }

    updateExpense(expense : Expense, expenseId: number){
        return axios.put(EXPENSE_API_BASE_URL + '/' + expenseId, expense);
    }

    deleteExpense(expenseId: number){
        return axios.delete(EXPENSE_API_BASE_URL + '/' + expenseId);
    }
}

export default new ExpenseService()