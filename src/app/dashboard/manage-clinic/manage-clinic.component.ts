import { Component, OnInit, ElementRef, SimpleChanges, OnChanges,ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleService } from '../../meme-services/schedule.service';
import { SharedService } from '../../meme-services/shared.service';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import * as moment from 'moment'
declare var google;
import { AppointmentService} from '../../meme-services/appointment.service';



@Component({
  selector: 'app-manage-clinic',
  templateUrl: './manage-clinic.component.html',
  styleUrls: ['./manage-clinic.component.css']
})
export class ManageClinicComponent implements OnInit {
  @ViewChild('close') close: ElementRef;
  scheduleForm: FormGroup;
  scheduleFormErrors: any;
  scheduleData: any = {};
  clinicList: any = [];
  message: any;
  singleClinicList: any = {};
  updateClinicList: any = {};
  clinicDetails: any = {};
  days: any = [];
  clinicData: any = '';
  updatedValue: any;
  appointmentList: any;
  currentURL: any;
  public searchElementRef: ElementRef;
  public formHide: Boolean = false;
  public show: Boolean = false;
  public showEdit: Boolean = false;
  public cancel: Boolean = true;
  public createSchedule: Boolean = false; //for show plus icon
  public dataDisplay: Boolean = true; //when page load data display
  public showModal: boolean = false;
  deleteClinincId: any;
  // public formDisplay: Boolean = false;
  doctorprofileId: any;
  selected: any;
  weekSchedule = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  error: any = { isError: false, errorMessage: '' };
  clinicStatus: any;
  errMessage: any;
  city: any;
  pathName: any;
  date: any;
  Fdate: any;
  date1: any;
  date2: any;
  timeError:any = '';
  public mask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/] // Phone number validation 
  public fee = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/] // fee validation 
  toastoptions: any;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, public scheduleService: ScheduleService, private sharedService: SharedService,
    private toastyService: ToastyService, private toastyConfig: ToastyConfig,
    private appointmentService: AppointmentService

  ) {
    this.scheduleFormErrors = {
      clinicName: {},
      phoneNumber: {},
      city: {},
      address: {},
      fee: {},
      startTime: {},
      endTime: {},
      weekDays: []
    };

    this.doctorprofileId = localStorage.getItem('loginId');

    // send url path name to change navbar colour
    // this.pathName = (route.snapshot.url)[0].path;
    // this.sharedService.setPath(this.pathName)

// SEND THE URL PATH FOR MENU COLOR CHANGE
    this.currentURL = window.location.pathname; 
    console.log(this.currentURL);
    this.sharedService.setPath(this.currentURL);

    this.date = new Date().toISOString();
    console.log(this.date);
    this.Fdate = moment(this.date).format('DD/MM/YYYY');
    console.log("formatted date" + this.Fdate);

    this.toastyConfig.theme = "bootstrap";
  }

  ngOnInit() {
    this.scheduleForm = this.createScheduleForm()

    this.scheduleForm.valueChanges.subscribe(() => {
      this.onScheduleFormValuesChanged();
    });
    this.getClinicList();
    // for autocomplete location
    var input = (<HTMLInputElement>document.getElementById('pac-input'));
    console.log(input);
    let autocomplete = new google.maps.places.Autocomplete(input);
    console.log(autocomplete);
    this.initmap();

  }

  onScheduleFormValuesChanged() {
    this.error = "";
    this.errMessage = '';
    for (const field in this.scheduleFormErrors) {
      if (!this.scheduleFormErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.scheduleFormErrors[field] = {};

      // Get the control
      const control = this.scheduleForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.scheduleFormErrors[field] = control.errors;
      }
    }
  }


  createScheduleForm() {
    return this.formBuilder.group({
      clinicName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      city: ['', Validators.required],
      // pin: ['', Validators.required],
      fee: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      weekDays: [this.days],
      doctorId: [localStorage.getItem('loginId')],
      address: ['', Validators.required]

    });
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
  
  //create clinic
  saveScheduleForm() {
    this.error = {};
    this.timeError ='';
    this.city = (<HTMLInputElement>document.getElementById('pac-input')).value;
    console.log(this.city);
    if (this.days == '') {
      this.getDaysName();
    }
    console.log(this.scheduleForm.value);
    var time: any;
    if (this.compareTwoTime()) {
      this.error = { isError: true, errorMessage: 'End Time Cannot Be Before Start Time' };

    }
    else {
      this.error = {};
      if (this.scheduleForm.valid && this.days.length != 0) {
        // this.errMessage = '';
        if (this.clinicData._id) {
          this.scheduleForm.controls.weekDays.setValue(this.days);
          this.updateClinicInfo();
        }
        else {
          console.log(this.scheduleForm.value.startTime);
          // var startdateTime = moment(this.Fdate + ' ' + this.scheduleForm.value.startTime, 'DD/MM/YYYY HH:mm').format();
          // console.log(startdateTime);
          // let startTime: any;
          // startTime = moment.utc(startdateTime);
          // console.log(startTime);
          // console.log(this.scheduleForm.value.endTime);
          // var enddateTime = moment(this.Fdate + ' ' + this.scheduleForm.value.endTime, 'DD/MM/YYYY HH:mm').format();
          // console.log(enddateTime);
          // let endTime: any;
          // endTime = moment.utc(enddateTime);
          // console.log(endTime);

          // this.scheduleForm.controls.startTime.setValue(moment(startTime._d).toString());
          // this.scheduleForm.controls.endTime.setValue(moment(endTime._d).toString());
          this.scheduleForm.controls.city.setValue(this.city);
          this.scheduleForm.controls.doctorId.setValue(localStorage.getItem('loginId'));
          this.scheduleForm.controls.weekDays.setValue(this.days);

          console.log(this.scheduleForm.value);
          this.scheduleService.clinicCreate(this.scheduleForm.value).subscribe(data => {
            if (data.message == "Clinic Time conflicts with another clinic.") {
              let notifydata = {
                type: 'warning',
                title: 'Clinic',
                msg: 'time collapsed !'
              }
              this.sharedService.createNotification(notifydata);
            }
            else {
              this.scheduleData = data.result;
              let notifydata = {
                type: 'success',
                title: 'Clinic',
                msg: 'Created Succesfully'
              }
              this.sharedService.createNotification(notifydata);
              console.log(this.scheduleData);
              this.scheduleForm.reset();
              this.getClinicList();
              this.formHide = false;
              this.days = [];
              this.dataDisplay = true;
              this.createSchedule = true;
            }

          },
            err => {
            })
        }
      }
      else {
        this.errMessage = 'Please Enter The Credentials';
      }
    }
  }
  //save at enter
  keyDownFunction(event) {
    if(event.keyCode == 13) {
      this.saveScheduleForm();
    }
  }
  //get clinic Details through Doctor id
  getClinicList() {
    this.scheduleService.getClinicList(this.doctorprofileId).subscribe(data => {
      this.clinicList = data.result;
      console.log(this.clinicList);
      if(this.clinicList.length == 0){
        this.formHide = true;
        this.cancel = false;
        this.createSchedule =false;
      }
      else{
        this.formHide = false;
        this.createSchedule = true;
      }
    },
      err => {
      })
  }
  //get clinic Details through Clinic id
  getsingleClinicDetails() {
    this.scheduleService.getSingleClinicList(this.doctorprofileId).subscribe(data => {
      this.singleClinicList = data;
      console.log(this.singleClinicList);
    },
      err => {
      })
  }

  //update Clinic through clinic Id
  updateClinicInfo() {
    this.scheduleForm.controls.city.setValue(this.city);
    this.scheduleForm.controls.doctorId.setValue(localStorage.getItem('loginId'));

    this.updatedValue = this.scheduleForm.value;
    this.updatedValue._id = this.clinicData._id

    this.scheduleService.updateClinic(this.updatedValue).subscribe(data => {

      if (data.message == "Clinic Time conflicts with another clinic.") {
        let notifydata = {
          type: 'warning',
          title: 'Clinic',
          msg: 'time collapsed !'
        }
        this.sharedService.createNotification(notifydata);

      }
      else {
        this.updateClinicList = data.result;
        let notifydata = {
          type: 'success',
          title: 'Clinic',
          msg: 'Updated Succesfully'
        }
        this.sharedService.createNotification(notifydata);

        console.log(this.updateClinicList);
        this.getClinicList();
        this.scheduleForm.reset();
        this.days = [];
        this.formHide = false;
        this.showEdit = false;
        this.dataDisplay = true;
        this.createSchedule = true;
        this.clinicData._id = '';
      }

    },
      err => {
      })
  }
  createClinic() {
    this.dataDisplay = false; // Click on plus icon data hide
    this.createSchedule = false; //hide plus icon when schedule form is open
    this.formHide = true;
    this.cancel = false;

  }
  // select days of week
  daySelect(day) {
    if (this.days.indexOf(day) > -1)
      this.days.splice(this.days.indexOf(day), 1);
    else {
      this.days.push(day)
      this.errMessage = "";
      console.log(this.days)
    }
  }
  // selected days name
  getDaysName() {
    if (this.days && this.days.length == '') {
    }
    else {
      this.saveScheduleForm();
    }
  }

  // edit clinic form
  editSchedule(id) {
    this.showEdit=false;
    this.formHide = true;
    this.createSchedule = false;
    this.cancel = false;
    this.show = true;
    this.createClinic();

    this.scheduleService.getSingleClinicList(id).subscribe(data => {
      this.clinicData = data.result
      console.log(this.clinicData)
      this.scheduleForm.controls.clinicName.setValue(this.clinicData.clinicName);
      this.scheduleForm.controls.phoneNumber.setValue(this.clinicData.phoneNumber);
      this.scheduleForm.controls.city.setValue(this.clinicData.city);
      this.scheduleForm.controls.address.setValue(this.clinicData.address);
      this.scheduleForm.controls.fee.setValue(this.clinicData.fee);
      this.scheduleForm.controls.startTime.setValue(this.clinicData.startTime);
      this.scheduleForm.controls.endTime.setValue(this.clinicData.endTime);

      this.scheduleForm.controls.weekDays.setValue(this.clinicData.weekDays);
      // console.log(this.scheduleForm.controls.weekDays)
      this.days = this.clinicData.weekDays;
      console.log(this.days)
      console.log(this.clinicData._id)
    })

  }

  // cancel saving or editing clinic form
  cancelSave() {
    this.error = {};
    this.dataDisplay = true;
    this.formHide = false;
    this.createSchedule = true;
    this.showEdit = false;
    this.scheduleForm.reset();
    this.days = [];

  }

 // delete  selected clinic 
  deleteClinicInfo(id) {
    this.showEdit=false;
    this.scheduleService.deleteClinic(id).subscribe(data => {
      console.log(data);
      if(data.message=="Clinic is deleted"){
        this.showModal=false;
        let notifydata = {
                  type: 'success',
                  title: 'Clinic',
                  msg: 'Deleted Succesfully'
                }
                this.sharedService.createNotification(notifydata);
                this.getClinicList();
      }
      else if(data.message=="There are appointments for this clinic"){
        this.deleteClinincId = id;
        this.showModal=true;
      }

    },err=>{

    })
    // this.deleteClinincId = id;

    // this.scheduleForm.controls.doctorId.setValue(localStorage.getItem('loginId'));

    // this.appointmentService.getAppointmentByClinicId(id).subscribe(result => {
    //   console.log(result);
    //   this.appointmentList = result.result;
    //   if (this.appointmentList.length != 0) {
    //     this.showModal = true;
    //   }
    //   else {
    //     this.scheduleService.deleteClinic(id).subscribe(data => {
    //       console.log(data)
    //       let notifydata = {
    //         type: 'success',
    //         title: 'Clinic',
    //         msg: 'Deleted Succesfully'
    //       }
    //       this.sharedService.createNotification(notifydata);
    //       this.days = [];
    //       this.scheduleForm.reset();
    //       this.createSchedule = true;
    //       this.dataDisplay = true;
    //       this.formHide = false;
    //       this.showEdit = false;
    //       id = '';
    //       this.getClinicList();
        
      
         
    //     },
    //       err => {
    //       })
    //   }
    // },
    //   err => {

    //   });


  }

  // compare start and end time
  compareTime(time) {
    this.error = {};
    this.timeError ='';
    let presentTime: any;
    presentTime = moment(this.scheduleForm.controls.startTime.value).utcOffset(0);
    console.log(presentTime)
    presentTime.set({ hour: 1, minute: 0, second: 0, millisecond: 0 })
    console.log(presentTime)
    presentTime.toISOString()
    console.log(presentTime)
    presentTime.format()
    console.log(presentTime)
    let date1 = moment(presentTime._i, "HH:mm a");
    console.log(date1)

    if (date1.isAfter(time)) {
      console.log('abc')
      this.timeError =  'End Time Cannot Be Before Start Time';
    }
    
  }

  // update availaible status of clinic
  availabilityClinic(event, clinicId) {
    if (event.target.checked) {
      console.log('checked');
      this.clinicStatus = 'Open';
    }
    if (!event.target.checked) {
      console.log('not checked');
      this.clinicStatus = 'Close';
    }
    let available = {
      availability: this.clinicStatus,
      clinicId: clinicId
    }

    this.scheduleService.clinicAvailability(available).subscribe(data => {
      console.log('availability', data);
      this.clinicStatus = data.result.availability;
    },
      err => {

      })
  }
  // hide & show on click
  clinicEdit(id, i) {
    this.selected = i;
    // this.showEdit = true;
    if (this.showEdit == true) {
      this.showEdit = !this.showEdit;
    }
    else if (this.showEdit == false) {
      this.showEdit = !this.showEdit;
    }
  }

  // compare time for clinic creation and updation
  compareTwoTime() {
    let presentTime: any;
    presentTime = moment(this.scheduleForm.controls.startTime.value).utcOffset(0);
    console.log(presentTime)
    presentTime.set({ hour: 1, minute: 0, second: 0, millisecond: 0 })
    console.log(presentTime)
    presentTime.toISOString()
    console.log(presentTime)
    presentTime.format()
    console.log(presentTime)
    let date1 = moment(presentTime._i, "HH:mm a");
    console.log(date1)

    let selecetedDate: any;
    selecetedDate = moment(this.scheduleForm.controls.endTime.value).utcOffset(0);
    selecetedDate.set({ hour: 1, minute: 0, second: 0, millisecond: 0 })
    selecetedDate.toISOString()
    selecetedDate.format();
    let date2 = moment(selecetedDate._i, "HH:mm a");
    console.log(date2)

    if (date1.isAfter(date2)) {
      return true;
    }
    else return false;
  }


 


  //delete clinic
  deleteClinic() {
    this.scheduleService.deleteClinicByStatus(this.deleteClinincId).subscribe(data=>{
      console.log(data);
      let notifydata = {
                type: 'success',
                title: 'Clinic',
                msg: 'Deleted Succesfully !'
              }
              this.sharedService.createNotification(notifydata);
              this.showModal=false;
              this.getClinicList();
              this.deleteClinincId='';
              this.close.nativeElement.click();

    },err=>{

    })
    // this.appointmentList.forEach(element => {
    //   this.appointmentService.deleteAppointment(element._id).subscribe(data => {
    //     console.log(data);
    //     this.scheduleService.deleteClinic(this.deleteClinincId).subscribe(data => {
    //       console.log(data)
    //       let notifydata = {
    //         type: 'success',
    //         title: 'Clinic',
    //         msg: 'Deleted Succesfully'
    //       }
    //       this.sharedService.createNotification(notifydata);
    //       this.scheduleForm.reset();
    //       this.days = [];
    //       this.createSchedule = true;
    //       this.dataDisplay = true;
    //       this.formHide = false;
    //       this.showEdit = false;
    //       this.deleteClinincId = '';
    //       this.getClinicList();
         
    //     },
    //       err => {
    //       })

    //   },
    //     err => {
    //     })
    // });
  }
}
