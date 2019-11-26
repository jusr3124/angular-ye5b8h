import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-overigebetalingenpolitie',
  templateUrl: './overigebetalingenpolitie.component.html',
  styleUrls: ['./overigebetalingenpolitie.component.css']
})
export class OverigebetalingenpolitieComponent implements OnInit {
  zero = 0;
  maxLength = 14;
  bestuurlijkeBoetesForm: FormGroup;
  bbField;
  bvehVolgnummerField;
  eenheidscodeField;
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
      bvehVolgnummerField: fb.control('', [
        Validators.required,
        Validators.maxLength(this.maxLength),
        Validators.minLength(1)
      ]),
    })
  }

  submit() {
    this.bestuurlijkeBoetesForm.controls['eenheidscodeField'].setValue(
      this.bestuurlijkeBoetesForm.controls['eenheidscodeField'].value.substring(0, 6)
    );
    this.bestuurlijkeBoetesForm.controls['bvehVolgnummerField'].setValue(
      this.addLeadingZerosbvehVolgnummer(this.bestuurlijkeBoetesForm.controls['bvehVolgnummerField'].value)
    );
    console.log(this.bestuurlijkeBoetesForm.value);
  }

  concatEenheidscode() {
    this.bestuurlijkeBoetesForm.controls['eenheidscodeField'].value.substring(0, 6);
  }

  addLeadingZerosbvehVolgnummer(num: any) {
    if (num == null || num == 'null') {
      num = '0';
      this.addLeadingZerosbvehVolgnummer(num);
    }
    var checkOnlyDigits = this.checkOnlyDigits(num);
    var s = checkOnlyDigits + '';
    while (s.length < this.maxLength) {
      s = this.zero + s;
    }
    return s;
  }

  checkOnlyDigits(input: string) {
    for (let i = input.length - 1; i >= 0; i--) {
      const d = input.charCodeAt(i);
      if (d < 48 || d > 57) return 0;
    }
    return input;
  }

  ngOnInit() {
    this.bbField = this.bestuurlijkeBoetesForm.controls['bbField'].value;
    this.eenheidscodeField = this.bestuurlijkeBoetesForm.controls['eenheidscodeField'].value;
    this.bvehVolgnummerField = this.bestuurlijkeBoetesForm.controls['bvehVolgnummerField'].value;
  }
}
