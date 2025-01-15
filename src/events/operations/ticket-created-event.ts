import { Subjects } from "../base/subjects";

export interface ITicketCreatedEvent {
  subject: Subjects.TicketCreated;
  data: {
    id: string;
    title: string;
    price: number;
    quantity: number;
    userId: string;
  };
}
