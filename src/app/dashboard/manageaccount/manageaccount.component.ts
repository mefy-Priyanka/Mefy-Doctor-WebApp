import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../mefyservice/shared.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { AccounttService } from '../../mefyservice/accountt.service';


@Component({
  selector: 'app-manageaccount',
  templateUrl: './manageaccount.component.html',
  styleUrls: ['./manageaccount.component.css']
})
export class ManageaccountComponent implements OnInit {
  accountForm: FormGroup;
  accountFormErrors: any;
  doctorProfileId: any;

  doctorAccount: any = [];
  accountId: any = {};
  getAccountList: any = []

  currentURL: any;
  // showEdit: Boolean =false;
  hideAccountForm: Boolean = false; //hide Account Form
  showAddAccount: Boolean = true; //show add account button
  displayData: Boolean = false; //hide display data
  hideDeleteButton: Boolean = false // hide delete button in account form
  public loader:boolean=false /**** LOADER****** */

  // public errorMsg: any;
  pathName: any;
  submitted: boolean = false;
  public mask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/] // Account number validation 
  detail: any;
  constructor(private formBuilder: FormBuilder, public accountService: AccounttService, private sharedService: SharedService, private route: ActivatedRoute) {

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
      this.onAccountFormValuesChanged();
    });

    //
    this.doctorProfileId = localStorage.getItem('doctorId');
    //
    this.getAccountDetail();
    //
    // this.showAddAccount=true;
  }
  /******************************IT CATCHES ALL CHANGES IN STEP FORM 1******************/
  onAccountFormValuesChanged() {
    // this.errorMsg ='';
    if (this.accountForm.value != '') {
      this.submitted = false;
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
      accountHolderName: ['', Validators.required],
      ifscCode: ['', Validators.required],
      accountNumber: ['', Validators.required],
      accountType: ['', Validators.required],
      confirmAccountNumber: ['', Validators.required]

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
  /**************CREATE BANK ACCOUNT*****************************/
  saveAccountForm() {
    this.submitted = true;
    this.loader=true
    if (this.accountForm.valid) {
      let accountData = {
        accountHolderName: this.accountForm.value.accountHolderName,
        ifscCode: this.accountForm.value.ifscCode,
        accountNumber: this.accountForm.value.accountNumber,
        accountType: this.accountForm.value.accountType,
        doctorId: this.doctorProfileId
      }
      console.log('fasa', accountData)
      this.accountService.addBankAccount(accountData).subscribe(data => {
        console.log(data);
        this.loader=false;
        this.getAccountDetail()
        this.accountForm.reset();
        let notifydata = {
          type: 'sucess',
          title: 'Account',
          msg: 'Created Sucessfully'
        }
        this.sharedService.createNotification(notifydata);
        this.hideAccountForm = false; //for hide account form
        this.showAddAccount = true; //for hide add account button
        this.displayData = true;
        // this.sharedService.accountInfo(true);
      }, err => {
        console.log(err)
        let notifydata = {
          type: 'error',
          title: 'Account',
          msg: 'Creation Failed'
        }
        this.sharedService.createNotification(notifydata);
      })
    }
    else {
      let notifydata = {
        type: 'Warning',
        title: 'Account',
        msg: 'Something Went Wrong'
      }
      this.sharedService.createNotification(notifydata);
    }
  }
  cancelAccoutForm(){
    this.hideAccountForm=false;
    this.showAddAccount=true;
    this.displayData=true
  }

  /*****************GET ACCPOUNT BY DOCTOR ID*********************/
  getAccountDetail() {
    this.loader=true;
    this.accountService.getBankAccountList(this.doctorProfileId).subscribe(data => {
      console.log(data)
      this.loader=false;
      let result: any = {}
      result = data
      this.getAccountList = result.result.result
      console.log('dataaa', this.getAccountList)
      if (result.result.result && result.result.result.length != 0) {
        this.detail = this.getAccountList[0];
        this.showAddAccount = true; /*SHOW ADD ACCOUNT **/
        this.displayData = true; /*DISPLAY DATA **/
        this.hideAccountForm = false/*HIDE ACCOUNT FORM **/
      }
      else {
        this.showAddAccount = false;
        this.displayData = false;
        this.hideAccountForm = true;
      }
    },
      err => {
        console.log(err)
      })
  }
  /*****************ADD ANOTHER BANK ACCOUNT********************/
  addAccount() {
    this.hideAccountForm = true; // show account form
    this.showAddAccount = false; //for hide account detail
    this.displayData = false; //
    this.hideDeleteButton = false;
  }
  /************* ACCOUNT SELECTED FOR DELETE***************/
selectedAccountId(selectedAccountId){
  console.log('delete account',selectedAccountId)
  this.accountId=selectedAccountId
}
  /******************************DELETE ACCOUNT DETAIL********************/
  deleteAccountInfo() {
    this.loader=true;
    console.log('selectedAccountId',this.accountId)
    this.accountService.deleteBankAccount(this.accountId).subscribe(data => {
      console.log('data', data)
      this.loader=false
      this.getAccountDetail();
    },
      err => {
        console.log(err)
      })

  }

  //save at enter
  keyDownFunction(event) {
    if (event.keyCode == 13) {
      this.saveAccountForm();
    }
  }
}


