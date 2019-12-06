import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-overigebetalingenpolitie',
  templateUrl: './overigebetalingenpolitie.component.html',
  styleUrls: ['./overigebetalingenpolitie.component.css']
})
export class OverigebetalingenpolitieComponent implements OnInit, AfterViewInit {

  @ViewChild('focusNextField', { static: false }) searchElement: ElementRef;

  bestuurlijkeBoetesForm: FormGroup;
  bbField: FormControl;
  bvhVolgnummerField: FormControl;
  eenheidscodeField: FormControl;

  focused = false;
  isDisabled = true;
  zero = 0;
  maxLength = 14;
  underscore = '_';
  completeInformation: string;
  bbFieldValue = 'bbField';
  eenheidscodeFieldValue = 'eenheidscodeField';
  bvhVolgnummerFieldValue = 'bvhVolgnummerField';
  enableValue = 'enable';

  eenheidscodeList = [
    //   {code:'PL0100',region:'Noord-Nederland'},
    //   {code:'PL0600',region:'Oost-Nederland'},
    //   {code:'PL0900',region:'Midden-Nederland'},
    //   {code:'PL1100',region:'Noord-Holland'},
    //   {code:'PL1300',region:'Amsterdam'},
    //   {code:'PL1500',region:'Den Haag'},
    //   {code:'PL1700',region:'Rotterdam'},
    //   {code:'PL2000',region:'Zeeland Midden-West-Brabant'},
    //   {code:'PL2100',region:'Oost-Brabant'},
    //   {code:'PL2300',region:'Limburg'},
    //   {code:'PL2600',region:'Landelijke eenheid'},
    //   {code:'PL2700',region:'Koninklijke Marechaussee'},
    //   {code:'PL2800',region:'Rijksrecherche inlichtingendienst'},
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

  constructor(private element: ElementRef<HTMLElement>) {
    this.bestuurlijkeBoetesForm = new FormGroup({
      bbField: new FormControl('BB', [Validators.required]),
      eenheidscodeField: new FormControl('', [Validators.required]),
      bvhVolgnummerField: new FormControl({ value: '', disabled: this.isDisabled }, [
        Validators.required,
        Validators.maxLength(this.maxLength),
        Validators.minLength(0),
        Validators.nullValidator,
      ]),
    })
  }

  ngOnInit() {
    this.bbField =
      this.bestuurlijkeBoetesForm.controls[this.bbFieldValue].value;
    this.eenheidscodeField =
      this.bestuurlijkeBoetesForm.controls[this.eenheidscodeFieldValue].value;
    this.bvhVolgnummerField =
      this.bestuurlijkeBoetesForm.controls[this.bvhVolgnummerFieldValue].value;
  }

  ngAfterViewInit() {
    if (this.focused) {
      setTimeout(() => this.element.nativeElement.focus(), 0);
    }
  }

  submit() {
    this.methodAddLeadingZerosbvehVolgnummer();
    console.log(this.bestuurlijkeBoetesForm.value);
    this.completeInformation = 'Resultaat: '
      + this.bestuurlijkeBoetesForm.controls[this.bbFieldValue].value
      + this.underscore
      + this.bestuurlijkeBoetesForm.controls[this.eenheidscodeFieldValue].value
      + this.underscore
      + this.bestuurlijkeBoetesForm.controls[this.bvhVolgnummerFieldValue].value
  }

  numberOnly(event) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  methodAddLeadingZerosbvehVolgnummer() {
    var variableAddLeadingZerosBvehVolgnummer =
      this.addLeadingZerosbvehVolgnummer(this.bestuurlijkeBoetesForm.controls[this.bvhVolgnummerFieldValue].value);
    return this.bestuurlijkeBoetesForm.get(this.bvhVolgnummerFieldValue).setValue(variableAddLeadingZerosBvehVolgnummer);
  }

  addLeadingZerosbvehVolgnummer(num: any) {
    var s = num + '';
    // if (num.length <= 12) {
    //   s = '20' + num;
    // }
    while (s.length < this.maxLength) {
      s = this.zero + s;
    }
    return s;
  }

  focusToNextInput() {
    this.focused = !this.focused;
    this.bestuurlijkeBoetesForm.controls.bvhVolgnummerField[this.enableValue]();
    this.searchElement.nativeElement.focus();
  }
}
