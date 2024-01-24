import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filterString:string): any {
    if(value.length===0){
      return value;
    }
  
    const data=[];
    for(const movies of value){
      if(movies['title']===filterString){
         data.push(movies)
      }
    }
    return data;
  }
}
