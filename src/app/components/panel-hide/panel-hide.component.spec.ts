import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelHideComponent } from './panel-hide.component';

describe('FavoriteComponent', () => {
  let component: PanelHideComponent;
  let fixture: ComponentFixture<PanelHideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelHideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelHideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
