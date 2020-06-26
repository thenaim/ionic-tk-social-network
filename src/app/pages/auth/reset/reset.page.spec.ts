import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResetPage } from './reset.page';

describe('ResetPage', () => {
  let component: ResetPage;
  let fixture: ComponentFixture<ResetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
