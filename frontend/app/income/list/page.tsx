"use client"
import { useState, useEffect } from 'react';
import { Card, Title, Text } from '@tremor/react';
import Search from '../../search';
import { Income } from '../interfaces';
import IncomesTable from '../component/table';
import IncomeService from '../../services/IncomeService';

export default function IncomeList ({
    searchParams
  }: {
    searchParams: { q: string };
  }) {

    const search = searchParams.q ?? '';
    const [incomes, setIncomes] = useState<Income[]>([])
    const getIncomes = async () => {
        const { data } = await IncomeService.getIncomes();
        setIncomes(data);
    }
    useEffect(() => {
        getIncomes()
    }, [])

    return(
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
            <Title>Incomes</Title>
            <Text>A list of incomes retrieved from a Postgres database.</Text>
            {/* <Search /> */}
            <Card className="mt-6">
                <IncomesTable incomes={incomes} />
            </Card>
        </main>
    )
}