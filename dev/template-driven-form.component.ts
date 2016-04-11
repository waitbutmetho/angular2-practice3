import {Component} from 'angular2/core';

@Component({
  selector: 'my-template-driven-form',
  template: `
    <h2>Sign up form</h2>
    <form (ngSubmit)="onSumbit(f)" #f="ngForm">
      <div>
        <label for="email">Email</label>
        <input ngControl="email" type="text" id="email" required #email="ngForm">
        <span class="validation-error" *ngIf="!email.valid">Not Valid</span>
      </div>
      <div>
        <label for="password">Password</label>
        <input ngControl="password" type="text" id="password" required  #password="ngForm">
        <span class="validation-error" *ngIf="!password.valid">Not Valid</span>
      </div>
      <div>
        <label for="confirm-password">Confirm Password</label>
        <input ngControl="confirm-password" type="text" id="confirm-password" required  #confirmPassword="ngForm">
        <span class="validation-error" *ngIf="!confirmPassword.valid">Not Valid</span>
      </div>
      <button [disabled]="!f.valid || password.value !== confirmPassword.value" type="submit">Submit</button>
    </form>
    <h2>Thanks for your submission!</h2>
    <div>Email: {{user.mail}}</div>
    <div>Password: {{user.password}}</div>
  `
})

export class TemplateFormDrivenComponent {
  user = {
    mail: '',
    password: ''
  };

  onSumbit(form) {
    this.user.mail = form.value['email'];
    this.user.password = form.value['password'];
  }

}
