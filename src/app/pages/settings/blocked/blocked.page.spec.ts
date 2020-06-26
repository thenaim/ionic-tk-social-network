import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlockedPage } from './blocked.page';

describe('BlockedPage', () => {
  let component: BlockedPage;
  let fixture: ComponentFixture<BlockedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlockedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
