import { Card, Title, Text } from '@tremor/react';
import ExpenseForm from '../../component/form';

export default async function ExpenseEdit( {params}: { params : {id: number} }){
    return(
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
            <Title>Expense Edit : row Id #{params.id}</Title>
            <Text>Expense to Edit in the Postgres database.</Text>
            <Card className="mt-6">
                <ExpenseForm id={params.id}/>
            </Card>
        </main>
    )   
}