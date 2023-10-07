import { Table } from '@radix-ui/themes';
import delay from 'delay';
import IssueActionButton from './IssueActionButton';
import prisma from '@/prisma/client';
const IssuesPage = async () => {

     const issues = await prisma.issue.findMany()

    return (
    <div>
        <IssueActionButton/>  
        <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Created</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map(issue => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                {issue.title}
                <div className='block md:hidden'>
                </div>
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'>
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}
export default IssuesPage;
