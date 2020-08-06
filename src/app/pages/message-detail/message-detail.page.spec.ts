import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MessageDetailPage } from './message-detail.page';

describe('MessageDetailPage', () => {
  let component: MessageDetailPage;
  let fixture: ComponentFixture<MessageDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MessageDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
