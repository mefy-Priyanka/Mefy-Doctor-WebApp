import { Component, OnInit, ElementRef, SimpleChanges, OnChanges, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleService } from '../../meme-services/schedule.service';
import { SharedService } from '../../mefyservice/shared.service';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import * as moment from 'moment'
declare var google;
import { TextMaskModule } from 'angular2-text-mask';



//NEW IMPORTS 
import { ClinicService } from '../../mefyservice/clinic.service';
import { IfObservable } from 'rxjs/observable/IfObservable';

@Component({
  selector: 'app-manage-clinic',
  templateUrl: './manage-clinic.component.html',
  styleUrls: ['./manage-clinic.component.css']
})
export class ManageClinicComponent implements OnInit {
  @ViewChild('close') close: ElementRef;
  clinicForm: FormGroup;
  weekForm: FormArray;
  clinicFormErrors: any;
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
  public colorday: Boolean = false;
  public submitted: boolean = false;
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
  weekSchedule = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  error: any = { isError: false, errorMessage: '' };
  clinicStatus: any;
  errMessage: any;
  city: any;
  pathName: any;
  date: any;
  Fdate: any;
  date1: any;
  date2: any;
  jindex: any;
  timeError: any = '';
  public mask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/] // Phone number validation 
  public fee = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/] // fee validation 
  toastoptions: any;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, public scheduleService: ScheduleService, private sharedService: SharedService,
    private toastyService: ToastyService, private toastyConfig: ToastyConfig,
    private ClinicService: ClinicService

  ) {
    this.clinicFormErrors = {
      clinicName: {},
      phoneNumber: {},
      city: {},
      address: {},
      fee: {},
      startTime: {},
      endTime: {},
      weekDays: []
    };

    this.doctorprofileId = localStorage.getItem('doctorId');

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
    this.clinicForm = this.createclinicForm();

    this.clinicForm.valueChanges.subscribe(() => {
      this.onclinicFormValuesChanged();
    });

    this.getClinicList();
    // for autocomplete location
    var input = (<HTMLInputElement>document.getElementById('pac-input'));
    console.log(input);
    let autocomplete = new google.maps.places.Autocomplete(input);
    console.log(autocomplete);
    this.initmap();

  }

  onclinicFormValuesChanged() {
    this.error = "";
    this.errMessage = '';

    for (const field in this.clinicFormErrors) {
      if (!this.clinicFormErrors.hasOwnProperty(field)) {
        continue;
      }
      // Clear previous errors
      this.clinicFormErrors[field] = {};
      // Get the control
      const control = this.clinicForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.clinicFormErrors[field] = control.errors;
      }
    }
  }


  createclinicForm() {
    return this.formBuilder.group({
      clinicName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      city: ['', Validators.required],
      // pin: ['', Validators.required],
      fee: ['', Validators.required],
      doctorId: [this.doctorprofileId],
      address: ['', Validators.required],
      // weekDays: [this.days],
      weekDays: this.formBuilder.array([this.newform()])
    });

  }
  newform() {
    return this.formBuilder.group({
      day: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
    })

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




  // COMPARE END TIME WITH START TIME
  comparewithEndTime(i) {
    this.jindex = i;
    console.log('INSIDE COMPARE WITH END TIME');
    if ((<FormArray>this.clinicForm.controls['weekDays']).controls[i]['controls']['endTime'].value) {
      let starttime: any;
      starttime = moment((<FormArray>this.clinicForm.controls['weekDays']).controls[i]['controls']['startTime'].value).utcOffset(0);
      // console.log(starttime)
      starttime.set({ hour: 1, minute: 0, second: 0, millisecond: 0 })
      // console.log(starttime)
      starttime.toISOString()
      // console.log(starttime)
      starttime.format()
      console.log(starttime)
      let time1 = moment(starttime._i, "HH:mm a");
      // console.log(time1)

      let endtime: any;
      endtime = moment((<FormArray>this.clinicForm.controls['weekDays']).controls[i]['controls']['endTime'].value).utcOffset(0);
      endtime.set({ hour: 1, minute: 0, second: 0, millisecond: 0 })
      endtime.toISOString()
      endtime.format();
      let time2 = moment(endtime._i, "HH:mm a");
      // console.log(time2)

      if (time1.isAfter(time2)) {
        this.timeError = ' Start Time cannot be after endTime';
      }
      else {
        this.timeError = '';
      }

    }

  }

  // COMPARE START TIME WITH ENDTIME
  comparewithStartTime(i) {
    this.jindex = i;
    if ((<FormArray>this.clinicForm.controls['weekDays']).controls[i]['controls']['startTime'].value) {
      let starttime: any;
      starttime = moment((<FormArray>this.clinicForm.controls['weekDays']).controls[i]['controls']['startTime'].value).utcOffset(0);
      // console.log(starttime)
      starttime.set({ hour: 1, minute: 0, second: 0, millisecond: 0 })
      // console.log(starttime)
      starttime.toISOString()
      // console.log(starttime)
      starttime.format()
      // console.log(starttime)
      let time1 = moment(starttime._i, "HH:mm a");
      // console.log(time1)

      let endtime: any;
      endtime = moment((<FormArray>this.clinicForm.controls['weekDays']).controls[i]['controls']['endTime'].value).utcOffset(0);
      endtime.set({ hour: 1, minute: 0, second: 0, millisecond: 0 })
      endtime.toISOString()
      endtime.format();
      let time2 = moment(endtime._i, "HH:mm a");
      // console.log(time2)

      if (time1.isAfter(time2)) {
        this.timeError = 'End Time Cannot Be Before Start Time';
      }
      else {
        this.timeError = '';
      }

    }


  }


  //CREATE CLINIC
  saveclinicForm() {

    console.log('CLINIC FORM VALUE', this.clinicForm)
    this.error = {};
    this.timeError = '';
    this.city = (<HTMLInputElement>document.getElementById('pac-input')).value;
    this.clinicForm.controls.doctorId.setValue(this.doctorprofileId);
    // console.log(this.city);
    if (this.clinicForm.valid) {
      this.submitted = false;
      this.clinicForm.controls.city.setValue(this.city);

      if (this.clinicData.clinicId) {

        this.updateClinicInfo();
      }
      else {

        this.ClinicService.addClinic(this.clinicForm.value).subscribe(result => {
          console.log('ADD CLINIC RESULT', result)
          let response: any = {};
          response = result;
          if (!response.result.error) {
            this.clinicForm.reset();
            if (response.result.message == "Clinic Created Successfully") {
              //created
              let notifydata = {
                type: 'success',
                title: 'Clinic',
                msg: 'Created Succesfully'
              }
              this.sharedService.createNotification(notifydata);
              this.formHide = false;
              this.getClinicList();
            }
            else if (response.result.message == "You had another clinic on this time for same day") {
              //time collapsed
              let notifydata = {
                type: 'warning',
                title: 'Clinic',
                msg: 'Time Collapsed,Please check your clinic timings '
              }
              this.sharedService.createNotification(notifydata);

            }
          }

        }),
          err => {
            let notifydata = {
              type: 'error',
              title: 'Clinic',
              msg: 'Creation Failed'
            }
            this.sharedService.createNotification(notifydata);
          }
      }
    }
    else {
      console.log(this.clinicForm.controls.weekDays.valid)
      this.submitted = true;
      if (!this.clinicForm.controls.weekDays.valid)
        this.error = { isError: true, errorMessage: 'Day & Time are required' };
    }

    // if (this.days == '') {
    //   this.getDaysName();
    // }
    // console.log(this.clinicForm.value);
    // var time: any;
    // if (this.compareTwoTime()) {
    //   this.error = { isError: true, errorMessage: 'End Time Cannot Be Before Start Time' };

    // }
    // else {
    //   this.error = {};
    //   if (this.clinicForm.valid && this.days.length != 0) {
    //     // this.errMessage = '';
    //     if (this.clinicData._id) {
    //       this.clinicForm.controls.weekDays.setValue(this.days);
    //       this.updateClinicInfo();
    //     }
    //     else {
    //       console.log(this.clinicForm.value.startTime);
    //       // var startdateTime = moment(this.Fdate + ' ' + this.clinicForm.value.startTime, 'DD/MM/YYYY HH:mm').format();
    //       // console.log(startdateTime);
    //       // let startTime: any;
    //       // startTime = moment.utc(startdateTime);
    //       // console.log(startTime);
    //       // console.log(this.clinicForm.value.endTime);
    //       // var enddateTime = moment(this.Fdate + ' ' + this.clinicForm.value.endTime, 'DD/MM/YYYY HH:mm').format();
    //       // console.log(enddateTime);
    //       // let endTime: any;
    //       // endTime = moment.utc(enddateTime);
    //       // console.log(endTime);

    //       // this.clinicForm.controls.startTime.setValue(moment(startTime._d).toString());
    //       // this.clinicForm.controls.endTime.setValue(moment(endTime._d).toString());
    //       this.clinicForm.controls.city.setValue(this.city);
    //       this.clinicForm.controls.doctorId.setValue(localStorage.getItem('loginId'));
    //       this.clinicForm.controls.weekDays.setValue(this.days);

    //       console.log(this.clinicForm.value);
    //       this.scheduleService.clinicCreate(this.clinicForm.value).subscribe(data => {
    //         if (data.message == "Clinic Time conflicts with another clinic.") {
    //           let notifydata = {
    //             type: 'warning',
    //             title: 'Clinic',
    //             msg: 'time collapsed !'
    //           }
    //           this.sharedService.createNotification(notifydata);
    //         }
    //         else {
    //           this.scheduleData = data.result;
    //           let notifydata = {
    //             type: 'success',
    //             title: 'Clinic',
    //             msg: 'Created Succesfully'
    //           }
    //           this.sharedService.createNotification(notifydata);
    //           console.log(this.scheduleData);
    //           this.clinicForm.reset();
    //           this.getClinicList();
    //           this.formHide = false;
    //           this.days = [];
    //           this.dataDisplay = true;
    //           this.createSchedule = true;
    //         }

    //       },
    //         err => {
    //         })
    //     }
    //   }
    //   else {
    //     this.errMessage = 'Please Enter The Credentials';
    //   }
    // }
  }
  //save at enter
  keyDownFunction(event) {
    if (event.keyCode == 13) {
      this.saveclinicForm();
    }
  }
  //get clinic Details through Doctor id
  getClinicList() {
    this.ClinicService.getCliniclist(this.doctorprofileId).subscribe(data => {
      console.log(data)
      let response: any = {};
      response = data;
      if (!response.result.error) {
        this.clinicList = response.result.result;
        console.log(this.clinicList);
        if (this.clinicList.length == 0) {
          this.formHide = true;
          this.cancel = false;
          this.createSchedule = false;
        }
        else {
          this.formHide = false;
          this.createSchedule = true;
        }
      }

    },
      err => {
      })
  }
  //get clinic Details through Clinic id
  getsingleClinicDetails() {
    this.ClinicService.getSingleClinicDetail(this.doctorprofileId).subscribe(data => {
      this.singleClinicList = data;
      console.log(this.singleClinicList);
    },
      err => {
      })
  }

  //update Clinic through clinic Id
  updateClinicInfo() {

    console.log('update function', this.clinicForm)
    // this.clinicForm.controls.city.setValue(this.city);
    // this.clinicForm.controls.doctorId.setValue(localStorage.getItem('loginId'));

    // this.updatedValue = this.clinicForm.value;
    // this.updatedValue._id = this.clinicData._id

    this.ClinicService.updateClinic(this.clinicData.clinicId, this.clinicForm.value).subscribe(data => {
      console.log('updatedvalue result', data)
      let response:any={};
      response=data;
      if (response.message == "Clinic Time conflicts with another clinic.") {
        let notifydata = {
          type: 'warning',
          title: 'Clinic',
          msg: 'time collapsed !'
        }
        this.sharedService.createNotification(notifydata);

      }
      else {
        this.updateClinicList = response.result;
        let notifydata = {
          type: 'success',
          title: 'Clinic',
          msg: 'Updated Succesfully'
        }
        this.sharedService.createNotification(notifydata);
        this.getClinicList();
        this.clinicForm.reset();
        this.days = [];
        this.formHide = false;
        this.showEdit = false;
        this.dataDisplay = true;
        this.createSchedule = true;
        this.clinicData.clinicId = '';
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
    this.weekForm = this.clinicForm.get('weekDays') as FormArray;
    console.log(this.weekForm);
    let formgroup = <FormArray>this.clinicForm.get('weekDays');
    for (let index = formgroup.length - 1; index > 0; index--) {
      // Remove all but one occurrence and then add back only what the model dictates.
      formgroup.removeAt(index);
    }

  }





  // SELECT DAYS FROM OPTIONS AND FILL DAY VALUE OF WEEKDAYS ACCORDING TO INDEX
  daySelect(day, i) {
    this.colorday = true;
    if (day == 'SU') {
      (<FormArray>this.clinicForm.controls['weekDays']).controls[i]['controls']['day'].setValue('Sunday');
    }
    else if (day == "MO") {
      (<FormArray>this.clinicForm.controls['weekDays']).controls[i]['controls']['day'].setValue('Monday');
    }
    else if (day == "TU") {
      (<FormArray>this.clinicForm.controls['weekDays']).controls[i]['controls']['day'].setValue('Tuesday');
    }
    else if (day == "WE") {
      (<FormArray>this.clinicForm.controls['weekDays']).controls[i]['controls']['day'].setValue('Wednesday');
    }
    else if (day == "TH") {
      (<FormArray>this.clinicForm.controls['weekDays']).controls[i]['controls']['day'].setValue('Thursday');
    }
    else if (day == "FR") {
      (<FormArray>this.clinicForm.controls['weekDays']).controls[i]['controls']['day'].setValue('Friday');
    }
    else if (day == "SA") {
      (<FormArray>this.clinicForm.controls['weekDays']).controls[i]['controls']['day'].setValue('Saturday');
    }
    console.log(this.clinicForm.value)


    // if (this.days.indexOf(day) > -1)
    //   this.days.splice(this.days.indexOf(day), 1);
    // else {
    //   this.days.push(day)
    //   this.errMessage = "";
    //   console.log(this.days)
    // }
  }

  // selected days name
  getDaysName() {
    if (this.days && this.days.length == '') {
    }
    else {
      this.saveclinicForm();
    }
  }

  // eSHOW DATA OF SELECTED CLINIC TO EDIT
  editClinic(id) {
    console.log(this.clinicForm.get('weekDays') as FormArray);
    this.weekForm = this.clinicForm.get('weekDays') as FormArray;
    console.log(this.weekForm.length);
    // (<FormArray>this.clinicForm.get('weekDays')).removeAt(this.weekForm.length-1);
    // this.clinicForm.controls.weekDays.controls[1].removeControl('item1');
    // while (this.weekForm.length !== 0) {
    //   this.weekForm.removeAt(this.weekForm.length-1)
    // }
    console.log(id)
    this.showEdit = false;
    this.formHide = true;
    this.createSchedule = false;
    this.cancel = false;
    this.show = true;
    this.createClinic();


    // this.clinicForm.reset();
    console.log(this.clinicForm.get('weekDays') as FormArray);
    this.ClinicService.getSingleClinicDetail(id).subscribe(data => {
      console.log('single clinic detail', data)
      let response: any = {};
      response = data;
      this.clinicData = response;
      console.log(this.clinicData)
      this.clinicForm.controls.clinicName.setValue(this.clinicData.clinicName);
      this.clinicForm.controls.phoneNumber.setValue(this.clinicData.phoneNumber);
      this.clinicForm.controls.city.setValue(this.clinicData.city);
      this.clinicForm.controls.address.setValue(this.clinicData.address);
      this.clinicForm.controls.fee.setValue(this.clinicData.fee);
      // SHOW WEEKDAYS VALUE
      for (let i = 0; i < this.clinicData.weekDays.length; i++) {
        (<FormArray>this.clinicForm.controls['weekDays']).controls[i]['controls']['day'].setValue(this.clinicData.weekDays[i].day);
        (<FormArray>this.clinicForm.controls['weekDays']).controls[i]['controls']['startTime'].setValue(this.clinicData.weekDays[i].startTime);
        (<FormArray>this.clinicForm.controls['weekDays']).controls[i]['controls']['endTime'].setValue(this.clinicData.weekDays[i].endTime);
        if (i < this.clinicData.weekDays.length - 1) {
          this.weekForm.push(this.newform());
        }
      }
    })

  }

  // cancel saving or editing clinic form
  cancelSave() {

    console.log(this.clinicForm.get('weekDays') as FormArray);
    this.error = {};
    this.dataDisplay = true;
    this.formHide = false;
    this.createSchedule = true;
    this.showEdit = false;
    this.clinicForm.reset();
    console.log('reset form value', this.clinicForm)
    //  removes form arrayindexes 
    let formgroup = <FormArray>this.clinicForm.get('weekDays');
    for (let index = formgroup.length - 1; index > 0; index--) {
      // Remove all but one occurrence and then add back only what the model dictates.
      formgroup.removeAt(index);
    }
  }

  // delete  selected clinic 
  deleteClinicInfo(id) {
    this.showEdit = false;
    this.ClinicService.deleteClinic(id).subscribe(data => {
      console.log(data);
      let response:any={};
      response=data;
      if (response.message == "Clinic is deleted") {
        this.showModal = false;
        let notifydata = {
          type: 'success',
          title: 'Clinic',
          msg: 'Deleted Succesfully'
        }
        this.sharedService.createNotification(notifydata);
        this.getClinicList();
      }
      else if (response.message == "There are appointments for this clinic") {
        this.deleteClinincId = id;
        this.showModal = true;
      }

    }, err => {

    })
    // this.deleteClinincId = id;

    // this.clinicForm.controls.doctorId.setValue(localStorage.getItem('loginId'));

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
    //       this.clinicForm.reset();
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
    this.timeError = '';
    let presentTime: any;
    presentTime = moment(this.clinicForm.controls.startTime.value).utcOffset(0);
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
      this.timeError = 'End Time Cannot Be Before Start Time';
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
  showOptions(id, i) {
    console.log(i)
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
    presentTime = moment(this.clinicForm.controls.startTime.value).utcOffset(0);
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
    selecetedDate = moment(this.clinicForm.controls.endTime.value).utcOffset(0);
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
    this.scheduleService.deleteClinicByStatus(this.deleteClinincId).subscribe(data => {
      console.log(data);
      let notifydata = {
        type: 'success',
        title: 'Clinic',
        msg: 'Deleted Succesfully !'
      }
      this.sharedService.createNotification(notifydata);
      this.showModal = false;
      this.getClinicList();
      this.deleteClinincId = '';
      this.close.nativeElement.click();

    }, err => {

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
    //       this.clinicForm.reset();
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

  addNewweekday() {
    console.log('INSIDE ADD FORM FUNCTION');
    this.weekForm = this.clinicForm.get('weekDays') as FormArray;
    this.weekForm.push(this.newform());
    // (<FormArray>this.clinicForm.get('weekDays')).push(new FormControl(''));
  }

  getday(day) {
    console.log('dat', day)
  }
}
