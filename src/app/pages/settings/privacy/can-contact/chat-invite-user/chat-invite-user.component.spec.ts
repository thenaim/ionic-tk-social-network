import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatInviteUserComponent } from './chat-invite-user.component';

describe('ChatInviteUserComponent', () => {
  let component: ChatInviteUserComponent;
  let fixture: ComponentFixture<ChatInviteUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatInviteUserComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatInviteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
