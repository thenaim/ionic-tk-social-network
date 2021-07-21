import { TestBed } from '@angular/core/testing';

import { IonWrappedComponentsService } from './ion-wrapped-components.service';

describe('IonWrappedComponentsService', () => {
  let service: IonWrappedComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonWrappedComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
