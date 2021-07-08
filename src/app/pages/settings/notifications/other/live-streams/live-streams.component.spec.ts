import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LiveStreamsComponent } from './live-streams.component';

describe('LiveStreamsComponent', () => {
  let component: LiveStreamsComponent;
  let fixture: ComponentFixture<LiveStreamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LiveStreamsComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(LiveStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
