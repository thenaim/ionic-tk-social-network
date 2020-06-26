import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPage } from './news.page';

describe('Tab1Page', () => {
  let component: NewsPage;
  let fixture: ComponentFixture<NewsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
