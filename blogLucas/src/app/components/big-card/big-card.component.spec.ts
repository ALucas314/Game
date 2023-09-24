import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCardComponent } from './big-card.component';

describe('BigCardComponent', () => {
  let component: BigCardComponent;
  let fixture: ComponentFixture<BigCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
