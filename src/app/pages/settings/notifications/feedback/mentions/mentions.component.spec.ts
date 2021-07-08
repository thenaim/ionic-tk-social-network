import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MentionsComponent } from './mentions.component';

describe('MentionsComponent', () => {
  let component: MentionsComponent;
  let fixture: ComponentFixture<MentionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MentionsComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(MentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
