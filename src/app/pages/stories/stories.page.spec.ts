import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StoriesPage } from './stories.page';

describe('StoriesPage', () => {
  let component: StoriesPage;
  let fixture: ComponentFixture<StoriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
