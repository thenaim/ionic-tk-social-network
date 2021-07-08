import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppearancePage } from './appearance.page';

describe('AppearancePage', () => {
  let component: AppearancePage;
  let fixture: ComponentFixture<AppearancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppearancePage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AppearancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
