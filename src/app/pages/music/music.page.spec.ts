import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusicPage } from './music.page';

describe('MusicPage', () => {
  let component: MusicPage;
  let fixture: ComponentFixture<MusicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
