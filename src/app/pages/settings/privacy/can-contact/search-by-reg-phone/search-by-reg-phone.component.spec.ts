import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchByRegPhoneComponent } from './search-by-reg-phone.component';

describe('SearchByRegPhoneComponent', () => {
  let component: SearchByRegPhoneComponent;
  let fixture: ComponentFixture<SearchByRegPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchByRegPhoneComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchByRegPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
