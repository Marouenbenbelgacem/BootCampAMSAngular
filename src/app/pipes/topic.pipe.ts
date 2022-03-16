import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topic'
})
export class TopicPipe implements PipeTransform {

  transform(value: string): string {
    return value[0].toUpperCase() + value.substr(1).toLowerCase();

  }

}
