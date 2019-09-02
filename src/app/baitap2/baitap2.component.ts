import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap2',
  templateUrl: './baitap2.component.html',
  styleUrls: ['./baitap2.component.css']
})
export class Baitap2Component implements OnInit {

  students = [
    {
      fullName: 'Nguyễn Văn Hoàng',
      birthday: '01-06-2000',
      gender: 'Nam',
      photo: 'assets/Image/hoang.jpg',
      mark: 10
    },
    {
      fullName: 'Trần Thị An',
      birthday: '1-1-2000',
      gender: 'Nữ',
      photo:'assets/Image/an.jpg',
     mark: 8.5
    },
    {
      fullName: 'Nguyễn Xuân Minh',
      birthday: '11-12-1999',
      gender: 'Nam',
      photo:'assets/Image/minh.jpg',
     mark: 8
    },
    
  ]




  constructor() { }

  ngOnInit() {
  }

}
