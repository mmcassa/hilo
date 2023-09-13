import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavOptionComponent } from './sidenav-option.component';

describe('SidenavOptionComponent', () => {
  let component: SidenavOptionComponent;
  let fixture: ComponentFixture<SidenavOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavOptionComponent]
    });
    fixture = TestBed.createComponent(SidenavOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
