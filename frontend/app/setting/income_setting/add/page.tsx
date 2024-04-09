import { Card, Title, Text } from '@tremor/react';
import IncomesSettingForm from '../../component/IncomeSettingForm';

export default async function IncomeSettingAdd(){

 return(
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
    <Title>New Income Setting Add</Title>
    <Text>New Income Setting to Add in the Postgres database.</Text>
    <Card className="mt-6">
        <IncomesSettingForm id={0}/>
    </Card>
</main>
 )   
}