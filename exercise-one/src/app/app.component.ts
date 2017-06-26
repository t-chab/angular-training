import {Component} from "@angular/core";

interface IUser {
  name: string;
  firstName: string;
  age: number;
  sex: 'MALE' | 'FEMALE';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  waitTime: 5000;
  users: IUser[] = <IUser[]>[];

  constructor() {
    const numbers = [0, 1, 2, 3];
    setTimeout(() => {
      for (const i of numbers) {
        const user: IUser = {
          name: 'Name' + i,
          firstName: 'FirstName' + i,
          age: Math.floor(Math.random() * 100) + 1,
          sex: Math.abs(i % 2) === 1 ? 'MALE' : 'FEMALE'
        };
        this.users[i] = user;
      }
    }, this.waitTime);
  }

  updateUserAge(user: IUser, age: number) {
    user.age = age;
  }
}
