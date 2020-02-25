import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemCategoryComponent } from './them-category.component';

describe('ThemCategoryComponent', () => {
  let component: ThemCategoryComponent;
  let fixture: ComponentFixture<ThemCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
