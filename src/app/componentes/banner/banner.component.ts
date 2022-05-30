import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  faEdit=faEdit
  urlbanner:string="assets/herramientas3.jpeg"

  constructor() { }

  ngOnInit(): void {
  }
  submitbanner(url:string){
    this.urlbanner=url
  }

}
