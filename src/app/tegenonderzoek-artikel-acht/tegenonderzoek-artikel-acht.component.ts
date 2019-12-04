import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tegenonderzoek-artikel-acht',
  templateUrl: './tegenonderzoek-artikel-acht.component.html',
  styleUrls: ['./tegenonderzoek-artikel-acht.component.css']
})
export class TegenonderzoekArtikelAchtComponent implements OnInit {

  @ViewChild('focusBvhVolgnummerField', { static: false }) searchElementBvhVolgnummerField: ElementRef;
  @ViewChild('focusGoedvolgnummerField', { static: false }) searchGoedvolgnummerField: ElementRef;

  tegenonderzoekArtikelAchtForm: FormGroup;
  eightWvwField: FormControl;
  eenheidscodeField: FormControl;
  bvhVolgnummerField: FormControl;
  goedvolgnummerField: FormControl;

  focusedBvhVolgnummer: boolean = false;
  focusedGoedvolgnummer: boolean = false;
  isDisabled: boolean = true;
  zero: number = 0;
  maxLength: number = 14;
  underscore: string = '_';
  completeInformation: string;


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
    })
  }

  ngOnInit() {
    this.eightWvwField =
      this.tegenonderzoekArtikelAchtForm.controls['eightWvwField'].value;
    this.eenheidscodeField =
      this.tegenonderzoekArtikelAchtForm.controls['eenheidscodeField'].value;
    this.bvhVolgnummerField =
      this.tegenonderzoekArtikelAchtForm.controls['bvhVolgnummerField'].value;
    this.goedvolgnummerField =
      this.tegenonderzoekArtikelAchtForm.controls['goedvolgnummerField'].value;
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
      + this.tegenonderzoekArtikelAchtForm.controls['eightWvwField'].value
      + this.underscore
      + this.tegenonderzoekArtikelAchtForm.controls['eenheidscodeField'].value
      + this.underscore
      + this.tegenonderzoekArtikelAchtForm.controls['bvhVolgnummerField'].value
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
    var variableAddLeadingZerosBvehVolgnummer = this.tegenonderzoekArtikelAchtForm.get('bvhVolgnummerField').setValue(
      this.addLeadingZerosbvehVolgnummer(this.tegenonderzoekArtikelAchtForm.controls['bvhVolgnummerField'].value));

    return variableAddLeadingZerosBvehVolgnummer;
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

  focusToInputBvhVolgnummer() {
    this.focusedBvhVolgnummer = !this.focusedBvhVolgnummer;
    this.tegenonderzoekArtikelAchtForm.controls.bvhVolgnummerField['enable']();
    this.searchElementBvhVolgnummerField.nativeElement.focus();
  }

  focusToInputGoedvolgnummer() {
    this.focusedGoedvolgnummer = !this.focusedGoedvolgnummer;
    this.tegenonderzoekArtikelAchtForm.controls.goedvolgnummerField['enable']();
    if (this.tegenonderzoekArtikelAchtForm.controls['bvhVolgnummerField'].value.length == this.maxLength) {
      console.log(this.tegenonderzoekArtikelAchtForm.controls['bvhVolgnummerField'].value);
      this.searchGoedvolgnummerField.nativeElement.focus();
    }
  }
}
