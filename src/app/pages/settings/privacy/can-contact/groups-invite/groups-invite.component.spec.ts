import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GroupsInviteComponent } from './groups-invite.component';

describe('GroupsInviteComponent', () => {
  let component: GroupsInviteComponent;
  let fixture: ComponentFixture<GroupsInviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GroupsInviteComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupsInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
