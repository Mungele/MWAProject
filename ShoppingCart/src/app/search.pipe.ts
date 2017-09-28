//@Author: John Masamalo
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(value: string, args?: string): boolean {
    let product:string = value.toLowerCase();
    let filter:string = args.toLowerCase();
    return product.indexOf(filter) >= 0;
  }

}
