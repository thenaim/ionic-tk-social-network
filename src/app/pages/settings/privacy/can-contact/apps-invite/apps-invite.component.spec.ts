import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppsInviteComponent } from './apps-invite.component';

describe('AppsInviteComponent', () => {
  let component: AppsInviteComponent;
  let fixture: ComponentFixture<AppsInviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsInviteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppsInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
