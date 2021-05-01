import { Book } from './book';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(value: Book[], filterText: string): Book[]  {
    filterText = filterText? filterText.toLocaleLowerCase() : "";
    return filterText ? value.filter((b: Book) => b.name.toLocaleLowerCase().indexOf(filterText) !== -1  ) : value;
  }

}
