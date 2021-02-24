import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedpostComponent } from './featuredpost.component';

describe('FeaturedpostComponent', () => {
  let component: FeaturedpostComponent;
  let fixture: ComponentFixture<FeaturedpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
