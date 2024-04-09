import axios from 'axios';
import { Income } from '../income/interfaces';

const INCOME_API_BASE_URL = "http://localhost:8080/api/v1/income";


class IncomeService {

    getIncomes(){
        return axios.get<Income[]>(INCOME_API_BASE_URL);
    }

    createIncome(income : Income){
        return axios.post(INCOME_API_BASE_URL, income);
    }

    getIncomeById(incomeId : number){
        return axios.get<Income>(INCOME_API_BASE_URL + '/' + incomeId);
    }

    updateIncome(income : Income, incomeId: number){
        return axios.put(INCOME_API_BASE_URL + '/' + incomeId, income);
    }

    deleteIncome(incomeId: number){
        return axios.delete(INCOME_API_BASE_URL + '/' + incomeId);
    }
}

export default new IncomeService()