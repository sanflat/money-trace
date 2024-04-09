import { Card, Title, Text } from '@tremor/react';
import IncomesSettingForm from '../../../component/IncomeSettingForm';

export default async function IncomeSettingEdit( {params}: { params : {id: number} }){
    return(
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
            <Title>Income Setting Edit : row Id #{params.id}</Title>
            <Text>Income Setting to Edit in the Postgres database.</Text>
            <Card className="mt-6">
                <IncomesSettingForm id={params.id}/>
            </Card>
        </main>
    )   
}