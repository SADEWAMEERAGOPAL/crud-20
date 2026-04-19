import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Matconfirmatioin } from './matconfirmatioin';

describe('Matconfirmatioin', () => {
  let component: Matconfirmatioin;
  let fixture: ComponentFixture<Matconfirmatioin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Matconfirmatioin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Matconfirmatioin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
