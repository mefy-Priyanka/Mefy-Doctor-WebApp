import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorregisterService } from '../../meme-services/doctorregister.service';
import { SharedService } from '../../mefyservice/shared.service';
import { CompleterService, CompleterData } from 'ng2-completer';
declare var google;

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {
  cities: any = [];
  city: any;
  address: any;
  language: any;
  languages: any = [];
  doctorInfo: any;
  message: any;
  languageList: any;
  errMessage: any = '';
  messageLanguage: any;
  messageCity: any;
  messageAddress: any;
  public languageService: CompleterData;
  constructor(private doctorRegService: DoctorregisterService, private sharedService: SharedService, private router: Router, private completerService: CompleterService) {

    //get doctor info
    this.doctorInfo = this.sharedService.info;

  }

  ngOnInit() {
    this.initmap();
    this.getLanguageList();
  }
  initmap() {
    var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-33.8902, 151.1759),
      new google.maps.LatLng(-33.8474, 151.2631));

    var input = (<HTMLInputElement>document.getElementById('pac-input'));


    var options = {
      bounds: defaultBounds,
      types: ['(cities)'],
      //  componentRestrictions: {country: "us"}
    };

    let autocomplete = new google.maps.places.Autocomplete(input, options);
  }

  // add language
  addLanguage(data) {
    if (data) {
      if (this.languages.includes(data)) {

        this.language = '';
        this.errMessage = "Language Already Exists !";
      }
      else {
        this.languages.push(data);
        this.language = '';
        this.message ="";
        this.messageLanguage ="";
      }
    }
  }

  // add doctor profile data
  addProfileData() {
    this.city = (<HTMLInputElement>document.getElementById('pac-input')).value;
    console.log(this.city);
    if (this.languages.length != 0 && this.city && this.address) {
      this.doctorInfo.city = this.city;
      this.doctorInfo.address = this.address;
      this.doctorInfo.language = this.languages;
      this.sharedService.doctorInfo(this.doctorInfo);
      console.log(this.doctorInfo);
      this.router.navigate(['/register/step5']);
    }
    else {
      this.message = "Please Enter The Credentials";
    }
  }

  // validating languages
  validatelanguages() {
    if(this.language.length ==0){
      this.messageLanguage ="Language Cannot Be Empty";
    }
    else{
      this.messageLanguage ="";
      this.message ="";
    }
  }
  // validating cities
  validateCities() {
    if (this.city.length ==0) {
      this.messageCity = "City Cannot Be Empty";
    }
    else{
      this.messageCity ="";
      this.message ="";
    }
  }

   // validating address
   validateAddress() {
    if (this.address.length==0) {
      this.messageAddress = "Address Cannot Be Empty";
    }
    else{
      this.messageAddress="";
      this.message ="";
    }
  }

  // remove language
  removeLanguage(name) {
    this.languages.splice(this.languages.indexOf(name), 1);
    console.log('language Array', this.languages);
  }

  //get language list
  getLanguageList() {
    this.doctorRegService.getLanguageList().subscribe(data => {
      console.log('language', data);
      this.languageList = data.language;
      this.languageService = this.completerService.local(this.languageList, 'Language', 'Language');
    })
  }
    //save at enter
 keyDownFunction(event) {
  if(event.keyCode == 13) {
    this.addProfileData();
  }
}

// select item for qualification
onItemSelectLanguage(selected){
  if (selected) {
    if (this.languages.includes(selected.title)) {

      this.language = '';
      this.errMessage = "Language Already Exists !";
    }
    else {
      this.languages.push(selected.title);
      this.language = '';
      this.message ="";
      this.messageLanguage ="";
    }
  }
}
}

