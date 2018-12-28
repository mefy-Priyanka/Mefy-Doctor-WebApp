import { Component, OnInit, NgModule } from '@angular/core';
// import { DoctorregisterService } from '../../meme-services/doctorregister.service';
// import { MemeLoginService } from '../../meme-services/meme-login.service';
import { SharedService } from '../../mefyservice/shared.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocregistrationService } from '../../mefyservice/docregistration.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../mefyservice/profile.service';
// import { SharedService } from '../../mefyservice/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],

})

export class ProfileComponent implements OnInit {
  /************************************ USED VARIABLES ***************************************** */
  specialist: any;
  public showSpeciality: boolean = false;
  public specialityShow: boolean = false;
  public educationShow: boolean = false;
  public languageShow: boolean = false;
  messageSpeciality: any;
  doctorProfileId: any;
  logInfo: any = {};
  docProfile: any = {};
  userInfo: any = {}
  public doctorpdetail: any;
  doctoruserId: any;
  updateinfo: any;
  public validator: boolean = false;
  public specialityOfObjects: any = [];
  public specialityList: any = [];
  public selectedSpeciality: any = [];
  doctorDetail: FormGroup;
  doctorDetailErrors: any;
  public selectedLanguage: any = [];
  public specarr: any;
  public educarr = [];
  public langarr: any;
  public selectedEducation: any = [];
  public languageList: any = [];
  public educationList: any = [];
  public educationOfObjects: any = [];
  public languageOfObjects: any = [];
  public showFill: boolean = false;
  public showaddr: boolean = false;
  language: any;
  speciality: any;
  education: any;
  hideaddressedit: boolean = false;
  hideemailedit: boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private docService: DocregistrationService, private profileService: ProfileService, private sharedService: SharedService) {

    /***********STEP 1*************/
    this.doctorDetailErrors = {
      phoneNumber: {},
      name: {},
      registrationNumber: {},
      state: {},
      gender: {},
      dob: {},
      city: {},
      address: {},
      email: {},
      speciality: {},
      education: {},
      language: {},
      issuingAuthority: {},
      practicingSince: {},
    };
  }

  ngOnInit() {
    /*******STEP 1******** */
    this.doctorDetail = this.createdoctorDetail();
    this.doctorDetail.valueChanges.subscribe(() => {
      this.ondoctorDetailValuesChanged();
    });


    this.doctorProfile();       // GET DOCTOR PROFILE DETAILS
    this.getSpecialityList();   // GET  SPECIALITY LIST
    this.getEducationList();   // GET EDUCATION LIST
    this.getLanguageList();    // GET LANGUAGE LIST
  }

  /****************************** CATHES ALL THE CHANGES IN DOCTORFORM ********************************/
  ondoctorDetailValuesChanged() {
    for (const field in this.doctorDetailErrors) {
      if (!this.doctorDetailErrors.hasOwnProperty(field)) {
        continue;
      }
      // Clear previous errors
      this.doctorDetailErrors[field] = {};
      // Get the control
      const control = this.doctorDetail.get(field);

      if (control && control.dirty && !control.valid) {
        this.doctorDetailErrors[field] = control.errors;
      }
    }
  }
  /****************************************** ENDS ****************************************** */

  /************************************* CREATE DOCTORDETAIL FORM ***************************** */
  createdoctorDetail() {
    return this.formBuilder.group({
      phoneNumber: ['', Validators.required],
      name: ['', Validators.required],
      registrationNumber: ['', Validators.required],
      state: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.maxLength]],
      speciality: ['', Validators.required],
      education: ['', Validators.required],
      language: ['', Validators.required],
      issuingAuthority: ['', Validators.required],
      practicingSince: ['', Validators.required]
    });
  }
  /****************************************** ENDS ************************************************* */

  // Doctor profile info
  doctorProfile() {
    this.profileService.getDocDetail(localStorage.getItem('doctorId')).subscribe(data => {

      this.doctorpdetail = data;
      // if(this.doctorpdetail.address)
      this.doctorDetail.controls.address.setValue(this.doctorpdetail.address);
      this.doctorDetail.controls.email.setValue(this.doctorpdetail.email ? this.doctorpdetail.email : '');

      console.log('get doctor profiledata', this.doctorpdetail);
      this.selectedSpeciality = this.doctorpdetail.speciality;
      this.selectedLanguage = this.doctorpdetail.language;
      this.selectedEducation = this.doctorpdetail.education;
      // console.log('selected speciality', this.selectedSpeciality)
    },
      err => {
      })
  }
  /************************************************ ENDS ************************************************ */

  updateDoctorProfile(updateinfo) {
    console.log(updateinfo)
    if (updateinfo.speciality.length == 0 || updateinfo.education.length == 0 || updateinfo.language.length == 0) {
      // window.alert('fie;ds required')
       let notifydata = {
        type: 'error',
      title: 'Profile',
      msg: 'Fields Required'
      }
      this.sharedService.createNotification(notifydata);

    }
    else {
      let doctoridetail = {
        phoneNumber: updateinfo.phoneNumber,
        name: updateinfo.name,
        registrationNumber: updateinfo.registrationNumber,
        state: updateinfo.state,
        gender: updateinfo.gender,
        dob: updateinfo.dob,
        city: updateinfo.city,
        address: this.doctorDetail.value.address,
        email:  this.doctorDetail.value.email,
        speciality: updateinfo.speciality,
        education: updateinfo.education,
        language: updateinfo.language,
        issuingAuthority: updateinfo.issuingAuthority,
        practicingSince: updateinfo.practicingSince
      }
      console.log(doctoridetail)
      this.profileService.updateDetail(localStorage.getItem('userId'), doctoridetail).subscribe(data => {
        this.doctorpdetail = data;
        console.log('result', data)
        let result: any = {}
        result = data
        if (!result.result.error) {
          let notifydata = {
            type: 'success',
            title: 'Profile',
            msg: 'Updated Successfully'
          }
          this.sharedService.createNotification(notifydata);
          this.sharedService.updatedDoctorInfo(true);
          this.router.navigate(['/dashboard/main']);
        }

        // console.log("ABCD",result.result.speciality);
        console.log('updated profiledata', this.doctorpdetail);
        // console.log('updated profiledata', this.result.result.result);
        // this.router.navigate(['/dashboard/main']);speciality
      },
        err => {
        })
    }


  }

  /********************GET LIST OF SPECIALITY *****************/
  getSpecialityList() {

    let data = {
      speciality: "speciality"
    }
    this.docService.getSpecialityList(data).subscribe(data => {
      let value: any = {}
      value = data
      if (value.result)
        this.specialityList = value.result.result;
      //  console.log(this.specialityList)
      for (var i = 0; i < this.specialityList.length; i++) {
        var spec = {
          specialityName: this.specialityList[i].GeneralSpeciality,

        }
        this.specialityOfObjects.push(spec);
      }
    },
      err => {
        console.log(err)
      })
  }
  /********************GET LIST OF Education *****************/
  getEducationList() {
    let data = {
      education: "education"
    }
    this.docService.getEducationList(data).subscribe(data => {
      console.log('dataaaaaa:::', data)
      let value: any = {}
      value = data
      this.educationList = value.result.result
      // console.log(this.educationList)
      for (var i = 0; i < this.educationList.length; i++) {
        var edu = {
          educationName: this.educationList[i].Degree,

        }
        this.educationOfObjects.push(edu);
      }
    },
      err => {
        console.log(err)
      })
  }

  /*************************END************************************ */
  /********************GET LIST OF LANGUAGE *****************/
  getLanguageList() {
    let data = {
      language: "language"
    }
    this.docService.getLanguageList(data).subscribe(data => {
      let value: any = {}
      value = data
      this.languageList = value.result.result
      // console.log(this.languageList)
      for (var i = 0; i < this.languageList.length; i++) {
        var lang = {
          langName: this.languageList[i].Language,

        }
        this.languageOfObjects.push(lang);
      }
    },
      err => {
        console.log(err)
      })
  }
  /*************************END************************************ */
  /***********************LANGUAGE ON SELECT IN STEP 2*********/
  onAddLanguage(evt) {
    console.log(evt)
    if (this.selectedLanguage.includes(evt)) {
      // window.alert('Education already present')
      let notifydata = {
        type: 'error',
      title: 'Profile',
      msg: 'Language already present'
      }
      this.sharedService.createNotification(notifydata);
    }
    else {
      this.selectedLanguage.push(evt);
    }
    this.doctorDetail.controls.language.setValue('')

    // this.selectedLanguage.push(evt.value)
    // this.langarr=this.doctorpdetail.language.concat(this.selectedLanguage);
    // console.log("langarr", this.langarr);
  }

  // remove language
  removeLanguage(name, j) {
    this.selectedLanguage.splice(j, 1)
    // this.language = this.doctorpdetail.language;
    // console.log(this.language);
    // this.language.splice(this.language.indexOf(name), 1);
    // console.log('language Array', this.language);
    // this.langarr.push(this.language);
    // console.log("hi", this.langarr)
  }

  /***********************EDUCATION ON SELECT IN STEP 3*********/
  onAddEducation(evt) {
    console.log(evt)
    if (this.selectedEducation.includes(evt)) {
      // window.alert('Education already present')
      let notifydata = {
        type: 'error',
      title: 'Profile',
      msg: 'Education already present'
      }
      this.sharedService.createNotification(notifydata);
    }
    else {
      this.selectedEducation.push(evt);
    }
    this.doctorDetail.controls.education.setValue('')

    // this.selectedEducation.push(evt.value);
    // this.educarr.push(evt.value);
    // this.educarr=this.doctorpdetail.education.concat(this.selectedEducation);
    // console.log(" this.educarr", this.educarr);
  }

  // remove education
  removeEducation(name, k) {
    this.selectedEducation.splice(k, 1)
    // this.education = this.doctorpdetail.education,
    //   this.education.splice(this.education.indexOf(name), 1);
    // console.log('education array', this.education);
    // this.educarr.push(this.education);
    // console.log("hi", this.educarr)
  }

  /***********************SPECIALITY ON SELECT IN STEP 3*********/
  onaAddSpeciality(evt) {
    console.log(evt);
    if (this.selectedSpeciality.includes(evt)) {
      // window.alert('speciality already present')
      let notifydata = {
        type: 'error',
      title: 'Profile',
      msg: 'Speciality already present'
      }
      this.sharedService.createNotification(notifydata);
    }
    else {
      this.selectedSpeciality.push(evt)
    }
    this.doctorDetail.controls.speciality.setValue('')
    // this.selectedSpeciality.push(evt.value);
    // console.log('selectedSpeciality',this.selectedSpeciality)
    // this.specarr=this.doctorpdetail.speciality.concat(this.selectedSpeciality);
    // console.log(" this.specarr", this.specarr);
  }

  // remove speciality
  removeSpeciality(name, i) {

    console.log('name', name, i);
    console.log(this.selectedSpeciality)
    this.selectedSpeciality.splice(i, 1)
    console.log(this.selectedSpeciality)
    // this.speciality = this.doctorpdetail.speciality,
    //   this.speciality.splice(this.speciality.indexOf(name), 1);
    // console.log('speciality array', this.speciality);
    // this.specarr.push(this.speciality);
    // console.log("hi",this.specarr)
  }

  //cancel profile 
  cancelForm() {
    this.router.navigate(['/dashboard/main']);
  }





  edit() {
    this.showFill = true;
    this.doctorDetail.controls.address.setValue('');
  }
  email() {
    this.showaddr = true;
    this.doctorDetail.controls.email.setValue('');
  }
  addspeciality() {
    this.specialityShow = true;
  }
  addEducation() {
    this.educationShow = true;
  }
  addLanguage() {
    this.languageShow = true;
  }

 
}
