import { Component, OnInit, Renderer, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-test-app',
  templateUrl: './test-app.component.html',
  styleUrls: ['./test-app.component.css']
})
export class TestAppComponent implements AfterViewInit {
  // @ViewChild('myInput', { static: false }) input: ElementRef;
  hallos = [
    'hallo',
    'dag',
    'tot ziens'
  ];

  constructor(private renderer: Renderer) { }

  ngAfterViewInit() {
    // this.renderer.invokeElementMethod(this.input.nativeElement,
    //   'focus');
  }

  onInputEntry(event, nextInput) {
    let input = event.target;
    console.log('event.target: ' + input.value);
    let length = input.value.length;
    console.log('input.value.length: ' + length);
    let maxLength = input.attributes.maxlength.value;
    console.log('input.attributes.maxlength.value: ' + maxLength);
    if (input) {
      nextInput.focus();
    }
  
    if (length >= maxLength) {
      nextInput.focus();
    }
  }

}
