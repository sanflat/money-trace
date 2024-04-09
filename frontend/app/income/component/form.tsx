'use client';

import { Select, SelectItem, NumberInput} from '@tremor/react';
import React, { useState, useEffect } from 'react';
import { Income } from '../interfaces';
import { IncomeSetting } from '../../setting/interfaces/incomeSetting';
import IncomeService from '../../services/IncomeService';
import IncomeSettingService from '../../services/IncomeSettingService';
import { useRouter } from 'next/navigation';

export default function IncomesForm({ id }:{ id: number }  ) {

  const router = useRouter();
  const [isAddPage, setIsAddPage] = useState(true);
  const [categorys, setCategorys] = useState<IncomeSetting[]>([]);
  const [income, setIncome] = useState<Income>({
    id: 0,
    settingId: 0,
    amount: 0,
    createdDate: "",
    updatedDate: "",
    incomeSetting: {
      settingId: 0,
      categoryName: "",
      createdDate: "",
      updatedDate: "",
    }
  });

  const transitionIncomeList = () => {
    router.push('/income/list');
  }

  const getCategory = async () => {
    const {data} = await IncomeSettingService.getIncomeSettings();
    setCategorys(data);
  }

  const getIncome = async (id:number) => {
    const {data} = await IncomeService.getIncomeById(id);
    setIncome(data);
    setIsAddPage(false);
  }

  useEffect(() => {
    if(0 != id){
      getIncome(id);
    }
    getCategory();
  }, []);

  const createOrUpdateIncome = (e:any) => {
    if(id != 0){
      IncomeService.updateIncome(income, id);
    }else{
      IncomeService.createIncome(income);
    }
    transitionIncomeList();
  }

  const deleteIncome = (e:any) => {
    IncomeService.deleteIncome(id);
    transitionIncomeList();
  }

  const changeSettingIdHandler = (value:string) => {
    setIncome({...income, settingId: Number(value)});
  };

  const changeAmountHandler = (value:number) => {
    setIncome({...income, amount: Number(value)});
  }

  return (
    <main>
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Income Category</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Select the income category you set up.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">

              <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                  Income Category
                </label>
                <Select value={String(income.settingId)} onValueChange={changeSettingIdHandler}>
                  {
                    categorys.map((category, index) => (
                      <SelectItem value={String(category.settingId)} key={index}>{category.categoryName}</SelectItem>
                    ))
                  }
                </Select>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Income Amount</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Enter the amount of income.</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">

              <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900">
                  Income Amount
                </label>
                <NumberInput value={income.amount} onValueChange={changeAmountHandler}></NumberInput>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button 
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
            hidden={isAddPage}
            onClick={deleteIncome}
          >
            Delete
          </button>
          <button
            type="button"
            onClick={createOrUpdateIncome}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </main>
  );
}
