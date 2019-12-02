import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tegenonderzoek-artikel-acht',
  templateUrl: './tegenonderzoek-artikel-acht.component.html',
  styleUrls: ['./tegenonderzoek-artikel-acht.component.css']
})
export class TegenonderzoekArtikelAchtComponent implements OnInit {

  @ViewChild('focusNextField', {
    static: false
  }) searchElement: ElementRef;

  tegenonderzoekArtikelAchtForm: FormGroup;

  focused = false;
  isDisabled = true;
  zero = 0;
  maxLength = 14;
  underscore = '_';

  eightWvwField;
  bvhVolgnummerField;
  eenheidscodeField;
  completeInformation;
  goedvolgnummerField;

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
      goedvolgnummerField: new FormControl({ value: '', disabled: this.isDisabled }),
    })
  }

  ngOnInit() {
    this.eightWvwField =
      this.tegenonderzoekArtikelAchtForm.controls['eightWvwField'].value;
    this.eenheidscodeField =
      this.tegenonderzoekArtikelAchtForm.controls['eenheidscodeField'].value;
    this.bvhVolgnummerField =
      this.tegenonderzoekArtikelAchtForm.controls['bvhVolgnummerField'].value;
  }

  ngAfterViewInit() {
    if (this.focused) {
      setTimeout(() => this.element.nativeElement.focus(), 0);
    }
  }

  submit() {
    // this.methodConcatEenheidscode();
    this.methodAddLeadingZerosbvehVolgnummer();
    console.log(this.tegenonderzoekArtikelAchtForm.value);
    this.completeInformation = 'Resultaat: '
      + this.tegenonderzoekArtikelAchtForm.controls['bbField'].value
      + this.underscore
      + this.tegenonderzoekArtikelAchtForm.controls['eenheidscodeField'].value
      + this.underscore
      + this.tegenonderzoekArtikelAchtForm.controls['bvhVolgnummerField'].value
  }

  numberOnly(event) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  methodAddLeadingZerosbvehVolgnummer() {
    var variableAddLeadingZerosbvehVolgnummer = this.tegenonderzoekArtikelAchtForm.controls['bvhVolgnummerField'].setValue(
      this.addLeadingZerosbvehVolgnummer(this.tegenonderzoekArtikelAchtForm.controls['bvhVolgnummerField'].value)
    );
    return variableAddLeadingZerosbvehVolgnummer;
  }

  addLeadingZerosbvehVolgnummer(num: any) {
    var s = num + '';
    if (!num.startsWith('20')) {
      if (num.length == 12) {
        s = '20' + num;
      }
    }
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

  focusToNextInput() {
    this.focused = !this.focused;
    this.disablingFields();
    this.searchElement.nativeElement.focus();
  }

  disablingFields() {
    this.isDisabled = !this.isDisabled;
    this.tegenonderzoekArtikelAchtForm.controls.bvhVolgnummerField['enable']();
    this.tegenonderzoekArtikelAchtForm.controls.goedvolgnummerField['enable']();
  }
}
