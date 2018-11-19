import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../mefyservice/shared.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AccountService } from '../../meme-services/account.service';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { AccounttService } from '../../mefyservice/accountt.service';


@Component({
  selector: 'app-manageaccount',
  templateUrl: './manageaccount.component.html',
  styleUrls: ['./manageaccount.component.css']
})
export class ManageaccountComponent implements OnInit {
  accountSubmitted: boolean;
  account: any = {
    accountHolderName: '',
    accountNumber: '',
    accountType: '',
    confirmAccountNumber: ''
  };
  accountForm: FormGroup;
  accountFormErrors: any;
  doctorprofileId: any;
  doctorAccount: any =[];
  accountId: any = {};
  accountDetail: any = [];
  detail: any;
  newIfscCode: any;
  currentURL: any;
  // showEdit: Boolean =false;
  hideAccountForm: Boolean = false; //hide Account Form
  showAddAccount: Boolean = true; //show add account button
  displayData: Boolean = false; //hide display data
  hideDeleteButton:Boolean=false // hide delete button in account form
  // onpaste:Boolean=false;
  id: any = {};
  updatedAccountData: any;
  // public errorMsg: any;
  pathName:any;
  submitted: boolean = false;
  public mask = [ /[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,/\d/,/\d/,/\d/, /\d/, /\d/, /\d/] // Account number validation 
  constructor(private formBuilder: FormBuilder, public accountService: AccounttService,private sharedService: SharedService,private route:ActivatedRoute) {
    this.accountFormErrors = {
      accountHolderName: {},
      ifscCode: {},
      accountNumber: {},
      accountType: {},
      confirmAccountNumber: {}
    };

      // send url path name to change navbar colour
      // this.pathName=(route.snapshot.url)[0].path;
      // this.sharedService.setPath(this.pathName)

      this.currentURL = window.location.pathname; 
    console.log(this.currentURL);
    this.sharedService.setPath(this.currentURL);
  }

  ngOnInit() {
    this.accountForm = this.createAccountForm()

    this.accountForm.valueChanges.subscribe(() => {
      this.onScheduleFormValuesChanged();
    });

    //
    this.doctorprofileId = localStorage.getItem('loginId');
    //
    this.getAccountDetail();
    //
    // this.showAddAccount=true;
  }
  onScheduleFormValuesChanged() {
    // this.errorMsg ='';
    if(this.accountForm.value!=''){
      this.submitted=false;   
     }
    for (const field in this.accountFormErrors) {
      if (!this.accountFormErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.accountFormErrors[field] = {};

      // Get the control
      const control = this.accountForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.accountFormErrors[field] = control.errors;
      }
    }
  }
  // Create Account form
  createAccountForm() {
    return this.formBuilder.group({
      accountHolderName: [this.account.accountHolderName, Validators.required],
      ifscCode: [this.account.ifscCode, Validators.required],
      accountNumber: [this.account.accountNumber, Validators.required],
      accountType: [this.account.accountType, Validators.required],
      confirmAccountNumber: [this.account.confirmAccountNumber, Validators.required],
      doctorId: [localStorage.getItem('loginId')]

    }, { validator: this.checkIfMatchingPasswords('accountNumber', 'confirmAccountNumber') });
  }

  // confirm password 
  checkIfMatchingPasswords(accountKey: any, accountConfirmationKey: any) {
    return (group: FormGroup) => {
      let accountInput = group.controls[accountKey],
        accountConfirmationInput = group.controls[accountConfirmationKey];
      if (accountInput.value == '' || accountConfirmationInput.value == '')
        return;
      if (accountInput.value !== accountConfirmationInput.value) {
        this.accountFormErrors.confirmAccountNumber.match = true;
        return accountConfirmationInput.setErrors({ match: true });
      }
      else {
        return;
      }
    }
  }
  // Save Account Form
  saveAccountForm() {
    this.submitted = true;
  // this.accountSubmitted=true
  //   console.log(this.accountForm.value);
  //   this.newIfscCode=this.accountForm.controls.ifscCode.value.toUpperCase()
  //   this.accountForm.controls.ifscCode.patchValue(this.newIfscCode);  
  //   console.log(this.accountForm.value);
  //   if (this.accountForm.valid) {
  //     if (this.account._id) {
  //       this.submitted=false;
  //       this.accountSubmitted=false;
  //       this.updateAccountInfo();
  //     }
  //     else{
  //       this.accountForm.controls.doctorId.setValue(localStorage.getItem('loginId'));
  //       console.log(this.accountForm.value);
  //     console.log(this.accountForm.value);
  //     this.accountService.addBankAccount(this.accountForm.value).subscribe(data => {
  //       console.log(data);
  //       this.accountForm.reset();
  //       this.getAccountDetail();
  //       this.hideAccountForm = false; //for hide account form
  //       this.showAddAccount = false; //for hide add account button
  //       this.displayData=true;
  //       this.sharedService.accountInfo(true);
  //     },err=>{

  //     })
  //   }
    
  // }
  // else{
  //   this.errorMsg = 'Please enter  all the credentials';
  // }
}

  //  Display Account Detail
  getAccountDetail() {
    // this.accountService.getAccountListByDoctorList(this.doctorprofileId).subscribe(data => {
    //   console.log(data)
    //   this.accountDetail = data.result;
    //   console.log(this.accountDetail); 
    //   if(data.result && data.result.length!=0){
    //     this.detail=this.accountDetail[0];
    //     this.showAddAccount=false; 
    //     this.displayData=true;
    //   } 
    //   else
    //   {
    //     this.showAddAccount=true; 
    //     this.displayData=false;
    //   }
    // })
  }
  //
  addAccount() {
    this.hideAccountForm = true;
    this.showAddAccount = false; //for hide account detail
    this.displayData=false; //
    this.hideDeleteButton=false;
  }
  
  editAccountForm(id) {
    console.log(this.detail, 'account');
    this.submitted=false;
  this.accountSubmitted=false    
    this.hideDeleteButton=true    
    this.hideAccountForm = true;
    this.showAddAccount = false;
    this.displayData=false;  
    // this.showEdit=true;
    //
    this.account = this.detail;
    console.log(this.account._id);
    this.createAccountForm();
    console.log(this.account._id);
    this.accountForm.controls.accountHolderName.setValue(this.account.accountHolderName);
    this.accountForm.controls.ifscCode.setValue(this.account.ifscCode);
    this.accountForm.controls.accountNumber.setValue(this.account.accountNumber);
    this.accountForm.controls.confirmAccountNumber.setValue(this.account.confirmAccountNumber);
    this.accountForm.controls.accountType.setValue(this.account.accountType);
  }


  // for Update(edit) Account Detail
  updateAccountInfo(){
    // this.accountForm.controls.doctorId.setValue(localStorage.getItem('loginId'));
    // this.updatedAccountData= this.accountForm.value;
    // this.updatedAccountData._id=this.account._id;
    // console.log(this.updatedAccountData._id);
    // this.accountService.accountUpdate(this.updatedAccountData).subscribe(data => {
    //   console.log('updated account data',data);
    //   this.accountForm.reset();
    //   this.getAccountDetail();
    //   this.hideAccountForm = false;
    //   this.showAddAccount=false;
    //   this.displayData=true;
    //   this.sharedService.accountInfo(true);
    // },err=>{

    // })
   

  }
   // delete Account details
   deleteClinicInfo(id) {
    // this.accountForm.controls.doctorId.setValue(localStorage.getItem('loginId'));
    // this.accountService.deleteAccount(id).subscribe(data => {
    //   console.log(data)
    // this.getAccountDetail();
    // this.accountForm.reset();
    // this.hideAccountForm = false;
    // this.showAddAccount=true;
    // this.displayData=false;
    // // this.detail={};
    //   id = '';
    // },
    //   err => {
    //     console.log(err);
    //   })
 
 
  }

    //save at enter
    keyDownFunction(event) {
      if(event.keyCode == 13) {
        this.saveAccountForm();
      }
    }
}


