"use client"
import { useState, useEffect } from 'react';
import { Card, Title, Text } from '@tremor/react';
import Search from '../../search';
import { Expense } from '../interfaces';
import ExpenseTable from '../component/table';
import ExpenseService from '../../services/ExpenseService';

export default function ExpenseList ({
    searchParams
  }: {
    searchParams: { q: string };
  }) {

    const search = searchParams.q ?? '';
    const [expenses, setExpenses] = useState<Expense[]>([])
    const getExpenses = async () => {
        const { data } = await ExpenseService.getExpenses();
        setExpenses(data);
    }
    useEffect(() => {
        getExpenses()
    }, [])

    return(
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
            <Title>Expense</Title>
            <Text>A list of expenses retrieved from a Postgres database.</Text>
            {/* <Search /> */}
            <Card className="mt-6">
                <ExpenseTable expenses={expenses} />
            </Card>
        </main>
    )
}