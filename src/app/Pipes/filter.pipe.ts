import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filterString:string): any {
    return value.filter(function(search) {
      return search.title.toLowerCase().indexOf(filterString.toLowerCase()) > -1
    })
  }
}
