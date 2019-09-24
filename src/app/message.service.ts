import { Injectable } from '@angular/core';
import { ReplaySubject} from "rxjs";
import { PusherService } from './pusher.service';

export interface Message {
  text: string;
  user: string;
}

@Injectable({ providedIn: 'root' })
export class MessageService {
  messages: string[] = [];
  messagesStream = new ReplaySubject<Message>(1);

  constructor(
    private pusherService: PusherService
  ) {
    this.initialize();
  }

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
  initialize() {
    this.pusherService.messagesChannel.bind('client-new-message', (message) => {
      this.emitNewMessage(message);
    });
  }

  send(message: Message) {
    this.pusherService.messagesChannel.trigger('client-new-message', message);
    this.emitNewMessage(message);
  }

  emitNewMessage(message: Message) {
    this.messagesStream.next(message);
  }

}
