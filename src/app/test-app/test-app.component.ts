import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>Hello {{name}}</h2>
      <strong>Alpha Numeric</strong>
      <form [formGroup]="employmentForm" novalidate>
        <input type="text" formControlName="price" name="price" 
        placeholder="Type @#$%^-*" />
        <div [style.color]="'orange'" 
        *ngIf="employmentForm.get('price').hasError('alphanumeric')">
          Validation error has occured.
        </div>
        <div [style.color]="'red'" 
        *ngIf="employmentForm.get('price').hasError('alphanumeric') && employmentForm.get('price').touched">
          Validation error has occured.
        </div>
      </form>
    </div>
  `,
})
export class TestAppComponent implements OnInit {
  name: string;
  employmentForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.name = `Angular! v${VERSION.full}`
  }
  ngOnInit() {
    this.employmentForm = this.fb.group({
      price: ['', [this.alphaNumeric("abc")]],
    });
  }

  alphaNumeric(allowedPhrase: string): ValidatorFn {
    return (c: FormControl): { [key: string]: boolean } | null => {
      if (c.value) {
        allowedPhrase = allowedPhrase ? allowedPhrase : '';
        let regEx = new RegExp(/^[a-zA-Z0-9]*$/);
        if (!regEx.test(c.value.replace(allowedPhrase.toUpperCase(), '').replace(allowedPhrase.toLowerCase(), ''))) {
          return { 'alphanumeric': true };
        }
      }
      return null;
    };
  };
}