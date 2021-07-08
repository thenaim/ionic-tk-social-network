import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhotoTagsComponent } from './photo-tags.component';

describe('PhotoTagsComponent', () => {
  let component: PhotoTagsComponent;
  let fixture: ComponentFixture<PhotoTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoTagsComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
