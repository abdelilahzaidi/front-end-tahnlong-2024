// sent-messages.model.ts
export interface Receiver {
  firstName: string;
  lastName: string;
}

export interface SentMessage {
  id: number;
  titre: string;
  content: string;
  dateHeureEnvoie: Date;
  receivers: Receiver[];
}

export interface SentMessages {
  sender: {
    firstName: string;
    lastName: string;
  };
  sentMessages: SentMessage[];
}
