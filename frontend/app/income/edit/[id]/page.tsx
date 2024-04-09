import { Card, Title, Text } from '@tremor/react';
import IncomesForm from '../../component/form';

export default async function IncomeEdit( {params}: { params : {id: number} }){
    return(
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
            <Title>Income Edit : row Id #{params.id}</Title>
            <Text>Income to Edit in the Postgres database.</Text>
            <Card className="mt-6">
                <IncomesForm id={params.id}/>
            </Card>
        </main>
    )   
}