import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newlogin',
  templateUrl: './newlogin.component.html',
  styleUrls: ['./newlogin.component.css']
})
export class NewloginComponent implements OnInit {
  public myAngularxQrCode: string = null;
  constructor() {
    this.myAngularxQrCode = 'Your QR code data string';
   }

  ngOnInit() {
  }

}
