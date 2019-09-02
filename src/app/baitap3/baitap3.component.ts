import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap3',
  templateUrl: './baitap3.component.html',
  styleUrls: ['./baitap3.component.css']
})
export class Baitap3Component implements OnInit {

  cards = [
    {
      ID: 'Linh kiện 1',
      Photo:'assets/Image/laptop.jpg',
      Name: 'Laptop',
      Price: 6900000,
      Quacelity:3
    },
    {
      ID: 'Linh kiện 2',
      Photo:'assets/Image/dienthoai.jpg',
      Name: 'Điện Thoại',
      Price: 3000000,
      Quacelity:10
    },
    {
      ID: 'Linh kiện 3',
      Photo:'assets/Image/manhinh.jpg',
      Name: 'Màn hình ',
      Price: 500001,
      Quacelity:9
    },
    {
      ID: 'Linh kiện 4',
      Photo:'assets/Image/Headphone.jpg',
      Name: 'Headphone ',
      Price: 20005,
      Quacelity:7
    }
    
  ]



  constructor() { }

  ngOnInit() {
  }

  tongtien()
  {
    let s=0
    for(let i=0;i<this.cards.length;i++)
    {
      s=s+this.cards[i].Price*this.cards[i].Quacelity;
    }
    return s;
  }
  tang(id)
  {
    for(let i=0;i<this.cards.length;i++)
    {
      if(this.cards[i].ID==id)
      {
        this.cards[i].Quacelity++
      }
    }
  }
  giam(id)
  {
    for(let i=0;i<this.cards.length;i++)
    {
      if(this.cards[i].ID==id && this.cards[i].Quacelity>0)
      {
        this.cards[i].Quacelity--
      }
    }
  }





}
