import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  inputHint = 'What needs to be done?';
  todos: any[] = [];

  onEnter(inputElement) {
    this.todos.push(inputElement.value);
    inputElement.value = '';
  }

}
