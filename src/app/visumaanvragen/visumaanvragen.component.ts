import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-visumaanvragen',
  templateUrl: './visumaanvragen.component.html',
  styleUrls: ['./visumaanvragen.component.css']
})
export class VisumaanvragenComponent implements OnInit {

  visumaanvragenForm: FormGroup;
  visumKwitantieNummerField: FormControl;

  maxLength: any = 15;
  zero: number = 0;
  completeInformation: string;

  constructor() {
    this.visumaanvragenForm = new FormGroup({
      visumKwitantieNummerField: new FormControl(
        '', [
        Validators.required,
        Validators.maxLength(this.maxLength),
        Validators.nullValidator,
        Validators.pattern('^[0-9a-zA-Z \-\']+'),
      ])
    })
  }

  ngOnInit() {
    this.visumKwitantieNummerField =
      this.visumaanvragenForm.controls['visumKwitantieNummerField'].value;
  }

  submit() {
    this.completeInformation = 'Resultaat: '
      + this.visumaanvragenForm.controls['visumKwitantieNummerField'].value;
  }

  methodAddLeadingZeros() {
    var variableAddLeadingZeros =
      this.addLeadingZeros(this.visumaanvragenForm.controls['visumKwitantieNummerField'].value);
    return this.visumaanvragenForm.get('visumKwitantieNummerField').setValue(variableAddLeadingZeros);
  }

  addLeadingZeros(num: any) {
    var s = num + '';
    while (s.length < this.maxLength) {
      s = this.zero + s;
    }
    return s;
  }
}

