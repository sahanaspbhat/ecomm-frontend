import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOptionsComponent } from './navbar-options.component';

describe('NavbarOptionsComponent', () => {
  let component: NavbarOptionsComponent;
  let fixture: ComponentFixture<NavbarOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
