import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatUnit'
})
export class ConcatUnitPipe implements PipeTransform {

  transform(value: any): String {
    if (value) {
		const rest = (4 - value.toString().length);
		let valueString = ''
		for (let i=1; i<=rest; i++) {
			valueString += "0";
		}
		valueString += value.toString();
		return valueString;
	}
	return '';
  }

}
