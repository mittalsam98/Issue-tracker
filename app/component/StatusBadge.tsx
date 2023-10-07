import { Badge } from '@radix-ui/themes'
import React from 'react'
import {Status} from '@prisma/client'

const statusMapping : Record<Status, { label: string; color: 'red' | 'violet' |'green' }>={
    OPEN: { label: 'Open', color: 'red' },
    IN_PROGRESS: { label: 'Open', color: 'violet' },
    CLOSED: { label: 'Open', color: 'green' },
}

const IssueStatusBadge = ({ status }: { status: Status }) => {
  return (
    <Badge color={statusMapping[status].color}>
      {statusMapping[status].label}
    </Badge>
  )
}

export default IssueStatusBadge