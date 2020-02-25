import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemBlogComponent } from './them-blog.component';

describe('ThemBlogComponent', () => {
  let component: ThemBlogComponent;
  let fixture: ComponentFixture<ThemBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
