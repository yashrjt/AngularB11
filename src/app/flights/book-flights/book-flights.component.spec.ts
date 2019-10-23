import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFlightsComponent } from './book-flights.component';

describe('BookFlightsComponent', () => {
  let component: BookFlightsComponent;
  let fixture: ComponentFixture<BookFlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
