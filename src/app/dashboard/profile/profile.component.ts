import { Component, OnInit, NgModule } from '@angular/core';
// import { DoctorregisterService } from '../../meme-services/doctorregister.service';
// import { MemeLoginService } from '../../meme-services/meme-login.service';
// import { SharedService } from '../../mefyservice/shared.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocregistrationService } from '../../mefyservice/docregistration.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../mefyservice/profile.service';






@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],

})

export class ProfileComponent implements OnInit {
  specialist: any;
  showSpeciality: boolean = false;
  messageSpeciality: any;
  doctorProfileId: any;
  logInfo: any = {};
  docProfile: any = {};
  userInfo: any = {}
  public doctorpdetail:any;
  doctoruserId: any;
  updateinfo:any;
  public validator: boolean = false;
  public specialityOfObjects:any=[];
  public specialityList: any = [];
  public selectedSpeciality:any=[];
  doctorDetail: FormGroup;
  doctorDetailErrors: any;
  public selectedLanguage:any=[];
  public specarr:any;
  public educarr:any;
  public langarr:any;
  public selectedEducation:any=[];
  public languageList: any = [];
  public  educationList: any = [];
  public educationOfObjects:any=[];
  public languageOfObjects:any=[];
 constructor(private router: Router,private formBuilder: FormBuilder,private docService: DocregistrationService,private profileService:ProfileService) {

    /***********STEP 1*************/
    this.doctorDetailErrors = {
      phoneNumber: {},
      name: {},
      registrationNumber: {},
      state:{},
      gender:{},
      dob:{},
      city:{},
      address:{},
      email:{},
      speciality:{},
      education:{},
      language:{},
      issuingAuthority:{},
      practicingSince:{},
    };
  }

  ngOnInit() {
    /*******STEP 1******** */
    this.doctorDetail = this.createdoctorDetail()
    this.doctorDetail.valueChanges.subscribe(() => {
      this.ondoctorDetailValuesChanged();
    });

    this.doctorProfileId = localStorage.getItem('doctorId');
    this.doctoruserId = localStorage.getItem('userId');
    this.doctorProfile();
    this.getSpecialityList();
    this.getEducationList();
    this.getLanguageList();
  }

  /******************************IT CATCHES ALL CHANGES IN STEP FORM 1******************/
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

  createdoctorDetail() {
    return this.formBuilder.group({
      phoneNumber: ['', Validators.required],
      name: ['', Validators.required],
      registrationNumber: ['',Validators.required],
      state: ['',Validators.required],
      gender: ['',Validators.required],
      dob: ['',Validators.required],
      city: ['',Validators.required],
      address: ['',Validators.required],
      email: ['',Validators.required],
      speciality: ['',Validators.required],
      education: ['',Validators.required],
      language: ['',Validators.required], 
      issuingAuthority: ['',Validators.required],
      practicingSince: ['',Validators.required]
    });
  }

// Doctor profile info
  doctorProfile() {
    this.profileService.getDocDetail(this.doctorProfileId).subscribe(data => {

      this.doctorpdetail=data;
      console.log('get doctor profiledata', this.doctorpdetail);
    },
      err => {
      })
  }

  updateDoctorProfile(updateinfo){

    let doctoridetail = {
      phoneNumber: updateinfo.phoneNumber,
      name: updateinfo.name,
      registrationNumber: updateinfo.registrationNumber,
      state:updateinfo.state,
      gender: updateinfo.gender,
      dob: updateinfo.dob,
      city: updateinfo.city,
      address: this.doctorDetail.value.address,
      email: this.doctorDetail.value.email,
      speciality: this.doctorDetail.value.speciality,
      education: this.doctorDetail.value.education,
      language: this.doctorDetail.value.language,
      issuingAuthority: updateinfo.issuingAuthority,
      practicingSince: updateinfo.practicingSince,
      userId : localStorage.getItem('userId')
    }
    this.profileService.updateDetail(doctoridetail).subscribe(data => {
      this.doctorpdetail=data;
      console.log('result',data)
      let result:any={}
      result=data
      // console.log("ABCD",result.result.speciality);
      console.log('updated profiledata', this.doctorpdetail);
      // console.log('updated profiledata', this.result.result.result);
      // this.router.navigate(['/dashboard/main']);speciality
    },
    err => {
    })
    
  }
  /********************GET LIST OF SPECIALITY *****************/
  getSpecialityList(){

    let data={
     z: "speciality"
   }
   this.docService.getSpecialityList(data).subscribe(data => {
     let value: any = {}
     value = data
     this.specialityList = value.result.result
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
  getEducationList(){
    let data={
        y: "education"
    }
      this.docService.getEducationList(data).subscribe(data => {
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
      x: "language"
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
    this.selectedLanguage.push(evt.value)
    this.langarr=this.doctorpdetail.language.append(this.selectedLanguage);
    console.log("langarr", this.langarr);
  }
    /***********************EDUCATION ON SELECT IN STEP 3*********/
  onAddEducation(evt) {
    this.selectedEducation.push(evt.value)
    this.educarr=this.doctorpdetail.education.append(this.selectedEducation);
    console.log(" this.educarr", this.educarr);
  }
      /***********************SPECIALITY ON SELECT IN STEP 3*********/
  onaAddSpeciality(evt) {
    // console.log(evt);
    this.selectedSpeciality.push(evt.value)
    // console.log('selectedSpeciality',this.selectedSpeciality)
    this.specarr=this.doctorpdetail.speciality.append(this.selectedSpeciality);
    console.log(" this.specarr", this.specarr);
  }
}
