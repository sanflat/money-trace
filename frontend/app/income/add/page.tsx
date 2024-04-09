import { Card, Title, Text } from '@tremor/react';
import IncomesForm from '../component/form';

export default async function IncomeAdd(){

 return(
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
    <Title>New Income Add</Title>
    <Text>New Income to Add in the Postgres database.</Text>
    <Card className="mt-6">
        <IncomesForm id={0}/>
    </Card>
</main>
 )   
}