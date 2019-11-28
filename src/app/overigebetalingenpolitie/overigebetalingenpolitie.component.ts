import { Component, OnInit, ElementRef, Input, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-overigebetalingenpolitie',
  templateUrl: './overigebetalingenpolitie.component.html',
  styleUrls: ['./overigebetalingenpolitie.component.css']
})
export class OverigebetalingenpolitieComponent implements OnInit, AfterViewInit {
  
  @ViewChild('focusNextField', { static: false }) searchElement: ElementRef;
  
  focused= false;
  zero = 0;
  maxLength = 14;
  bestuurlijkeBoetesForm: FormGroup;
  bbField;
  bvhVolgnummerField;
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

  constructor(
    fb: FormBuilder,
    public element: ElementRef<HTMLElement>
  ) {
    this.bestuurlijkeBoetesForm = fb.group({
      bbField: fb.control('BB', [Validators.required]),
      eenheidscodeField: fb.control('', [Validators.required]),
      bvhVolgnummerField: fb.control('', [
        Validators.required,
        Validators.maxLength(this.maxLength),
        Validators.minLength(0),
        Validators.nullValidator
      ]),
    })
  }

  ngOnInit() {
    this.bbField = this.bestuurlijkeBoetesForm.controls['bbField'].value;
    this.eenheidscodeField = this.bestuurlijkeBoetesForm.controls['eenheidscodeField'].value;
    this.bvhVolgnummerField = this.bestuurlijkeBoetesForm.controls['bvhVolgnummerField'].value;
  }

  ngAfterViewInit(): void {
    // ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked.
    if (this.focused) {
      setTimeout(() => this.element.nativeElement.focus(), 0);
    }
  }

  submit() {
    this.methodConcatEenheidscode();
    this.methodAddLeadingZerosbvehVolgnummer();
    console.log(this.bestuurlijkeBoetesForm.value);
    console.log(
      'De informatie moet als 1 veld naar IMS EV worden verzonden: '
      + this.bestuurlijkeBoetesForm.controls['bbField'].value
      + '-'
      + this.methodConcatEenheidscode()
      + '-'
      + this.bestuurlijkeBoetesForm.controls['bvhVolgnummerField'].value
    );
  }

  methodConcatEenheidscode() {
    var concatEenheidscode = this.bestuurlijkeBoetesForm.controls['eenheidscodeField'].value.substring(0, 6);
    return concatEenheidscode;
  }

  methodAddLeadingZerosbvehVolgnummer() {
    var variableAddLeadingZerosbvehVolgnummer = this.bestuurlijkeBoetesForm.controls['bvhVolgnummerField'].setValue(
      this.addLeadingZerosbvehVolgnummer(this.bestuurlijkeBoetesForm.controls['bvhVolgnummerField'].value)
    );
    return variableAddLeadingZerosbvehVolgnummer;
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

  checkOnlyDigits(input) {
    for (let i = input.length - 1; i >= 0; i--) {
      const d = input.charCodeAt(i);
      if (d < 48 || d > 57) return 0;
    }
    return input;
  }

  numberOnly(event){
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  focusToNextInput() {
    this.focused = !this.focused;
    this.searchElement.nativeElement.focus();
  }
}
