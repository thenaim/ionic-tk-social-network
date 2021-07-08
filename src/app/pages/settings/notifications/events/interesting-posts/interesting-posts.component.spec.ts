import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InterestingPostsComponent } from './interesting-posts.component';

describe('InterestingPostsComponent', () => {
  let component: InterestingPostsComponent;
  let fixture: ComponentFixture<InterestingPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InterestingPostsComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(InterestingPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
