import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides = [
    { img: './assets/images/car9.jpg' },
    // { img: './assets/images/car3.jpg' },
    { img: './assets/images/car6.jpg' },
    { img: './assets/images/car7.jpg' },
    { img: './assets/images/car8.png' },
  ];
  slideConfig = { slidesToShow: 3, slidesToScroll: 3 };
  addSlide() {
    this.slides.push({ img: 'assets/images/car1.jpg' });
  }
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }
  constructor() {}
  ngOnInit(): void {}
}


