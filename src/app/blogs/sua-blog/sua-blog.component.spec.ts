import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaBlogComponent } from './sua-blog.component';

describe('SuaBlogComponent', () => {
  let component: SuaBlogComponent;
  let fixture: ComponentFixture<SuaBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
