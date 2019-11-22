import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-overigebetalingenpolitie',
  templateUrl: './overigebetalingenpolitie.component.html',
  styleUrls: ['./overigebetalingenpolitie.component.css']
})
export class OverigebetalingenpolitieComponent implements OnInit {
  maxLength = 14;
  bestuurlijkeBoetesForm: FormGroup;
  eenheidscodeList = [
    'PL0100	Noord-Nederland',
    'PL0600	Oost-Nederland',
    'PL0900	Midden-Nederland',
    'PL1100	Noord-Holland',
    'PL1300	Amsterdam',
    'PL1500	Den Haag',
    'PL1700	Rotterdam',
    'PL2000	Zeeland Midden-West-Brabant',
    'PL2100	Oost-Brabant',
    'PL2300	Limburg',
    'PL2600	Landelijke eenheid',
    'PL2700	Koninklijke Marechaussee',
    'PL2800	Rijksrecherche inlichtingendienst'
  ];

  constructor(fb: FormBuilder) {
    this.bestuurlijkeBoetesForm = fb.group({
      bbField: fb.control('BB', [Validators.required]),
      eenheidscodeField: fb.control('', [Validators.required]),
      bvhVolgnummerField: fb.control('', [Validators.required, Validators.maxLength(this.maxLength), Validators.min(0)])
    })
  }

  submit() {
    this.bestuurlijkeBoetesForm.controls['bvhVolgnummerField'].setValue(this.addingLeadingZeros(this.bestuurlijkeBoetesForm.controls['bvhVolgnummerField'].value));
    this.bestuurlijkeBoetesForm.value;
    console.log(this.bestuurlijkeBoetesForm.value);
  }
 
  addingLeadingZeros(num) {
    var s = num + "";
    console.log("1: " + num)
    while (s.length < this.maxLength){
       s = "0" + s;
    }
    console.log("2: " + s);
    return s;
  }

  ngOnInit() {
  }

}
