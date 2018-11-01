import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // @ViewChild('one') one: ElementRef;
  // @ViewChild('one') two: ElementRef;
  // @ViewChild('three') three: ElementRef;
  // @ViewChild('four') four: ElementRef;


  constructor (private router: Router)
  {
  //   this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event) => {
  //   if (this.router.url.indexOf('1') != -1) {
  //     document.getElementById('one').classList.add('active');
  //     document.getElementById('two').classList.remove('active');
  //     document.getElementById('three').classList.remove('active');
  //     document.getElementById('four').classList.remove('active');
  //   }
  //   else if (this.router.url.indexOf('2') != -1) {
  //     document.getElementById('one').classList.add('active');
  //     document.getElementById('two').classList.add('active');
  //     document.getElementById('three').classList.remove('active');
  //     document.getElementById('four').classList.remove('active');
  //   }
  //   else if (this.router.url.indexOf('3') != -1) {
  //     document.getElementById('one').classList.add('active');
  //     document.getElementById('two').classList.add('active');
  //     document.getElementById('three').classList.add('active');
  //     document.getElementById('four').classList.remove('active');
  //   }
  //   else if (this.router.url.indexOf('4') != -1) {
  //     document.getElementById('one').classList.add('active');
  //     document.getElementById('two').classList.add('active');
  //     document.getElementById('three').classList.add('active');
  //     document.getElementById('four').classList.add('active');
  //   }

  // })
}

  ngOnInit() {
  }

}
