import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IonContent } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { lastValueFrom } from 'rxjs';
import { AppStoreModel } from '../../../../core/store';
import { MessageSendActions } from '../../message-detail.actions';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[appMessagesDetailFooter]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class MessagesDetailFooterComponent implements OnInit {
  @Input() ionContent: IonContent;

  messageControl: FormControl = new FormControl('', [Validators.required]);
  constructor(private store: Store) {}

  async sendMessage(event) {
    event.preventDefault();

    const messageId = this.store.selectSnapshot((state: AppStoreModel) => state.router.state.root.params.messageId);
    await lastValueFrom(this.store.dispatch(new MessageSendActions.Send(messageId, this.messageControl.value)));

    setTimeout(() => {
      this.messageControl.setValue('');
      this.ionContent.scrollToBottom(0);
    });
  }

  ngOnInit() {}
}
