import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LikesComponent } from './likes.component';

describe('LikesComponent', () => {
  let component: LikesComponent;
  let fixture: ComponentFixture<LikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
