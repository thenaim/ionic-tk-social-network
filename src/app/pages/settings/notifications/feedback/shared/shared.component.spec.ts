import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SharedComponent } from './shared.component';

describe('SharedComponent', () => {
  let component: SharedComponent;
  let fixture: ComponentFixture<SharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
