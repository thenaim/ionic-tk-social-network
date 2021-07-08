import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppscallComponent } from './appscall.component';

describe('AppscallComponent', () => {
  let component: AppscallComponent;
  let fixture: ComponentFixture<AppscallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppscallComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AppscallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
