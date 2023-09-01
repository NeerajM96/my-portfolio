import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankComparatorComponent } from './rank-comparator.component';

describe('RankComparatorComponent', () => {
  let component: RankComparatorComponent;
  let fixture: ComponentFixture<RankComparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankComparatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankComparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
