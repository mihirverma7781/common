import { Subjects } from "../base/subjects";

export interface ITicketUpdatedEvent {
  subject: Subjects.TicketUpdated;
  data: {
    id: string;
    title: string;
    price: number;
    quantity: number;
    userId: string;
  };
}
