import { Component, OnInit,ElementRef, ViewChild, Renderer2,Input } from '@angular/core';
import { SharedService } from '../../../mefyservice/shared.service';
import { DoctorPrescriptionService } from '../../../meme-services/doctor-prescription.service';
// import { DomSanitizer } from '@angular/platform-browser';
import { SocketService } from '../../../meme-services/socket.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { APIURL ,videoURL} from '../../../urlsConfig';

// import { SearchHealthRecordPipe } from '../../search-health-record.pipe';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  host: {
    '(document:click)': 'handleClick($event)',
}
})
export class VideoComponent implements OnInit {
  hideVideo: boolean=false;
  url: any;
  imgUrlPrefix:any;
  public elementRef;
  // @ViewChild('openDropdown') openDropdown: ElementRef;
@Input() callerData : any;

  iframeElement: any;
  individualDetails: any;
  individualHealth: any;
  healthRecord: any = [];
  hideDetail: boolean = false;
  dob: any;
  age: number;
  consultId:any;
  individualId:any;
  filterField = {
    healthRecordType: ''
  };
  healthType = ['Medical History', 'Family History', 'Current Complaints', 'Medicine Details', 'Immunization', 'Allergies'];

  constructor(private ePrescriptionService: DoctorPrescriptionService,
    private sharedService: SharedService,
    private renderer: Renderer2,
    private sanitizer: DomSanitizer,
    private socketService: SocketService,
    myElement: ElementRef
  
  ) {
    let _base = this;
    // window.addEventListener('message', function (event) {
    //   switch (event.data.message) {
    //     case 'connected':
    //       _base.sharedService.changeEasyRTCid(event.data.easyRTCid);
    //       break;

    //     case 'disconnected':
    //       // _base.sharedService.makeCall(true);
    //       break;;
    //   }
    // });
    this.socketService.callDisconnected().subscribe(data=>{
      this.hideVideo = true;
    })
    this.elementRef = myElement;

    this.sharedService.appointmentType.subscribe(data => { 
      if (Object.keys(data).length != 0) {
        this.consultId = data.individualId;
        this.individualHealthRecord()
        this.hideVideo = true;
      }
   
    })
  }

  ngOnInit() {
    this.individualHealthRecord();
  
    this.iframeElement = document.getElementById('video-background');
    console.log("caller",this.callerData)

    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(videoURL+'?app=' + this.callerData.roomId +'&self='+localStorage.getItem('loginId') + '&selfRole=doctor&peerRole=individual&peer=' + this.callerData.callerId + '&caller=' + this.callerData.callerEasyRTC);

    // this.sharedService.callTrigger.subscribe(data => {
    //   if (data == false)
    //     return;
    //   if (data == true)
    //     return;
    //   let msg = { message: 'call', easyRTCid: data }
    //   this.iframeElement.contentWindow.postMessage(msg, '*');
    // })

  }
    // individula details from profile id
    getindividualDetails() {
      this.ePrescriptionService.getindividualDetails(this.callerData.callerId).subscribe(data => {
        this.individualDetails = data.registrationDetails;
      },
        err => {
        })
    }
  
    // individula details from profile id
    individualHealthRecord() {
      this.individualId = this.callerData?this.callerData.callerId:this.consultId
        this.ePrescriptionService.getHealthRecord(this.individualId).subscribe(data => {
          this.individualHealth = data.result;
          this.dob = this.individualHealth.dob;
          console.log('patient detail',this.individualHealth);
          this.healthRecord = this.individualHealth.healthRecord;
          this.healthRecord = this.individualHealth.healthRecord;
          this.imgUrlPrefix = this.sanitizer.bypassSecurityTrustResourceUrl( APIURL+"file/fileShow?fileId=" + this.individualHealth.profileImage);
          this.getAge(this.dob);
        },
          err => {
          })
      // }
    
    }
  
    getAge(dateString) {
      var today = new Date();
      var birthDate = new Date(dateString);
      this.age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        this.age--;
      
      }
      return this.age;
  
    }
  
    getType(name) {
      this.filterField.healthRecordType = name;
   
    }
   
  
    // hide and show details on click
    hideFilterData() {
      if (this.hideDetail == true) {
        this.hideDetail = !this.hideDetail;
      }
      else if (this.hideDetail == false) {
        this.hideDetail = !this.hideDetail;
      }
    }
    // Detecting Clicks Outside the Component
handleClick(event){
  var clickedComponent = event.target;
  var inside = false;
  do {
      if (clickedComponent === this.elementRef.nativeElement) {
          inside = true;
      }
      clickedComponent = clickedComponent.parentNode;
  } while (clickedComponent);
  if(inside){
      console.log('inside');
  }else{
      console.log('outside');
      if (this.hideDetail == true) {
        this.hideDetail = !this.hideDetail;
      }
  }
}
  
  }
  

