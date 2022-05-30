import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioeduComponent } from './formularioedu.component';

describe('FormularioeduComponent', () => {
  let component: FormularioeduComponent;
  let fixture: ComponentFixture<FormularioeduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioeduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioeduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
