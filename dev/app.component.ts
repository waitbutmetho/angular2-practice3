import {Component} from 'angular2/core';
import {TemplateFormDrivenComponent} from './template-driven-form.component';

@Component({
    selector: 'my-app',
    template: `
      Hello World
      <my-template-driven-form></my-template-driven-form>
      `,
    directives: [TemplateFormDrivenComponent],
})
export class AppComponent {

}
