import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeverfarmComponent } from './severfarm.component';

describe('SeverfarmComponent', () => {
  let component: SeverfarmComponent;
  let fixture: ComponentFixture<SeverfarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeverfarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeverfarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
