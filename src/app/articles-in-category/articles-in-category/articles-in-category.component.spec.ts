import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesInCategoryComponent } from './articles-in-category.component';

describe('ArticlesInCategoryComponent', () => {
  let component: ArticlesInCategoryComponent;
  let fixture: ComponentFixture<ArticlesInCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesInCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesInCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
