import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFlightsComponent } from './update-flights.component';

describe('UpdateFlightsComponent', () => {
  let component: UpdateFlightsComponent;
  let fixture: ComponentFixture<UpdateFlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
