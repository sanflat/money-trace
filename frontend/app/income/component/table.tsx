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
import { Income } from '../interfaces';

export default function IncomesTable({ incomes }: { incomes: Income[] }) {
  return (
    <main>
      <Button color="blue" size="lg">
        <Link href="/income/add">#New Income Add</Link>
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Edit Row</TableHeaderCell>
            <TableHeaderCell>IncomeCategory</TableHeaderCell>
            <TableHeaderCell>Amount</TableHeaderCell>
            <TableHeaderCell>CreatedDate</TableHeaderCell>
            <TableHeaderCell>UpdatedDate</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {incomes.map((income) => (
          <TableRow key={income.id}>
            <TableCell>
              <Badge color="cyan" size="lg">
                  <Link href={`/income/edit/${encodeURIComponent(income.id)}`}>#{income.id}</Link>
              </Badge>
            </TableCell>
            <TableCell>
              {income.incomeSetting.categoryName}
            </TableCell>
            <TableCell>
              {income.amount}
            </TableCell>
            <TableCell>
              {income.createdDate}
            </TableCell>
            <TableCell>
              {income.updatedDate}
            </TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
