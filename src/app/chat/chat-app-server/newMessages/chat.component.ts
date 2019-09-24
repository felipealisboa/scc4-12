import { Component } from '@angular/core';
import { MessageService } from '../../../message.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  user: string;
  message: string;

  constructor(private messageService: MessageService) { }

  newMessage(text: string, user: string): void {
    this.messageService.send({text: text, user: user});
    this.message = '';
  }

}
