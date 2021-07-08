import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClosedCommunityPostsComponent } from './closed-community-posts.component';

describe('ClosedCommunityPostsComponent', () => {
  let component: ClosedCommunityPostsComponent;
  let fixture: ComponentFixture<ClosedCommunityPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClosedCommunityPostsComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ClosedCommunityPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
