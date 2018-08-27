import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-recommended-auction',
  templateUrl: './recommended-auction.component.html',
  styleUrls: ['./recommended-auction.component.scss']
})
export class RecommendedAuctionComponent implements OnInit {

  products: Product[] = [
    {
      id: 1,
      title: 'Nowa korba do roweru',
      price: '12.99',
      delivery: '2 tygodnie',
      dateActing: '22/12/2017',
      desc: 'Lorem impsum...',
      image: 'product4.png'
    },
    {
      id: 2,
      title: 'Nowa dentka do roweru',
      price: '1.99',
      delivery: '2 tygodnie',
      dateActing: '1/7/2017',
      desc: 'Lorem impsum...',
      image: 'product2.png'
    },
    {
      id: 3,
      title: 'Nowa szprycha do roweru',
      price: '25.29',
      delivery: '2 tygodnie',
      dateActing: '4/10/2017',
      desc: 'Lorem impsum...',
      image: 'product3.png'
    },
    {
      id: 1,
      title: 'Nowa korba do roweru',
      price: '12.99',
      delivery: '2 tygodnie',
      dateActing: '22/12/2017',
      desc: 'Lorem impsum...',
      image: 'product4.png'
    },
    {
      id: 2,
      title: 'Nowa dentka do roweru',
      price: '1.99',
      delivery: '2 tygodnie',
      dateActing: '1/7/2017',
      desc: 'Lorem impsum...',
      image: 'product2.png'
    },
    {
      id: 3,
      title: 'Nowa szprycha do roweru',
      price: '25.29',
      delivery: '2 tygodnie',
      dateActing: '4/10/2017',
      desc: 'Lorem impsum...',
      image: 'product3.png'
    },
    {
      id: 1,
      title: 'Nowa korba do roweru',
      price: '12.99',
      delivery: '2 tygodnie',
      dateActing: '22/12/2017',
      desc: 'Lorem impsum...',
      image: 'product4.png'
    },
    {
      id: 2,
      title: 'Nowa dentka do roweru',
      price: '1.99',
      delivery: '2 tygodnie',
      dateActing: '1/7/2017',
      desc: 'Lorem impsum...',
      image: 'product2.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
