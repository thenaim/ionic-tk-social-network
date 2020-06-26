import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AchievementsComponent } from './achievements.component';

describe('AchievementsComponent', () => {
  let component: AchievementsComponent;
  let fixture: ComponentFixture<AchievementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
