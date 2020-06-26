import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommunitiesNotificationsComponent } from './communities-notifications.component';

describe('CommunitiesNotificationsComponent', () => {
  let component: CommunitiesNotificationsComponent;
  let fixture: ComponentFixture<CommunitiesNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunitiesNotificationsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommunitiesNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
