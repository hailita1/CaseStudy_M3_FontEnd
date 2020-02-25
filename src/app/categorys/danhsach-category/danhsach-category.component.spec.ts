import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachCategoryComponent } from './danhsach-category.component';

describe('DanhsachCategoryComponent', () => {
  let component: DanhsachCategoryComponent;
  let fixture: ComponentFixture<DanhsachCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhsachCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
