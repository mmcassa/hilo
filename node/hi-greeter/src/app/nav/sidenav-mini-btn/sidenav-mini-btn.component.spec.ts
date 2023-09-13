import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavMiniBtnComponent } from './sidenav-mini-btn.component';

describe('SidenavMiniBtnComponent', () => {
  let component: SidenavMiniBtnComponent;
  let fixture: ComponentFixture<SidenavMiniBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavMiniBtnComponent]
    });
    fixture = TestBed.createComponent(SidenavMiniBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
