import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildComponent } from './view-child.component';

describe('FavoriteComponent', () => {
  let component: ViewChildComponent;
  let fixture: ComponentFixture<ViewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
