import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  inputHint = 'What needs to be done?';
  todos: any[] = [];
  todo: string;

  onEnter(inputElement) {
    this.todos.push(inputElement.value);
    inputElement.value = '';
  }

  add(todo: string) {
    this.todos.push(todo);
    this.todo = '';
  }

}
