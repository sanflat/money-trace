import { Card, Title, Text } from '@tremor/react';
import ExpenseSettingForm from '../../component/ExpenseSettingForm';

export default async function ExpenseSettingAdd(){

 return(
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
    <Title>New Expense Setting Add</Title>
    <Text>New Expense Setting to Add in the Postgres database.</Text>
    <Card className="mt-6">
        <ExpenseSettingForm id={0}/>
    </Card>
</main>
 )   
}