import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(values: any[],query: string): any {
    if(!values) return [];
    if(!query) return values;

    return values.filter(i => {
       return i.question != null && i.question
          .toString()
          .toLowerCase()
          .includes(query.toLowerCase());
      }
    )
  }

}
