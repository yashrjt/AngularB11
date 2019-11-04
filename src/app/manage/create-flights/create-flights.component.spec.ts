import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFlightsComponent } from './create-flights.component';

describe('CreateFlightsComponent', () => {
  let component: CreateFlightsComponent;
  let fixture: ComponentFixture<CreateFlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
