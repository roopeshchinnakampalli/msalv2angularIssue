import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcmpComponent } from './subcmp.component';

describe('SubcmpComponent', () => {
  let component: SubcmpComponent;
  let fixture: ComponentFixture<SubcmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
