import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchHealthRecord'
})
export class SearchHealthRecordPipe implements PipeTransform {

  transform(items:any[],field:string,value: any): any []{

    if(!items) return[];
    if(value == '') return items;
    return items.filter(it=>it[field].indexOf(value)>-1);
  }

}
