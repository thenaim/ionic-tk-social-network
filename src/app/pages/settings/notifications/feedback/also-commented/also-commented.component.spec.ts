import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlsoCommentedComponent } from './also-commented.component';

describe('AlsoCommentedComponent', () => {
  let component: AlsoCommentedComponent;
  let fixture: ComponentFixture<AlsoCommentedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlsoCommentedComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AlsoCommentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
