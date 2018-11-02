import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newlogin',
  templateUrl: './newlogin.component.html',
  styleUrls: ['./newlogin.component.css']
})
export class NewloginComponent implements OnInit {
  public myAngularxQrCode: string = null;
  public loginShow: boolean = true;
  public otpShow: boolean = false;
  constructor() {
    this.myAngularxQrCode = 'Your QR code data string';
   }

  ngOnInit() {
  }

  login() {
  this.otpShow=true;
  this.loginShow=false;  
  }

}
