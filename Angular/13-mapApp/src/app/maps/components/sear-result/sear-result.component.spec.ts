import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearResultComponent } from './sear-result.component';

describe('SearResultComponent', () => {
  let component: SearResultComponent;
  let fixture: ComponentFixture<SearResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
