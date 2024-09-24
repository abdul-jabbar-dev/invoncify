import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleOptionsComponent } from './toggle-options.component';

describe('ToggleOptionsComponent', () => {
  let component: ToggleOptionsComponent;
  let fixture: ComponentFixture<ToggleOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
