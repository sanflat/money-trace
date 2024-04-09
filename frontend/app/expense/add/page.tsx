import { Card, Title, Text } from '@tremor/react';
import ExpenseForm from '../component/form';

export default async function ExpenseAdd(){

 return(
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
    <Title>New Expense Add</Title>
    <Text>New Expense to Add in the Postgres database.</Text>
    <Card className="mt-6">
        <ExpenseForm id={0}/>
    </Card>
</main>
 )   
}