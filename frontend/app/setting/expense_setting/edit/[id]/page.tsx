import { Card, Title, Text } from '@tremor/react';
import ExpenseSettingForm from '../../../component/ExpenseSettingForm';

export default async function ExpenseSettingEdit( {params}: { params : {id: number} }){
    return(
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
            <Title>Expense Setting Edit : row Id #{params.id}</Title>
            <Text>Expense Setting to Edit in the Postgres database.</Text>
            <Card className="mt-6">
                <ExpenseSettingForm id={params.id}/>
            </Card>
        </main>
    )   
}