import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CarPageComponent } from './car-page.component';

describe('PageComponent', () => {
  let component: CarPageComponent;
  let fixture: ComponentFixture<CarPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
