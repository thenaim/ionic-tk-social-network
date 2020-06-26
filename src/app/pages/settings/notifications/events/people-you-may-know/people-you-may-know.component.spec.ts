import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeopleYouMayKnowComponent } from './people-you-may-know.component';

describe('PeopleYouMayKnowComponent', () => {
  let component: PeopleYouMayKnowComponent;
  let fixture: ComponentFixture<PeopleYouMayKnowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleYouMayKnowComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeopleYouMayKnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
