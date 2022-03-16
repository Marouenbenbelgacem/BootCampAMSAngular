import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  students:string[]=["person1","person2","person3"];

  constructor() { }

  getStudent():string[]{

    return this.students
  }
}
