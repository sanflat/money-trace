import axios from 'axios';
import { ExpenseSetting } from '../setting/interfaces/expenseSetting';

const EXPENSE_SETTING_API_BASE_URL = "http://localhost:8080/api/v1/expense_setting";

class ExpenseSettingService {

    getExpenseSettings(){
        return axios.get<ExpenseSetting[]>(EXPENSE_SETTING_API_BASE_URL);
    }

    createExpenseSetting(expenseSetting : ExpenseSetting){
        return axios.post(EXPENSE_SETTING_API_BASE_URL, expenseSetting);
    }

    getExpenseSettingById(expenseSettingId : number){
        return axios.get<ExpenseSetting>(EXPENSE_SETTING_API_BASE_URL + '/' + expenseSettingId);
    }

    updateExpenseSetting(expenseSetting : ExpenseSetting, expenseSettingId: number){
        return axios.put(EXPENSE_SETTING_API_BASE_URL + '/' + expenseSettingId, expenseSetting);
    }

    deleteExpenseSetting(expenseSettingId: number){
        return axios.delete(EXPENSE_SETTING_API_BASE_URL + '/' + expenseSettingId);
    }
}

export default new ExpenseSettingService()