'use client';

import { TextInput } from '@tremor/react';
import React, { useState, useEffect } from 'react';
import { ExpenseSetting } from '../interfaces/expenseSetting';
import ExpenseSettingService from '../../services/ExpenseSettingService';
import { useRouter } from 'next/navigation';

export default function ExpenseSettingForm({ id }:{ id: number }  ) {

  const router = useRouter();
  const [isAddPage, setIsAddPage] = useState(true);
  const [expense, setExpense] = useState<ExpenseSetting>({
    settingId: 0,
    categoryName: "",
    createdDate: "",
    updatedDate: ""
  });

  const transitionSettingList = () => {
    router.push('/setting/list');
  }

  const getExpense = async (id:number) => {
    const {data} = await ExpenseSettingService.getExpenseSettingById(id);
    setExpense(data);
    setIsAddPage(false);
  }

  if(0 != id){
    useEffect(() => {
      getExpense(id);
    }, []);
  }

  const createOrUpdateExpense = (e:any) => {
    if(id != 0){
      ExpenseSettingService.updateExpenseSetting(expense, id);
    }else{
      ExpenseSettingService.createExpenseSetting(expense);
    }
    transitionSettingList();
  }

  const deleteExpense = (e:any) => {
    ExpenseSettingService.deleteExpenseSetting(id);
    transitionSettingList();
  }

  const changeCategoryNameHandler = (value:string) => {
    setExpense({...expense, categoryName: value});
  };

  return (
    <main>
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Expense Setting Category</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Expense category name you set up.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">

                <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                   Expense Category Name
                </label>
                <TextInput type='text' value={expense.categoryName} onValueChange={changeCategoryNameHandler} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button 
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
            hidden={isAddPage}
            onClick={deleteExpense}
          >
            Delete
          </button>
          <button
            type="button"
            onClick={createOrUpdateExpense}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </main>
  );
}
