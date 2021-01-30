import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSubCategoriesComponent } from './filter-sub-categories.component';

describe('FilterSubCategoriesComponent', () => {
  let component: FilterSubCategoriesComponent;
  let fixture: ComponentFixture<FilterSubCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterSubCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSubCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
