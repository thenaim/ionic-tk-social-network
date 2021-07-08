import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhotosTagmeComponent } from './photos-tagme.component';

describe('PhotosTagmeComponent', () => {
  let component: PhotosTagmeComponent;
  let fixture: ComponentFixture<PhotosTagmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhotosTagmeComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotosTagmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
