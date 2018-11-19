import { Component, OnInit } from '@angular/core';
import { DoctorregisterService } from '../../meme-services/doctorregister.service';
import { MemeLoginService } from '../../meme-services/meme-login.service';
import { SharedService } from '../../mefyservice/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CompleterService, CompleterData } from 'ng2-completer';

import * as moment from 'moment';


declare var google;




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  x: any;
  doctorProfileId: any;
  logInfo: any = {};
  docProfile: any = {};
  status: any;
  userInfo: any = {}
  email: any;
  city: any;
  gender: any;
  public readonly: boolean = true;
  public validator: boolean = false;
  pathName: any;
  currentURL: any;
  degreeList: any;
  specialityList: any;
  languages: any;
  language: any;
  issuingAuthority: any;
  state: any;
  stateList: any;
  speciality: any;
  specialist: any;
  educationList: any;
  languageList: any;
  education: any;
  messageLanguage: any;
  messageSpeciality: any;
  messageEducation: any;
  showSpeciality: boolean = false;
  showLanguage: boolean = false;
  showEducation: boolean = false;
  dataService: CompleterData;
  specialityService: CompleterData;
  public languageService: CompleterData;
  public stateService: CompleterData;
  error:any;
  practiceYear:any;
  public practisingYear = [/[1-9]/, /\d/, /\d/, /\d/] // practising year validation 
  constructor(private router: Router, private loginService: MemeLoginService, public doctorRegisterService: DoctorregisterService, private sharedService: SharedService, private route: ActivatedRoute, private completerService: CompleterService) {


    // send url path name to change navbar colour
    // this.pathName = (route.snapshot.url)[0].path;
    // this.sharedService.setPath(this.pathName)

    this.currentURL = window.location.pathname;
    console.log(this.currentURL);
    this.sharedService.setPath(this.currentURL);
  }

  ngOnInit() {
    this.initmap();
    this.doctorProfileId = localStorage.getItem('loginId');
    this.doctorProfile();

    this.getDegreeList();
    this.getSpecialityList();
    this.getStateList();
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
      // componentRestrictions: {country: "us"}

    };
    let autocomplete = new google.maps.places.Autocomplete(input, options);
  }

  //get doctorBasic Info
  doctorProfile() {
    this.loginService.getDoctorDetail(this.doctorProfileId).subscribe(result => {
      console.log('get doctor profiledata', result);
      this.logInfo = result.registrationDetails;
      // this.x = this.logInfo.practicingSince;
      // console.log(this.x);
      // console.log(moment(this.x).format('YYYY'));
      // this.logInfo.practicingSince = (moment(this.x).format('YYYY'));
      console.log(this.logInfo)
      this.userInfo = this.logInfo.userId;

    },
      err => {
      })
  }

  // update Doctor Profile 
  updateDoctorProfile(docProfile) {
    this.error='';
    this.practiceYear='';
    this.logInfo.city = (<HTMLInputElement>document.getElementById('pac-input')).value;
    if(this.compareDob(moment(docProfile.dob).format('YYYY-MM-DD')) && this.comparePracticingYear(docProfile.practicingSince)){
    let data = {
      name: docProfile.name,
      email: docProfile.email,
      dob: moment(docProfile.dob).format('YYYY-MM-DD'),
      address: docProfile.address,
      location: {},
      _id: this.doctorProfileId,
      city: docProfile.city,
      language: docProfile.language,
      gender: docProfile.gender,
      education: docProfile.education,
      speciality: docProfile.speciality,
      issuingAuthority: docProfile.issuingAuthority,
      state: docProfile.state,
      practicingSince: docProfile.practicingSince

    }
    this.doctorRegisterService.updateDocProfile(data).subscribe(result => {

      console.log('updated doctor data', result);
      let notifydata = {
        type: 'success',
        title: 'Profile',
        msg: 'Updated Succesfully'
      }
      this.sharedService.createNotification(notifydata);
      this.sharedService.updatedDoctorInfo(true);
      this.router.navigate(['/dashboard/main']);
    },
      err => {
      })
  }
  else{
    let notifydata = {
      type: 'warning',
      title: 'Invalid',
      msg: 'Input'
    }
    this.sharedService.createNotification(notifydata);
  }
}

  // validate email
  emailValidate(email) {
    var emailPattern = /^[a-z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
    if (email == "") {
    } else if (isNaN(email)) {
      if (!(email.match(emailPattern))) {
        this.validator = true;
      }
      else
        this.validator = false;
    }
    return false;
  }

  //get degree list
  getDegreeList() {
    this.doctorRegisterService.getDegreeList().subscribe(data => {
      this.degreeList = data.education;
      this.dataService = this.completerService.local(this.degreeList, 'Degree', 'Degree');
      console.log('degree list', this.degreeList)
    },
      err => {

      })
  }

  //get speciality list
  getSpecialityList() {
    this.doctorRegisterService.getSpecialityList().subscribe(data => {
      this.specialityList = data.speciality;
      console.log('speciality list', this.specialityList);
      this.specialityService = this.completerService.local(this.specialityList, 'GeneralSpeciality', 'GeneralSpeciality');
    }, err => {

    })
  }

  hideSpeciality() {
    this.showSpeciality = true;
  }

  hideLanguage() {
    this.showLanguage = true;
  }

  hideEducation() {
    this.showEducation = true;
  }

  // remove language
  removeLanguage(name) {
    this.language = this.logInfo.language;
    this.language.splice(this.language.indexOf(name), 1);
    console.log('language Array', this.languages);
  }

  // remove speciality
  removeSpeciality(name) {
    this.speciality = this.logInfo.speciality,
      this.speciality.splice(this.speciality.indexOf(name), 1);
    console.log('speciality array', this.speciality);
  }

  // remove education
  removeEducation(name) {
    this.education = this.logInfo.education,
      this.education.splice(this.education.indexOf(name), 1);
    console.log('education array', this.education);
  }

  // add language
  addLanguage(data) {
    this.languages = data;
    // this.logInfo.language.push(this.languages);
    // this.languages ="";
    if (this.languages) {
      if (this.logInfo.language.includes(this.languages)) {
        this.messageLanguage = "Language already exists !";
      }
      else {
        this.logInfo.language.push(this.languages);
        this.languages = '';
        this.showLanguage = false;
        this.messageLanguage = "";
      }
    }
  }
  // add speciality
  addSpeciality(data) {
    this.specialityList = data;
    // this.logInfo.speciality.push(this.specialityList);
    // this.specialist ="";
    if (this.specialityList) {
      if (this.logInfo.speciality.includes(this.specialityList)) {
        this.messageSpeciality = "Speciality already exists !";
      }
      else {
        this.logInfo.speciality.push(this.specialityList);
        this.specialityList = '';
        this.specialist = '';
        this.showSpeciality = false;
        this.messageSpeciality = "";
      }
    }
  }

  // add language
  addEducation(data) {
    this.educationList = data;
    // this.logInfo.education.push(this.educationList);
    // this.educationList ="";
    if (this.educationList) {
      if (this.logInfo.education.includes(this.educationList)) {
        this.messageEducation = "Education already exists !";
      }
      else {
        this.logInfo.education.push(this.educationList);
        this.educationList = '';
        this.showEducation = false;
        this.messageEducation = "";
      }
    }
  }

  //get state list
  getStateList() {
    this.doctorRegisterService.getStateList().subscribe(data => {
      console.log('state list', data);
      this.stateList = data.state;
      this.stateService = this.completerService.local(this.stateList, 'states', 'states');
    })
  }

  //get language list
  getLanguageList() {
    this.doctorRegisterService.getLanguageList().subscribe(data => {
      console.log('language', data);
      this.languageList = data.language;
      this.languageService = this.completerService.local(this.languageList, 'Language', 'Language');
    })
  }
  //cancel profile data
  cancelProfile() {
    this.router.navigate(['/dashboard/main']);
  }

  compareDob(dob) {
    this.error='';
    var startdat = moment();
    var startdate = moment().subtract(20, "year");
    let presentDat: any;
    presentDat = moment(startdate).utcOffset(0);
    presentDat.set({ hour: 1, minute: 0, second: 0, millisecond: 0 })
    presentDat.toISOString()
    presentDat.format("DD-MM-YYYY")
    console.log(presentDat);
    var enddat = moment();
    var enddat = moment().subtract(100, "year");
    let Dat: any;
    Dat = moment(enddat).utcOffset(0);
    Dat.set({ hour: 1, minute: 0, second: 0, millisecond: 0 })
    Dat.toISOString()
    Dat.format("DD-MM-YYYY")
    console.log(Dat);
    if ((moment(dob)).isAfter(presentDat._d)) {
      this.error = 'Invalid DOB';
      return false;
    }
    else if ((moment(dob)).isBefore(Dat._d)) {
      this.error = 'Invalid DOB';
      return false;
    }
    else{
      return true;
    }
  }

  comparePracticingYear(year) {
    this.practiceYear = '';
    var formattedYear: any;
    formattedYear = JSON.parse(year)
    let presentDat: any;
    presentDat = moment().utcOffset(0);
    presentDat.set({ hour: 1, minute: 0, second: 0, millisecond: 0 })
    presentDat.toISOString()
    var currentYear: any;
    currentYear = moment(presentDat, "DD/MM/YYYY").year()
    console.log(currentYear);
    var enddat = moment();
    var enddat = moment().subtract(70, "year");
    let Dat: any;
    Dat = moment(enddat).utcOffset(0);
    Dat.set({ hour: 1, minute: 0, second: 0, millisecond: 0 })
    Dat.toISOString()
    var maxYear: any;
    maxYear = moment(Dat, "DD/MM/YYYY").year()
    console.log(maxYear);
    if ((formattedYear) > (currentYear)) {
      this.practiceYear = 'Invalid Practicing Year';
      console.log('abc')
      return false;
    }
    else if ((formattedYear) < (maxYear)) {
      this.practiceYear = 'Invalid Practicing Year';
      return false;
    }
    else {
      return true;
    }
  }

  // select item for language
onItemSelectLanguage(selected){

  this.languages = selected.title;
  // this.logInfo.language.push(this.languages);
  // this.languages ="";
  if (this.languages) {
    if (this.logInfo.language.includes(this.languages)) {
      this.messageLanguage = "Language already exists !";
    }
    else {
      this.logInfo.language.push(this.languages);
      this.languages = '';
      this.showLanguage = false;
      this.messageLanguage = "";
    }
  }

}  

// select item for speciality
onItemSelectSpeciality(selected){

  this.specialityList = selected.title;
  // this.logInfo.speciality.push(this.specialityList);
  // this.specialist ="";
  if (this.specialityList) {
    if (this.logInfo.speciality.includes(this.specialityList)) {
      this.messageSpeciality = "Speciality already exists !";
    }
    else {
      this.logInfo.speciality.push(this.specialityList);
      this.specialityList = '';
      this.specialist = '';
      this.showSpeciality = false;
      this.messageSpeciality = "";
    }
  }

} 

// select item for education
onItemSelectEduaction(selected){

  this.educationList = selected.title;
  // this.logInfo.education.push(this.educationList);
  // this.educationList ="";
  if (this.educationList) {
    if (this.logInfo.education.includes(this.educationList)) {
      this.messageEducation = "Education already exists !";
    }
    else {
      this.logInfo.education.push(this.educationList);
      this.educationList = '';
      this.showEducation = false;
      this.messageEducation = "";
    }
  }

} 

}
