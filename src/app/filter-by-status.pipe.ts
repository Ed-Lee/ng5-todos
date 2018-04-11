import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByStatus'
})
export class FilterByStatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let status: string = args || 'all';
    console.log(`status: ${status}`);
    if (status.toLowerCase() === 'active') {
      return value.filter(
        todo => !todo.completed
      );
    } else if (status.toLowerCase() === 'completed') {
      return value.filter(
        todo => todo.completed
      )
    } else {
      return value;
    }
  }

}
