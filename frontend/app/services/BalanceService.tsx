import axios from 'axios';
import { Balance } from '../balance/interfaces/balance';
import { BalanceHistory } from '../balance/interfaces/balanceHistory';

const BALANCE_API_BASE_URL = "http://localhost:8080/api/v1/balance";

class BalanceService {

    getBalance(){
        return axios.get<Balance>(BALANCE_API_BASE_URL);
    }

    getBalanceHistories(){
        return axios.get<BalanceHistory[]>(BALANCE_API_BASE_URL + "/history");
    }
}

export default new BalanceService()