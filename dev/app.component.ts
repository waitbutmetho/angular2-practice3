import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>My name is {{onTest()}}</h1><br>

        <input class="{{'input1'}}" type="text" value="{{onTest()}}" (keyup)="onKeyup(inputEmlement.value)" #inputEmlement>
        <p>{{values}}</p>
        <br>
        <br>
        <input type='text' [(ngModel)]="name">
        <p>Your Name: {{name}}</p>
      `,
})
export class AppComponent {
  name = 'Josh';
  values='';

  onTest() {
    var firstName = 'Josh';
    var lastName = 'Gustafson';
    return firstName +" "+ lastName;
  }

  onKeyup(value: string) {
    this.values += value + ' | ';
  }
}
