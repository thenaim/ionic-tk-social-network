import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthPinPage } from './auth-pin.page';

describe('AuthPinPage', () => {
  let component: AuthPinPage;
  let fixture: ComponentFixture<AuthPinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthPinPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthPinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
