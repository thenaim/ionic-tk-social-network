import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Config, IonContent, IonItemSliding, NavController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { lastValueFrom, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MessagesActions, PinMessage, UnPinMessage } from './messages.actions';
import { MessageModel } from './messages.model';
import { selectMessages, selectMessagesLoadingStates } from './messages.selectors';

@Component({
  selector: 'app-messages',
  templateUrl: 'messages.page.html',
  styleUrls: ['messages.page.scss'],
})
export class MessagesPage implements OnInit {
  @ViewChild(IonContent) ionContent: IonContent;
  @ViewChild(IonItemSliding) ionItemSliding: IonItemSliding;

  @Select(selectMessages()) messages$: Observable<MessageModel[]>;
  @Select(selectMessagesLoadingStates()) loadingMessagesStates$: Observable<{
    isLoading: boolean;
    isFailed: boolean;
    isSuccess: boolean;
  }>;

  messagesList: any[];
  searchMessageList: FormControl = new FormControl('');
  showSearchbar = false;
  isIos = false;

  constructor(private store: Store, private config: Config, private navController: NavController) {
    this.isIos = this.config.get('mode') === 'ios';
  }

  trackByMessages(index) {
    return index;
  }

  async doRefresh(event) {
    this.searchMessageList.setValue('', {
      emitEvent: false,
    });
    await lastValueFrom(this.store.dispatch(new MessagesActions.FetchMessages(this.searchMessageList.value)));
    setTimeout(() => {
      event.target.complete();
    });
  }

  openMessageDetail(userMessage: MessageModel) {
    this.navController.navigateForward(`/message-detail/${userMessage.id}`);
  }

  async pinMessage(id: string) {
    await lastValueFrom(this.store.dispatch(new PinMessage(id)));
    await this.ionItemSliding.closeOpened();
  }

  async unPinMessage(id: string) {
    await lastValueFrom(this.store.dispatch(new UnPinMessage(id)));
    await this.ionItemSliding.closeOpened();
  }

  async ngOnInit() {
    await lastValueFrom(this.store.dispatch(new MessagesActions.FetchMessages(this.searchMessageList.value)));

    this.searchMessageList.valueChanges.pipe(debounceTime(300)).subscribe((search: string) => {
      this.store.dispatch(new MessagesActions.FetchMessages(search));
    });
  }

  ionViewDidEnter() {}

  ionViewDidLeave() {}
}
