import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestAuctionComponent } from './latest-auction.component';

describe('LatestAuctionComponent', () => {
  let component: LatestAuctionComponent;
  let fixture: ComponentFixture<LatestAuctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestAuctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
