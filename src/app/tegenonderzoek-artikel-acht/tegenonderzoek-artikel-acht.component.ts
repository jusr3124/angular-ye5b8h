import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-tegenonderzoek-artikel-acht',
  templateUrl: './tegenonderzoek-artikel-acht.component.html',
  styleUrls: ['./tegenonderzoek-artikel-acht.component.css']
})
export class TegenonderzoekArtikelAchtComponent implements OnInit, AfterViewInit {

  @ViewChild('focusBvhVolgnummerField', { static: false }) searchElementBvhVolgnummerField: ElementRef;
  @ViewChild('focusGoedvolgnummerField', { static: false }) searchGoedvolgnummerField: ElementRef;

  tegenonderzoekArtikelAchtForm: FormGroup;
  eightWvwField: FormControl;
  eenheidscodeField: FormControl;
  bvhVolgnummerField: FormControl;
  goedvolgnummerField: FormControl;

  focusedBvhVolgnummer = false;
  focusedGoedvolgnummer = false;
  isDisabled = true;
  zero = 0;
  maxLength = 14;
  underscore = '_';
  completeInformation: string;
  eightWvwFieldValue = 'eightWvwField';
  eenheidscodeFieldValue = 'eenheidscodeField';
  bvhVolgnummerFieldValue = 'bvhVolgnummerField';
  goedvolgnummerFieldValue = 'goedvolgnummerField';
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
    'PL0100 Noord-Nederland',
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

  constructor(private element: ElementRef<HTMLElement>
  ) {
    this.tegenonderzoekArtikelAchtForm = new FormGroup({
      eightWvwField: new FormControl('8 WvW', [Validators.required]),
      eenheidscodeField: new FormControl('', [Validators.required]),
      bvhVolgnummerField: new FormControl(
        { value: '', disabled: this.isDisabled },
        [Validators.required,
        Validators.maxLength(this.maxLength),
        Validators.minLength(0),
        Validators.nullValidator
        ]),
      goedvolgnummerField: new FormControl(
        { value: '', disabled: this.isDisabled },
        [Validators.maxLength(2)]
      ),
    });
  }

  ngOnInit() {
    this.eightWvwField =
      this.tegenonderzoekArtikelAchtForm.controls[this.eightWvwFieldValue].value;
    this.eenheidscodeField =
      this.tegenonderzoekArtikelAchtForm.controls[this.eenheidscodeFieldValue].value;
    this.bvhVolgnummerField =
      this.tegenonderzoekArtikelAchtForm.controls[this.bvhVolgnummerFieldValue].value;
    this.goedvolgnummerField =
      this.tegenonderzoekArtikelAchtForm.controls[this.goedvolgnummerFieldValue].value;
  }

  ngAfterViewInit() {
    if (this.focusedBvhVolgnummer) {
      setTimeout(() => this.element.nativeElement.focus(), 0);
    }
  }

  submit() {
    this.methodAddLeadingZerosbvehVolgnummer();
    console.log(this.tegenonderzoekArtikelAchtForm.value);
    this.completeInformation = 'Resultaat: '
      + this.tegenonderzoekArtikelAchtForm.controls[this.eightWvwFieldValue].value
      + this.underscore
      + this.tegenonderzoekArtikelAchtForm.controls[this.eenheidscodeFieldValue].value
      + this.underscore
      + this.tegenonderzoekArtikelAchtForm.controls[this.bvhVolgnummerFieldValue].value;
    // + this.underscore
    // + this.tegenonderzoekArtikelAchtForm.controls['goedvolgnummerField'].value
  }

  numberOnly(event) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  methodAddLeadingZerosbvehVolgnummer() {
    const variableAddLeadingZerosBvehVolgnummer = this.tegenonderzoekArtikelAchtForm.get(this.bvhVolgnummerFieldValue).setValue(
      this.addLeadingZerosbvehVolgnummer(this.tegenonderzoekArtikelAchtForm.controls[this.bvhVolgnummerFieldValue].value));

    return variableAddLeadingZerosBvehVolgnummer;
  }

  addLeadingZerosbvehVolgnummer(num: any) {
    let s = num + '';
    // if (num.length <= 12) {
    //   s = '20' + num;
    // }
    while (s.length < this.maxLength) {
      s = this.zero + s;
    }
    return s;
  }

  focusToInputBvhVolgnummer() {
    this.focusedBvhVolgnummer = !this.focusedBvhVolgnummer;
    this.tegenonderzoekArtikelAchtForm.controls.bvhVolgnummerField[this.enableValue]();
    this.searchElementBvhVolgnummerField.nativeElement.focus();
  }

  focusToInputGoedvolgnummer() {
    this.focusedGoedvolgnummer = !this.focusedGoedvolgnummer;
    this.tegenonderzoekArtikelAchtForm.controls.goedvolgnummerField[this.enableValue]();
    if (this.tegenonderzoekArtikelAchtForm.controls[this.bvhVolgnummerFieldValue].value.length == this.maxLength) {
      console.log(this.tegenonderzoekArtikelAchtForm.controls[this.bvhVolgnummerFieldValue].value);
      this.searchGoedvolgnummerField.nativeElement.focus();
    }
  }
}
