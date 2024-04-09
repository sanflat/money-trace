"use client"
import { useState, useEffect } from 'react';
import { Card, Title, Text } from '@tremor/react';
import Search from '../../search';
import { IncomeSetting } from '../interfaces/incomeSetting';
import { ExpenseSetting } from '../interfaces/expenseSetting';
import IncomeSettingsTable from '../component/IncomeSettingsTable';
import IncomeSettingService from '../../services/IncomeSettingService';
import ExpenseSettingService from '../../services/ExpenseSettingService';
import ExpenseSettingsTable from '../component/ExpenseSettingsTable';

export default function IncomeList ({
    searchParams
  }: {
    searchParams: { q: string };
  }) {

    const search = searchParams.q ?? '';

    const [incomes, setIncomes] = useState<IncomeSetting[]>([])
    const [expenses, setExpenses] = useState<ExpenseSetting[]>([])
    const getSettings = async () => {
        const { data } = await IncomeSettingService.getIncomeSettings();
        setIncomes(data);
    }
    const getExpenses = async () => {
        const { data } = await ExpenseSettingService.getExpenseSettings();
        setExpenses(data);
    } 

    useEffect(() => {
        getSettings();
        getExpenses();
    }, [])

    return(
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
            <Title>Setting</Title>
            <Text>A list of incomeSettings, Expense Settings retrieved from a Postgres database.</Text>
            {/* <Search /> */}
            <Card className="mt-6">
                <IncomeSettingsTable incomes={incomes} />
            </Card>
            <Card className="mt-6">
                <ExpenseSettingsTable expenses={expenses} />
            </Card>
        </main>
    )
}