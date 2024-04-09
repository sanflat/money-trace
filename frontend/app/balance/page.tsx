'use client';

import { Card, Title, Grid, DonutChart,List, ListItem } from '@tremor/react';
import History from './history';
import { useState, useEffect } from 'react';
import BalanceService from '../services/BalanceService';
import { Balance } from './interfaces/balance';
import { BalanceHistory } from './interfaces/balanceHistory';

const dataFormatter = (number: number) =>
  `${Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(number).toString()}`;

const getDonut = (incomePrice:number, expensePrice:number) => {
  const data = [
    {
      name: "INCOME",
      value: incomePrice
    },
    {
      name: "EXPENSE",
      value: expensePrice      
    }
  ];
  return data;
}

export default function BalancePage() {
  const [balance, setBalance] = useState<Balance>();
  const [balanceHistories, setBalanceHistories] = useState<BalanceHistory[]>([]);

  const getBalance = async () => {
    const { data } = await BalanceService.getBalance();
    setBalance(data);
  }
  
  const getBalanceHistories = async () => {
    const {data} = await BalanceService.getBalanceHistories();
    setBalanceHistories(data);
  }

  useEffect(() => {
    getBalance();
    getBalanceHistories();
  }, [])

  const donut = getDonut(Number(balance?.income.price.slice(1)), Number(balance?.expense.price.slice(1)));

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Grid numItemsSm={2} numItemsLg={2} className="gap-6">
          <Card>
            <Title>Balance Donut</Title>
            <DonutChart
              data={donut}
              variant="donut"
              valueFormatter={dataFormatter}
              onValueChange={(v) => console.log(v)}
            />
          </Card>
          <Card>
           <p className="mt-8 flex items-center justify-between text-tremor-label text-tremor-content dark:text-dark-tremor-content">
            <span>Category</span>
            <span>Amount / Share</span>
           </p>
           <List className="mt-2">
            <ListItem  className="space-x-6">
              <div className="flex items-center space-x-2.5 truncate">
                <span
                  aria-hidden={true}
                />
                <span className="truncate dark:text-dark-tremor-content-emphasis">
                  Income
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium tabular-nums text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  {balance?.income.price}
                </span>
                <span className="rounded-tremor-small bg-tremor-background-subtle px-1.5 py-0.5 text-tremor-label font-medium tabular-nums text-tremor-content-emphasis dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-emphasis">
                  {balance?.income.share}
                </span>
              </div>
            </ListItem>

            <ListItem  className="space-x-6">
              <div className="flex items-center space-x-2.5 truncate">
                <span
                  aria-hidden={true}
                />
                <span className="truncate dark:text-dark-tremor-content-emphasis">
                  Expense
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium tabular-nums text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  -{balance?.expense.price}
                </span>
                <span className="rounded-tremor-small bg-tremor-background-subtle px-1.5 py-0.5 text-tremor-label font-medium tabular-nums text-tremor-content-emphasis dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-emphasis">
                  {balance?.expense.share}
                </span>
              </div>
            </ListItem>

            <ListItem  className="space-x-6">
              <div className="flex items-center space-x-2.5 truncate">
                <span
                  aria-hidden={true}
                />
                <span className="truncate dark:text-dark-tremor-content-emphasis">
                  Balance
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium tabular-nums text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  {balance?.balance}
                </span>
                <span className="rounded-tremor-small bg-tremor-background-subtle px-1.5 py-0.5 text-tremor-label font-medium tabular-nums text-tremor-content-emphasis dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-emphasis">
                  --%
                </span>
              </div>
            </ListItem>
           </List>
          </Card>
      </Grid>
      <History histories={balanceHistories} />
    </main>
  );
}
