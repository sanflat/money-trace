'use client';

import { TextInput } from '@tremor/react';
import React, { useState, useEffect } from 'react';
import { IncomeSetting } from '../interfaces/incomeSetting';
import IncomeSettingService from '../../services/IncomeSettingService';
import { useRouter } from 'next/navigation';

export default function IncomesSettingForm({ id }:{ id: number }  ) {

  const router = useRouter();
  const [isAddPage, setIsAddPage] = useState(true);
  const [income, setIncome] = useState<IncomeSetting>({
    settingId: 0,
    categoryName: "",
    createdDate: "",
    updatedDate: ""
  });

  const transitionSettingList = () => {
    router.push('/setting/list');
  }

  const getIncome = async (id:number) => {
    const {data} = await IncomeSettingService.getIncomeSettingById(id);
    setIncome(data);
    setIsAddPage(false);
  }

  if(0 != id){
    useEffect(() => {
      getIncome(id);
    }, []);
  }

  const createOrUpdateIncome = (e:any) => {
    if(id != 0){
      IncomeSettingService.updateIncomeSetting(income, id);
    }else{
      IncomeSettingService.createIncomeSetting(income);
    }
    transitionSettingList();
  }

  const deleteIncome = (e:any) => {
    IncomeSettingService.deleteIncomeSetting(id);
    transitionSettingList();
  }

  const changeCategoryNameHandler = (value:string) => {
    setIncome({...income, categoryName: value});
  };

  return (
    <main>
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Income Setting Category</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Income category name you set up.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">

                <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                    Income Category Name
                </label>
                <TextInput type='text' value={income.categoryName} onValueChange={changeCategoryNameHandler} />
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
