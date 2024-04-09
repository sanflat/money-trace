import axios from 'axios';
import { IncomeSetting } from '../setting/interfaces/incomeSetting';

const INCOME_SETTING_API_BASE_URL = "http://localhost:8080/api/v1/income_setting";

class IncomeSettingService {

    getIncomeSettings(){
        return axios.get<IncomeSetting[]>(INCOME_SETTING_API_BASE_URL);
    }

    createIncomeSetting(incomeSetting : IncomeSetting){
        return axios.post(INCOME_SETTING_API_BASE_URL, incomeSetting);
    }

    getIncomeSettingById(incomeSettingId : number){
        return axios.get<IncomeSetting>(INCOME_SETTING_API_BASE_URL + '/' + incomeSettingId);
    }

    updateIncomeSetting(incomeSetting : IncomeSetting, incomeSettingId: number){
        return axios.put(INCOME_SETTING_API_BASE_URL + '/' + incomeSettingId, incomeSetting);
    }

    deleteIncomeSetting(incomeSettingId: number){
        return axios.delete(INCOME_SETTING_API_BASE_URL + '/' + incomeSettingId);
    }
}

export default new IncomeSettingService()