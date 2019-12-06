import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-visumaanvragen',
  templateUrl: './visumaanvragen.component.html',
  styleUrls: ['./visumaanvragen.component.css']
})
export class VisumaanvragenComponent implements OnInit {

  visumaanvragenForm: FormGroup;
  visumKwitantieNummerField: FormControl;
  visumFieldValue = 'visumKwitantieNummerField';

  maxLength = 15;
  zero = 0;
  completeInformation: string;
  validPattern = '^[0-9a-zA-Z\-\']+';

  constructor() {
    this.visumaanvragenForm = new FormGroup({
      visumKwitantieNummerField: new FormControl(
        '', [
        Validators.required,
        Validators.maxLength(this.maxLength),
        Validators.nullValidator,
        Validators.pattern(this.validPattern),
      ])
    });
  }

  ngOnInit() {
    this.visumKwitantieNummerField =
      this.visumaanvragenForm.controls[this.visumFieldValue].value;
  }

  submit() {
    this.completeInformation = 'Resultaat: '
      + this.visumaanvragenForm.controls[this.visumFieldValue].value;
  }

  methodAddLeadingZeros() {
    const variableAddLeadingZeros =
      this.addLeadingZeros(this.visumaanvragenForm.controls[this.visumFieldValue].value);
    return this.visumaanvragenForm.get(this.visumFieldValue).setValue(variableAddLeadingZeros);
  }

  addLeadingZeros(num: any) {
    let s = num + '';
    while (s.length < this.maxLength) {
      s = this.zero + s;
    }
    return s;
  }
}
