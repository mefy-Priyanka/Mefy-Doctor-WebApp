import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { APIURL } from '../urlsConfig';

@Injectable()
export class DoctorPrescriptionService {

  constructor(private http: Http) { }

  //create prescription to get prescription id
  createPrescription(data) {
    return this.http.post(APIURL + 'prescription/create', data)
      .map(res => res.json())
      .catch(this.handleError)
  }

  //get prescription through prescription id
  getPrescription(id) {
    return this.http.get(APIURL + 'prescription/getSingle?prescriptionId=' + id)
      .map(res => res.json())
      .catch(this.handleError)
  }

  // create diagnosis prescriptions
  createDiagnosis(id, data) {
    return this.http.post(APIURL + 'diagnosis/create?prescriptionId=' + id, data)
      .map(res => res.json())
      .catch(this.handleError)
  }

  // create lifestyle prescriptions
  createLifeStyleInstruction(id, data) {
    return this.http.post(APIURL + 'lifeStyleInstruction/create?prescriptionId=' + id, data)
      .map(res => res.json())
      .catch(this.handleError)
  }

  // create specific instructions prescriptions
  createSpecificInstruction(id, data) {
    return this.http.post(APIURL + 'specificInstruction/create?prescriptionId=' + id, data)
      .map(res => res.json())
      .catch(this.handleError)
  }

  // create medicine prescription
  createMedicine(id, data) {
    return this.http.post(APIURL + 'prescribeMedicine/create?prescriptionId=' + id, data)
      .map(res => res.json())
      .catch(this.handleError)
  }

  // create medicine prescription
  createAdvice(id, data) {
    return this.http.post(APIURL + 'advice/create?prescriptionId=' + id, data)
      .map(res => res.json())
      .catch(this.handleError)
  }

  // create recommended test prescription
  createRecommendedTest(data, id) {
    return this.http.post(APIURL + 'recommended/create?prescriptionId=' + id, data)
      .map(res => res.json())
      .catch(this.handleError)
  }


  // get individual details through profile id
  getindividualDetails(id) {
    return this.http.get(APIURL + 'individual/getindividualDetails?_id=' + id)
      .map(res => res.json())
      .catch(this.handleError)
  }

  // get individual health records 
  getHealthRecord(id) {
    return this.http.get(APIURL + 'individual/getHealthRecords?_id=' + id)
      .map(res => res.json())
      .catch(this.handleError)
  }

  //get medicine through prescription id
  getMedicine(id) {
    return this.http.get(APIURL + 'prescribeMedicine/getListByPrescriptionId?id=' + id)
      .map(res => res.json())
      .catch(this.handleError)
  }

  //get medicine list
  getMedicineList(medicine) {
    return this.http.get(APIURL + 'doctor/medicine?medicineName=' +medicine)
      .map(res => res.json())
      .catch(this.handleError)
  }

  //Update(edit) medicine detail
  updateMedicine(id) {
    return this.http.put(APIURL + 'prescribeMedicine/update', id)
      .map(res => res.json())
      .catch(this.handleError)
  }

  //get medicine list
  getDiagnosisById(id) {
    return this.http.get(APIURL + 'diagnosis/getSingle?diagnosisId=' + id)
      .map(res => res.json())
      .catch(this.handleError)
  }

  // get Single medicine Details through medicine id
  getSingleMedicineDetails(id) {
    return this.http.get(APIURL + 'prescribeMedicine/getSingle?prescribeMedicineId=' + id)
      .map(res => res.json())
      .catch(this.handleError)
  }

  // update diagnosis details
  updateDiagnosisDetail(data) {
    return this.http.put(APIURL + 'diagnosis/update', data)
      .map(res => res.json())
      .catch(this.handleError)
  }
  //get specific instruction by specificInstructionId
  getSpecificInstructionById(id) {
    return this.http.get(APIURL + 'specificInstruction/getSingle?specificInstructionId=' + id)
      .map(res => res.json())
      .catch(this.handleError)
  }
  //update specific instruction
  updateSpecificInstruction(data) {
    return this.http.put(APIURL + 'specificInstruction/update', data)
      .map(res => res.json())
      .catch(this.handleError)
  }

  // get Single advice followup Details through advice id
  getSingleFollowDetails(id) {
    return this.http.get(APIURL + 'advice/getSingle?adviceId=' + id)
      .map(res => res.json())
      .catch(this.handleError)
  }

  // get life style details
  getLifeStyleDetails(id) {
    return this.http.get(APIURL + 'lifeStyleInstruction/getSingle?lifeStyleId=' + id)
      .map(res => res.json())
      .catch(this.handleError)
  }


  // update advice details
  updateAdviceDetail(data) {
    return this.http.put(APIURL + 'advice/update', data)
      .map(res => res.json())
      .catch(this.handleError)
  }

  // update lifestyle details
  updateLifeStyleDetails(data) {
    return this.http.put(APIURL + 'lifeStyleInstruction/update', data)
      .map(res => res.json())
      .catch(this.handleError)
  }

  getSingleSuggest(id) {
    return this.http.get(APIURL + 'recommended/getSingle?recommendedId=' + id)
    .map(res => res.json())
    .catch(this.handleError)
  }

   // update suggest details
   updateSuggest(data) {
    return this.http.put(APIURL + 'recommended/update', data)
      .map(res => res.json())
      .catch(this.handleError)
  }
  // catch errors
  public handleError = (error: Response) => {
    return Observable.throw(error.json());
  };

  // delete diagnosis 
 deleteDiagnosis(id ,diagnosisId) {
  return this.http.delete(APIURL + 'diagnosis/delete?prescriptionId=' + id +'&diagnosisId=' +diagnosisId)
    .map(res => res.json())
    .catch(this.handleError)
}

 // delete followup 
 deleteFollowup(id ,adviceId) {
  return this.http.delete(APIURL + 'advice/delete?prescriptionId=' + id +'&adviceId=' +adviceId)
    .map(res => res.json())
    .catch(this.handleError)
}

// delete lifestyle
deleteLifestyle(id ,lifeStyleId) {
  return this.http.delete(APIURL + 'lifeStyleInstruction/delete?prescriptionId=' + id +'&lifeStyleId=' +lifeStyleId)
    .map(res => res.json())
    .catch(this.handleError)
}

// delete specific instructions
deleteSpecific(id ,specificInstructionId) {
  return this.http.delete(APIURL + 'specificInstruction/delete?prescriptionId=' + id +'&specificInstructionId=' +specificInstructionId)
    .map(res => res.json())
    .catch(this.handleError)
}


// delete recommended test
deleteSuggest(id ,recommendedId) {
  return this.http.delete(APIURL + 'recommended/delete?prescriptionId=' + id +'&recommendedId=' +recommendedId)
    .map(res => res.json())
    .catch(this.handleError)
}

// delete recommended test
deleteMedicine(id ,medicineId) {
  return this.http.delete(APIURL + 'prescribeMedicine/delete?prescriptionId=' + id +'&medicineId=' +medicineId)
    .map(res => res.json())
    .catch(this.handleError)
}
}