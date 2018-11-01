import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DoctorregisterService } from '../../meme-services/doctorregister.service';
import { SharedService } from '../../meme-services/shared.service';
import { CompleterService, CompleterData } from 'ng2-completer';
import * as moment from 'moment';

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.css']
})
export class Step5Component implements OnInit {
  step5Form: FormGroup;
  step5FormErrors: any;
  profile: any;
  regNo: any;
  authority: any;
  doctorInfo: any;
  message: any = "";
  stateList: any;
  practisingDate: any;
  state: any;
  authMessage: any = "";
  stateMessage: any = "";
  dateMessage: any = "";
  public stateService: CompleterData;
  error: any;
  date: any;
  public practisingYear = [/[1-9]/, /\d/, /\d/, /\d/] // practising year validation
  public registrationNo = [ /[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,/\d/,/\d/,/\d/, /\d/, /\d/, /\d/] // Registration number validation  
  constructor(private formBuilder: FormBuilder, private doctorRegService: DoctorregisterService, private sharedService: SharedService, private router: Router, private completerService: CompleterService) {
    //get doctor info
    this.doctorInfo = this.sharedService.info;
    this.step5FormErrors = {
      regNo: {},
      authority: {},
      state: {},
      practisingDate: {}

    };
  }

  ngOnInit() {
    this.getStateList();
    this.step5Form = this.createStep5Form()

    this.step5Form.valueChanges.subscribe(() => {
      this.onStep5FormValuesChanged();
    });
  }

  createStep5Form() {
    return this.formBuilder.group({
      regNo: ['', Validators.required],
      authority: ['', Validators.required],
      state: ['', Validators.required],
      practisingDate: ['', Validators.required]

    });
  }

  onStep5FormValuesChanged() {
    this.message = "";
    this.error="";
    for (const field in this.step5FormErrors) {
      if (!this.step5FormErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.step5FormErrors[field] = {};

      // Get the control
      const control = this.step5Form.get(field);

      if (control && control.dirty && !control.valid) {
        this.step5FormErrors[field] = control.errors;
      }
    }
  }

  //create doctor profile
  createProfile() {
    this.error = '';
    if (this.comparePracticingYear(this.step5Form.value.practisingDate)) {
      console.log(this.step5Form.value)
      console.log(this.doctorInfo);
      if (this.step5Form.valid) {
        this.doctorInfo.registrationNumber = this.step5Form.value.regNo;
        this.doctorInfo.issuingAuthority = this.step5Form.value.authority;
        this.doctorInfo.state = this.step5Form.value.state;
        // this. date= any;
        this.date = moment(this.step5Form.value.practisingDate).utcOffset(0);
        console.log(this.date);
        this.date.set({ hour: 1, minute: 0, second: 0, millisecond: 0 })
        this.date.toISOString()
        this.date.format()
        console.log(this.date)
        console.log(parseInt((moment(this.date).format('YYYY'))))
        this.doctorInfo.practicingSince = parseInt((moment(this.date).format('YYYY')));
        console.log(this.doctorInfo.practicingSince);
        this.sharedService.doctorInfo(this.doctorInfo);
        this.sharedService.info.location = {};
        console.log(this.sharedService.info);
        this.doctorRegService.addDoctorprofile(this.sharedService.info).subscribe(data => {
          console.log('profileData', data);
          localStorage.setItem('loginId', data.doctorDetails._id);
          this.router.navigate(['/dashboard']);
        },
          err => {
          });
      }
      else {
        this.message = "Please Enter The Credentials";
      }
    }
    else {
      this.error = 'Invalid Practicing Year';
    }
  }

  //get state list
  getStateList() {
    this.doctorRegService.getStateList().subscribe(data => {
      console.log('state list', data);
      this.stateList = data.state;
      this.stateService = this.completerService.local(this.stateList, 'states', 'states');
    })
  }
  //save at enter
  keyDownFunction(event) {
    if (event.keyCode == 13) {
      this.createProfile();
    }
  }

  comparePracticingYear(year) {
    this.error = '';
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
      this.error = 'Invalid Practicing Year';
      console.log('abc')
      return false;
    }
    else if ((formattedYear) < (maxYear)) {
      this.error = 'Invalid Practicing Year';
      return false;
    }
    else {
      return true;
    }
  }

}
