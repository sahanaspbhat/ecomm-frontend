import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  items = [{category:"Watches",data:[{img_src:"assets/watch-1.jpg",item_type:"Illuminator Watch"},{img_src:"assets/watch-1.jpg",item_type:"Illuminator Watch"},{img_src:"assets/watch-1.jpg",item_type:"Illuminator Watch"},{img_src:"assets/watch-1.jpg",item_type:"Illuminator Watch"}]},{category:"Mobiles",data:[{img_src:"assets/mobile-1.jpg",item_type:"One Plus 6"},{img_src:"assets/mobile-1.jpg",item_type:"One Plus 6"},{img_src:"assets/mobile-1.jpg",item_type:"One Plus 6"},{img_src:"assets/mobile-1.jpg",item_type:"One Plus 6"}]},{category:"Laptops",data:[{img_src:"assets/laptop-1.jpg",item_type:"Lenovo Gaming Laptop"},{img_src:"assets/laptop-1.jpg",item_type:"Lenovo Gaming Laptop"},{img_src:"assets/laptop-1.jpg",item_type:"Lenovo Gaming Laptop"},{img_src:"assets/laptop-1.jpg",item_type:"Lenovo Gaming Laptop"}]}];
  ngOnInit() {
  }

}
