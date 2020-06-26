import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagePage } from './message.page';

describe('MessagePage', () => {
  let component: MessagePage;
  let fixture: ComponentFixture<MessagePage>;

  beforeEach(async(() => {

    fixture = TestBed.createComponent(MessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
