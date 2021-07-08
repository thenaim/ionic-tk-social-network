import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrivateMessagesComponent } from './private-messages.component';

describe('PrivateMessagesComponent', () => {
  let component: PrivateMessagesComponent;
  let fixture: ComponentFixture<PrivateMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrivateMessagesComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivateMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
