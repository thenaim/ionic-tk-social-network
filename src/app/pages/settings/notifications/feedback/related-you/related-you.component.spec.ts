import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RelatedYouComponent } from './related-you.component';

describe('RelatedYouComponent', () => {
  let component: RelatedYouComponent;
  let fixture: ComponentFixture<RelatedYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RelatedYouComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(RelatedYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
