import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  form: FormGroup = new FormGroup({

  })

  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
    this.readData(this.data)
    console.log(this.form)
    console.log(this.form.value)
  }

obj=[]

  readData(data:any){

     if(typeof data === 'object' && !Array.isArray(data) ){ 
       let objArry=Object.keys(data)

      objArry.forEach((key)=> {
       
        const obj ={keyName:key,keyValue:data[key]}
        if(typeof data[key] === 'object' && !Array.isArray(data)){
          this.form.addControl(key,new FormArray([]))
        }
       if(Array.isArray(data[key])){
        console.log('arrry check')
        this.form.addControl(key,this.fb.array([]))
        this.newFormArrat(key,data[key])
       
       }
    });
     }
  }

  newFormArrat(keyName:any,keyData:any){
    keyData.forEach((el:any,index:any)=>{
      if(typeof el === 'object' && !Array.isArray(el) ){ 
        let objArry=Object.keys(el)
        let newFormArryNew=<FormArray>this.form.controls[keyName]
        newFormArryNew.push(this.fb.group({}));
        objArry.forEach((x)=> {
          if(typeof el[x] === 'object' && !Array.isArray(el[x])){
            let newGroup= newFormArryNew.controls[index] as FormGroup;
            newGroup.addControl(x,new FormControl(el[x]))
          }
         else if(Array.isArray(el[x])){
        let NewDataArray=newFormArryNew.controls[index] as FormGroup 
        NewDataArray.addControl(x,new FormArray([]))
        console.log(el[x])
          el[x].forEach((y:any,indexNew:any)=> {
             if(typeof y === 'object' && !Array.isArray(y)){
              let objArryNew=Object.keys(y)
              // console.log(y)
              objArryNew.forEach((objData:any,indexValue:any)=> {
                
                let newFormArryNew2=NewDataArray.controls[x] as FormArray
              
              newFormArryNew2.push(new FormControl())
            // console.log(newDataNew1)
            
                // newDataNew1.addControl(objData,new FormControl(y[objData]))
                // let temp=newFormArryNew1.controls[x] as FormGroup  
                // console.log(temp)

                // temp.addControl(objData,new FormControl(y[objData]));
              })
            // let newFormArryNew1=newFormArryNew.controls[index] as FormGroup  
            // let temp=<FormArray>newFormArryNew1.controls[x]
            // temp.push(new FormControl(y));
          }else if(Array.isArray(y)){
            console.log(y)
            // let newFormArryNew1=newFormArryNew.controls[index] as FormGroup  
            // let temp=<FormArray>newFormArryNew1.controls[x]
            // temp.push(new FormControl(y));
          }else if(typeof y === 'string'){
          
            let newFormArryNew1=newFormArryNew.controls[index] as FormGroup  
           let temp=<FormArray>newFormArryNew1.controls[x]
           temp.push(new FormControl(y));
          }
          })        
         }
         else{
          let newGroup= newFormArryNew.controls[index] as FormGroup;
            newGroup.addControl(x,new FormControl(el[x]))
         }
       
      
        })
      }
      
       
    })

  }

  data={
    "CompDocMatch": [
      {
        "ComponentName": "Pan card Verification",
        "DocumentSection": "Pan Card (As per Document)"
      },
      {
        "ComponentName": "Driving license",
        "DocumentSection": "Driving License (As per Document)"
      },
      {
        "ComponentName": "Passport Investigation",
        "DocumentSection": "Passport (As per Document)"
      },
      {
        "ComponentName": "Document Investigation",
        "DocumentSection": "Voter ID (As per Document)"
      },
      {
        "ComponentName": "Document Investigation",
        "DocumentSection": "Aadhaar Card (As per Document)"
      }
    ],
    "Document List": [
      {
        "Field": "5",
        "Value": [
          "Pan Card (As per Document)","hello"
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
          "Voters ID"
        ]
      },
      {
        "Field": "CountOfDocumenttoInclude",
        "Value": [
          "1"
        ]
      },
      {
        "Field": "Do we Need to Check Prefrences",
        "Value": [
          "Yes"
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
}
