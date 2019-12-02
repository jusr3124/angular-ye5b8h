import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatFirstSixChar'
})
export class ConcatFirstSixCharPipe implements PipeTransform {

  transform(input: string, char: number): string {
    return input.substring(0, char);
  }

}
