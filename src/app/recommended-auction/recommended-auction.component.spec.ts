import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedAuctionComponent } from './recommended-auction.component';

describe('RecommendedAuctionComponent', () => {
  let component: RecommendedAuctionComponent;
  let fixture: ComponentFixture<RecommendedAuctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedAuctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
