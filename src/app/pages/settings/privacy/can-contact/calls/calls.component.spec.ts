import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CallsComponent } from './calls.component';

describe('CallsComponent', () => {
  let component: CallsComponent;
  let fixture: ComponentFixture<CallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
