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
import { IncomeSetting } from '../interfaces/incomeSetting';

export default function IncomeSettingsTable({ incomes }: { incomes: IncomeSetting[] }) {
  return (
    <main>
      <Button color="blue" size="lg">
        <Link href="/setting/income_setting/add">#New Income Setting Add</Link>
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
          {incomes.map((income) => (
          <TableRow key={income.settingId}>
            <TableCell>
              <Badge color="cyan" size="lg">
                  <Link href={`/setting/income_setting/edit/${encodeURIComponent(income.settingId)}`}>#{income.settingId}</Link>
              </Badge>
            </TableCell>
            <TableCell>
              {income.categoryName}
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
