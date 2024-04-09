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
import { ExpenseSetting } from '../interfaces/expenseSetting';

export default function ExpenseSettingsTable({ expenses }: { expenses: ExpenseSetting[] }) {
  return (
    <main>
      <Button color="blue" size="lg">
        <Link href="/setting/expense_setting/add">#New Expense Setting Add</Link>
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Edit Row</TableHeaderCell>
            <TableHeaderCell>Category Name</TableHeaderCell>
            <TableHeaderCell>CreatedDate</TableHeaderCell>
            <TableHeaderCell>UpdatedDate</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense) => (
          <TableRow key={expense.settingId}>
            <TableCell>
              <Badge color="cyan" size="lg">
                  <Link href={`/setting/expense_setting/edit/${encodeURIComponent(expense.settingId)}`}>#{expense.settingId}</Link>
              </Badge>
            </TableCell>
            <TableCell>
              {expense.categoryName}
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
