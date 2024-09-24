import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChirtComponent } from './pie-chirt.component';

describe('PieChirtComponent', () => {
  let component: PieChirtComponent;
  let fixture: ComponentFixture<PieChirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChirtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
