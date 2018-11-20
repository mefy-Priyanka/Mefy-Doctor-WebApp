import { Component, OnInit } from '@angular/core';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { SharedService } from '../mefyservice/shared.service';
@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {

  constructor(private sharedService: SharedService, private toastyService: ToastyService, private toastyConfig: ToastyConfig) {
this.toastyConfig.theme = "bootstrap";
   }

  ngOnInit() {
    this.sharedService.notificationType.subscribe(data => {
      if (Object.keys(data).length != 0) {
        switch (data.type) {
          case 'success':
            this.successNotification(data.title, data.msg);
            break;

          case 'warning':
            this.warningNotifications(data.title, data.msg);
            break;

            case 'error':
            this.errorNotifications(data.title, data.msg);
            break;
         
        }
      }
    })
  }

  warningNotifications(title, msg) {
    this.toastyService.warning({
      title: title,
      msg: msg,
      showClose: true,
      timeout: 1000,
      theme: "bootstrap",

    });
  }
  errorNotifications(title, msg) {
    this.toastyService.error({
      title: title,
      msg: msg,
      showClose: true,
      timeout: 1500,
      theme: "bootstrap",

    });
  }

  successNotification(title, msg) {
    // Just add default Toast with title only
    // this.toastyService.success('Hi there');


    this.toastyService.success({
      title: title,
      msg: msg,
      showClose: true,
      timeout: 3000,
      theme: "bootstrap",

    });
  }
}
