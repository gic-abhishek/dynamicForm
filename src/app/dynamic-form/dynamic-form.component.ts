import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  controls:any
  form: FormGroup = new FormGroup({

  })

  showForm: boolean=false;

  data =  {
    "newData":'jiji',
    "CompDocMatch": ['hello','rahul'
    ],
    "Document List": [
      {
        "Field": "5",
        "Value": [
          "Pan Card (As per Document)"
        ]
      },
      {
        "Field": "4",
        "Value": [
          "Passport (As per Document)"
        ]
      },
      {
        "Field": "3",
        "Value": [
          "Driving License (As per Document)"
        ]
      },
      {
        "Field": "2",
        "Value": [
          "Voter ID (As per Document)"
        ]
      },
      {
        "Field": "1",
        "Value": [
          "Passport - Non MRZ"
        ]
      }
    ],
    "Expected Data": [
      {
        "Field": "Execution SubComponent",
        "Value": [
          "Pan Card Verification"
        ]
      },
      {
        "Field": "CountOfDocumenttoInclude",
        "Value": [
          "2"
        ]
      },
      {
        "Field": "Do we Need to Check Prefrences",
        "Value": [
          "No"
        ]
      },
      {
        "Field": "Include Documents",
        "Value": [
          "Passport (As per Document)"
        ]
      }
    ],
    "Dummy Record": [
      {
        "AadhaarCard": [
          {
            "Building Number Name": "",
            "City": "",
            "Country": "",
            "DOB": "",
            "Family Last Name": "",
            "First Name": "",
            "Gender": "",
            "House Flat Number": "",
            "Is the document clear": "",
            "Landmark": "",
            "Last Name": "",
            "Middle Name": "",
            "Postal Zip Code Pin Code": "",
            "State": "",
            "State Hub location": "",
            "Street Name Lane Name": "",
            "Document Investigation": "Document Investigation",
            "Aadhaar Card": "Aadhaar Card"
          }
        ],
        "DrivingLicence": [
          {
            "Building Number Name": "",
            "City": "Not Applicable",
            "Country": "India",
            "DOB": "",
            "Date of Expiry": "",
            "Doc Identification No": "",
            "First Name": "",
            "House Flat Number": "",
            "Is the document clear": "",
            "Issue Date": "",
            "Landmark": "",
            "Last Name": "",
            "Middle Name": "",
            "Place of Issue": "",
            "Postal Zip Code Pin Code": "",
            "State": "NA",
            "Street Name Lane Name": "",
            "Driving Licence": "Driving license"
          }
        ],
        "PanCard": [
          {
            "DOB": "",
            "Doc Identification No": "",
            "First Name": "",
            "Is the document clear": "",
            "Last Name": "",
            "Middle Name": "",
            "Pan card Verification": "Pan card Verification"
          }
        ],
        "Passport": [
          {
            "Display_Name": "",
            "Birth City": "",
            "Birth State": "",
            "Building Number Name": "",
            "City": "",
            "Country": "",
            "DOB": "",
            "Date of Expiry": "",
            "Date of Issue": "",
            "Doc Identification No": "",
            "Family Last Name": "",
            "First Name": "",
            "Gender": "",
            "House Flat Number": "",
            "Is the document clear": "",
            "Landmark": "",
            "Last Name": "",
            "Machine Readable Zone": "",
            "Machine readable zone line - 1": "",
            "Machine readable zone line - 2": "",
            "Middle Name": "",
            "Nationality": "",
            "Place of Issue": "",
            "Place of residence shown": "",
            "Postal Zip Code Pin Code": "",
            "State": "",
            "Street Name Lane Name": "",
            "Passport Investigation": "Passport Investigation",
            "Passport-MRZ": "Passport-MRZ"
          }
        ],
        "VotersID": [
          {
            "Assembly name As per ID": "",
            "Building Number Name": "",
            "City": "",
            "Country": "",
            "DOB": "",
            "Doc Identification No": "",
            "First Name": "",
            "Gender": "",
            "House Flat Number": "",
            "Is the document clear": "",
            "Landmark": "",
            "Last Name": "",
            "Middle Name": "",
            "Postal Zip Code Pin Code": "",
            "State": "",
            "Street Name Lane Name": "",
            "Document Investigation": "Document Investigation",
            "Voters ID": "Voters ID"
          }
        ]
      }
    ]
  }

  dynamicForm: FormGroup = new FormGroup({
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.readData(this.data);
    this.generateForm() 
    console.log(this.dynamicForm)
    console.log(this.dynamicForm.value)
  }

  //for dynamic form for nested JSON
  generateForm(){
    this.dynamicForm = this.createForm(this.data);
    console.log("this.dynamicForm ================= ",this.dynamicForm?.value)
  }
  createForm(data:any) {
    let dForm: FormGroup = this.fb.group({});
    for (let key in data) {
      if (Array.isArray(data[key]) && typeof(data[key]) != 'string' && data[key] != null){
        dForm.addControl(key, this.fb.array([]));
        let formArr = (dForm?.get(key) as FormArray);  

        formArr.push(this.createForm(data[key]))
      } else if(!Array.isArray(data[key]) && Object.keys(data[key]).length > 1 && typeof(data[key]) != 'string' && data[key] != null){
        dForm.addControl(key, new FormControl(this.createForm(data[key])));
      } else if(!Array.isArray(data[key]) && data[key] != undefined && data[key] != null){
        dForm.addControl(key, new FormControl(data[key]));
      }
    }
   
    return dForm

  
  }


  obj = []

  getFromControls(){
    return (this.form.get('Expected Data') as FormArray).controls;
  }

  readData(data: any) {
    if (typeof data === 'object' && !Array.isArray(data)) {
      let objArry = Object.keys(data)
      objArry.forEach((key) => {
        if (typeof data[key] === 'object' && !Array.isArray(data[key])) {
          this.newFromGroupObject(key, data[key])
          // this.form.addControl(key,new FormArray([]))
        }
        else if (Array.isArray(data[key])) {
          this.form.addControl(key, this.fb.array([]))
          this.newFormArray(key, data[key])
        }
        else  {
          this.form.addControl(key, new FormControl(data[key]))
        }
      });
    }
    console.log(this.form)
    console.log(this.form.value)
    console.log(this.form.controls)
    this.controls = this.form.controls

    this.showForm=true;
  }

  getAllControls(controlName:any) {    
    // console.log()
    return (this.form.get(controlName) as FormArray).controls;
  }

  getNextXontrols(controlName:any,index:any){

    //console.log(controlName)
    return (this.form.get(controlName) as FormArray).controls;
  }
  getControls(control:any,key:any){
  //console.log(this.form.controls[key].value) 
 if (typeof this.form.controls[key].value === 'object' && !Array.isArray(this.form.controls[key].value)) {
   //console.log('object')
  return 'object'
 }
 else if(Array.isArray(this.form.controls[key].value)){
  //console.log('array')
  return 'array'
 }
 else{
  //console.log('string')
  return 'string'
 }
// console.log("HTML value : ",control[key])
// console.log("HTML key : ",key)


  }

  newFromGroupObject(keyName: any, keyData: any) {
    let objArryCheck:any = Object.keys(keyData)
    this.form.addControl(keyName,new FormGroup({}))
    objArryCheck.forEach((item:any, index:any) => {
    
      if (typeof keyData[item] === 'object' && !Array.isArray(keyData[item])) {
        this.newFromGroupObject(item, keyData[item])
        // this.form.addControl(key,new FormArray([]))
      }
      else if (Array.isArray(keyData[item])) {
        this.form.addControl(item, this.fb.array([]))
        this.newFormArray(item, keyData[item])
      }

      else {
        let accessFromGroup= <FormGroup>this.form.controls[keyName]
        accessFromGroup.addControl(item,new FormControl(keyData[item]))
       }
    });

  }

  newFormArray(keyName: any, keyData: any) {
    keyData.forEach((el: any, index: any) => {
      if (typeof el === 'object' && !Array.isArray(el)) {
     
        let objArry = Object.keys(el)
        let newFormArryNew = <FormArray>this.form.controls[keyName]
        newFormArryNew.push(this.fb.group({}));
        objArry.forEach((x) => {
          if (typeof el[x] === 'object' && !Array.isArray(el[x])) {
            let newGroup = newFormArryNew.controls[index] as FormGroup;
            newGroup.addControl(x, new FormControl(el[x]))
          }
          else if (Array.isArray(el[x])) {
            let NewDataArray = newFormArryNew.controls[index] as FormGroup
            NewDataArray.addControl(x, new FormArray([]))
            el[x].forEach((y: any, indexNew: any) => {

              if (typeof y === 'object' && !Array.isArray(y)) {
                let objArryNew = Object.keys(y)
                let newFormArryNew2 = NewDataArray.controls[x] as FormArray
                newFormArryNew2.push(this.fb.group({}))
                let newFromGroup = newFormArryNew2.controls[indexNew] as FormGroup
                objArryNew.forEach((objData: any, indexValue: any) => {

                  newFromGroup.addControl(objData, new FormControl(y[objData]))

                })

              } else if (Array.isArray(y)) {

              } else if (typeof y === 'string') {
                // console.log(y)
                let newFormArryNew1 = newFormArryNew.controls[index] as FormGroup
                let temp = <FormArray>newFormArryNew1.controls[x]
                temp.push(new FormControl(y));
              }
            })
          }
          else {
            let newGroup = newFormArryNew.controls[index] as FormGroup;
            newGroup.addControl(x, new FormControl(el[x]))
          }
        })
      }
      else if(Array.isArray(el)){
this.newFormArray(keyName, el)
      }
      else{
       let accessFromGroup = <FormArray>this.form.controls[keyName]
       accessFromGroup.push(new FormControl(el));
      }
    })
  }

  formDataSubmit(){
    console.log(this.form)
  }

}
