import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-hotels',
  templateUrl: './search-hotels.component.html',
  styleUrls: ['./search-hotels.component.css']
})
export class SearchHotelsComponent implements OnInit {

  constructor() { }
  hotelDomain: any[] = [
    { s_id: 1, name: 'Moody Moon', address: 'Hauz Khas, Delhi', pic: 'hotel1.jpg', price : 600 },
    { s_id: 2, name: 'Mandarin Oriental', address: 'Kalyan Nagar, Kanpur', pic: 'hotel2.jpg', price : 800 },
    { s_id: 3, name: 'Radisson Hotel', address: 'Cantonment Area, Varanasi', pic: 'hotel3.jpg', price : 700 },
    { s_id: 4, name: 'Classio Hotel', address: 'Civil Lines, Allahabad', pic: 'hotel5.jpg', price : 900 },
    { s_id: 5, name: 'The Bay Club', address: 'Link Servie Road, Pune', pic: 'hotel6.jpg', price : 1200 },
    { s_id: 6, name: 'Travelodge', address: 'Upadhyay Nagar, Gujrat', pic: 'hotel6.jpg', price : 500 },
    { s_id: 7, name: 'Taj Ganges', address: 'Sanwayam Kant, Madras', pic: 'hotel2.jpg', price : 600 }
  ];
  ngOnInit(): void {
  }

}
