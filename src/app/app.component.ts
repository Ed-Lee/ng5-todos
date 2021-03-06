import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  inputHint = 'What needs to be done?';
  todos: ITodoModel[] = new Array<ITodoModel>();
  todoCounter: number = 0;
  todo: string;
  filterStatus = 'all';

  onEnter(inputElement) {
    this.todos.push(inputElement.value);
    inputElement.value = '';
  }

  add(todo: string) {
    let item: ITodoModel = {
      id: this.todoCounter++,
      name: todo,
      completed: false
    };
    this.todos.push(item);
    this.todos = [...this.todos];
    this.todo = '';
  }

  remove(item: ITodoModel) {
    this.todos = [...this.todos.filter(
      todo => todo.id != item.id
    )];
  }

  toggleCheckbox(item: ITodoModel) {
    item.completed = !item.completed;
    this.todos = [...this.todos];
  }

  doClearCompleted(event: boolean) {
    if (event) {
      this.todos = this.todos.filter(
        todo => !todo.completed
      );
    }
  }

  setFilterStatus(status) {
    this.filterStatus = status;
  }

}
