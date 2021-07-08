import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AplicationsComponent } from './aplications.component';

describe('AplicationsComponent', () => {
  let component: AplicationsComponent;
  let fixture: ComponentFixture<AplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AplicationsComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
