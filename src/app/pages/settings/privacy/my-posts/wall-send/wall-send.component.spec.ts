import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WallSendComponent } from './wall-send.component';

describe('WallSendComponent', () => {
  let component: WallSendComponent;
  let fixture: ComponentFixture<WallSendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WallSendComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(WallSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
