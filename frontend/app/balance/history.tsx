'use client';

import { Card, Title, Text } from '@tremor/react';
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Badge,
} from '@tremor/react';
import { BalanceHistory } from './interfaces/balanceHistory';

export default function History({ histories }: { histories: BalanceHistory[] }) {
  return (
    <Card className="mt-8">
      <Title>History</Title>
      <Text>A list of barance history retrieved from a Postgres database.</Text>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Type</TableHeaderCell>
            <TableHeaderCell>Category</TableHeaderCell>
            <TableHeaderCell>Amount</TableHeaderCell>
            <TableHeaderCell>Barance</TableHeaderCell>
            <TableHeaderCell>Date</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {histories.map((history) => (
          <TableRow>
            <TableCell>
              <Badge color="cyan" size="lg">
                {history.type}
              </Badge>
            </TableCell>
            <TableCell>
              {history.category}
            </TableCell>
            <TableCell>
              {history.amount}
            </TableCell>
            <TableCell>
              {history.balance}
            </TableCell>
            <TableCell>
              {history.date}
            </TableCell>
          </TableRow>            
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
