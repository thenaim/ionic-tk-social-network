import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GiftsComponent } from './gifts.component';

describe('GiftsComponent', () => {
  let component: GiftsComponent;
  let fixture: ComponentFixture<GiftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
