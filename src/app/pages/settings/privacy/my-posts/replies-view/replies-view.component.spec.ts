import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RepliesViewComponent } from './replies-view.component';

describe('RepliesViewComponent', () => {
  let component: RepliesViewComponent;
  let fixture: ComponentFixture<RepliesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepliesViewComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RepliesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
