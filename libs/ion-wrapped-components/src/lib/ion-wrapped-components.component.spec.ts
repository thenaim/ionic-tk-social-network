import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonWrappedComponentsComponent } from './ion-wrapped-components.component';

describe('IonWrappedComponentsComponent', () => {
  let component: IonWrappedComponentsComponent;
  let fixture: ComponentFixture<IonWrappedComponentsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [IonWrappedComponentsComponent],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(IonWrappedComponentsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }),
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
