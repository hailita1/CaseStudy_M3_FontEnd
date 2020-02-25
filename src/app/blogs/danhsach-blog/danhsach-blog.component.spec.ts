import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachBlogComponent } from './danhsach-blog.component';

describe('DanhsachBlogComponent', () => {
  let component: DanhsachBlogComponent;
  let fixture: ComponentFixture<DanhsachBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhsachBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
