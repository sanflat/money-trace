import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Button,
  Badge,
} from '@tremor/react';
import Link from 'next/link';
import { Expense } from '../interfaces';

export default function ExpenseTable({ expenses }: { expenses: Expense[] }) {
  return (
    <main>
      <Button color="blue" size="lg">
        <Link href="/expense/add">#New Expense Add</Link>
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Edit Row</TableHeaderCell>
            <TableHeaderCell>ExpenseCategory</TableHeaderCell>
            <TableHeaderCell>Amount</TableHeaderCell>
            <TableHeaderCell>CreatedDate</TableHeaderCell>
            <TableHeaderCell>UpdatedDate</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense) => (
          <TableRow key={expense.id}>
            <TableCell>
              <Badge color="cyan" size="lg">
                  <Link href={`/expense/edit/${encodeURIComponent(expense.id)}`}>#{expense.id}</Link>
              </Badge>
            </TableCell>
            <TableCell>
              {expense.expenseSetting.categoryName}
            </TableCell>
            <TableCell>
              {expense.amount}
            </TableCell>
            <TableCell>
              {expense.createdDate}
            </TableCell>
            <TableCell>
              {expense.updatedDate}
            </TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
