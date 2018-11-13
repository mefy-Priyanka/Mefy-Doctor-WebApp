import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newregistration',
  templateUrl: './newregistration.component.html',
  styleUrls: ['./newregistration.component.css']
})
export class NewregistrationComponent implements OnInit {
  public firstreg: boolean = true;
  public secondreg: boolean = true;
  public thirdreg: boolean = true;
  public fourthreg: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  firststep(){
   this.firstreg=false;
   this.secondreg=true;
   this.thirdreg=false;
  }
  secondstep(){
    this.firstreg=false;
    this.secondreg=false;
    this.thirdreg=true;
   }
   previousfirst(){
    this.firstreg=true;
    this.secondreg=false;
    this.thirdreg=false;
   }
   previouslast(){
    this.firstreg=false;
    this.secondreg=true;
    this.thirdreg=false; 
   }
   thirdstep(){
    this.firstreg=false;
    this.secondreg=false;
    this.thirdreg=false; 
    this.fourthreg=true;
   }
   previouspagelast(){
    this.firstreg=false;
    this.secondreg=false;
    this.thirdreg=true; 
    this.fourthreg=false;
   }
}
