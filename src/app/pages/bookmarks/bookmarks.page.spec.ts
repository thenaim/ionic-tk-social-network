import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookmarksPage } from './bookmarks.page';

describe('BookmarksPage', () => {
  let component: BookmarksPage;
  let fixture: ComponentFixture<BookmarksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookmarksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
