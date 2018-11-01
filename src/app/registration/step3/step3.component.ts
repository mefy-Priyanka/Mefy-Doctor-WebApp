import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorregisterService } from '../../meme-services/doctorregister.service';
import { SharedService } from '../../meme-services/shared.service';
import { CompleterService, CompleterData } from 'ng2-completer';
import{FormsModule} from '@angular/forms';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {
  model:any={};
  qualification: any = [];
  qualifications: any;
  speciality: any = [];
  specialities: any;
  doctorInfo: any;
  message: any = '';
  messageNew: any;
  qErr: any = '';
  sErr: any;
  messageQualification: any;
  messageSpeciality: any;
  degreeList:any;
  specialityList:any;
  public dataService: CompleterData;
  public specialityService:CompleterData;
  constructor(private doctorRegService: DoctorregisterService, private sharedService: SharedService, private router: Router,private completerService: CompleterService) {

    //get doctor info
    this.doctorInfo = this.sharedService.info;

  
  }

  ngOnInit() {
    
    this.getDegreeList();
    this.getSpecialityList();
    
  }

  //add qualifications
  addQualificaions(data) {
    if (data) {
      if (this.qualification.includes(data)) {
        this.qualifications = '';
        this.message = 'Qualification Already Exist !';
      }
      else {
        this.qualification.push(data);
        this.messageNew ="";
        this.qualifications = '';
        this.messageQualification ="";
        // this.qErr='';
      }
      //   console.log(this.qualification.includes(data));

      // console.log( this.qualification.includes(data));
    }
  }

  // add speciality
  addSpeciality(data) {
    if (data) {
      if (this.speciality.includes(data)) {
        this.specialities = '';
        this.message = "Speciality Already Exist !";
      }
      else {
        this.speciality.push(data);
        this.specialities = '';
        this.messageNew ="";
        this.messageSpeciality ="";
        // this.sErr='';
      }

    }

  }

  // add profile data
  addProfileData() {
    
    if ((this.speciality.length != 0) && (this.qualification.length != 0)) {
      this.messageNew = '';
      // this.qErr='';
      // this.sErr='';
      this.doctorInfo.speciality = this.speciality;
      this.doctorInfo.education = this.qualification;
      this.sharedService.doctorInfo(this.doctorInfo);
      console.log(this.sharedService.info);
      this.router.navigate(['/register/step4']);
    }
    else {
      this.messageNew = "Please Enter The Credentials";
    }
  }
  // validating qualificaions
  validateQualificaions() {
    if (this.qualifications.length ==0) {
      this.messageQualification = "Qualification Cannot Be Empty";
      // this.qErr='';
      // this.sErr='';
    }
    else{
      this.messageQualification ="";
      this.message ="";
    }
  }
  // validating speciality
  validateSpeciality() {
    if (this.specialities.length ==0) {
      this.messageSpeciality = "Speciality Cannot Be Empty";
      // this.sErr='';
    }
    else{
      this.messageSpeciality ="";
      this.message ="";
    }
  }

  // remove speciality
  removeSpeciality(name) {
    this.speciality.splice(this.speciality.indexOf(name), 1);
    console.log('speciality array', this.speciality);
  }

  // remove qualification
  removeQualification(name) {
    this.qualification.splice(this.qualification.indexOf(name), 1);
    console.log('qualification array', this.qualification);
  }

  //get degree list
  getDegreeList(){
    this.doctorRegService.getDegreeList().subscribe(data=>{
      console.log('education',data)
      this.degreeList=data.education;
      this.dataService = this.completerService.local(this.degreeList, 'Degree', 'Degree');
      console.log(this.degreeList)
    },
  err=>{

  })
  }

  //get speciality list
  getSpecialityList(){
    this.doctorRegService.getSpecialityList().subscribe(data=>{
      console.log('speciality',data)
      this.specialityList=data.speciality;
      console.log(this.specialityList)
      this.specialityService = this.completerService.local(this.specialityList, 'GeneralSpeciality', 'GeneralSpeciality');
    },err=>{

    })
  }
  //save at enter
 keyDownFunction(event) {
  if(event.keyCode == 13) {
    this.addProfileData();
  }
}

// select item for speciality
onItemSelectSpeciality(selected){

  if(selected)
  if (this.speciality.includes(selected.title)) {
    this.specialities = '';
    this.message = "Speciality Already Exist !";
  }
  else {
    this.speciality.push(selected.title);
    this.specialities = '';
    this.messageNew ="";
    this.messageSpeciality ="";
  }

}  

// select item for qualification
onItemSelectQualification(selected){

  if (selected) {
    if (this.qualification.includes(selected.title)) {
      this.qualifications = '';
      this.message = 'Qualification Already Exist !';
    }
    else {
      this.qualification.push(selected.title);
      this.messageNew ="";
      this.qualifications = '';
      this.messageQualification ="";

    }
  }

} 
  }


