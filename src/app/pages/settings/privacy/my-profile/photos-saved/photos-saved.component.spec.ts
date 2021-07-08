import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhotosSavedComponent } from './photos-saved.component';

describe('PhotosSavedComponent', () => {
  let component: PhotosSavedComponent;
  let fixture: ComponentFixture<PhotosSavedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhotosSavedComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotosSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
