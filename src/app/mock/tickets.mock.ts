import {Ticket} from "../interfaces/ticket.interface";

export const mockTickets: Ticket[] = [{
  id: 1,
  name: 'first-ticket',
  date: '2020-11-09T15:45:00.000Z',
  userId: 1,
},
  {
    id: 2,
    name: 'second-ticket',
    date: '2020-07-03T12:37:00.000Z',
    userId: 2,
  },
  {
    id: 3,
    name: 'third-ticket',
    date: '2020-08-25T13:04:00.000Z',
    userId: 3,
  },
  {
    id: 4,
    name: 'fourth-ticket',
    date: '2020-01-03T14:00:00.000Z',
    userId: 4,
  },
  {
    id: 5,
    name: 'fifth-ticket',
    date: '2020-05-05T10:30:00.000Z',
    userId: 1,
  }
]
