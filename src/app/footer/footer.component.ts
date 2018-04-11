import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnChanges {

  private _todos: ITodoModel[];
  @Input()
  set todos(value: ITodoModel[]) {
    this._todos = value;
    this.styleObj = this.getLeftCount(this.todos) < 3 ? {} : {'color': 'red', 'font-weight': 'bold'};
  }
  get todos(): ITodoModel[] {
    return this._todos
  }

  @Output() clearCompleted: EventEmitter<boolean> = new EventEmitter<boolean>();

  styleObj = {};


  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes); //不知道為什麼currentValue = previousValue ????
    // if (changes['todos']) {
    //   let todosObj = changes['todos'];
    //   console.log('pre' + JSON.stringify(changes['todos'].previousValue));
    //   console.log(JSON.stringify(changes['todos'].currentValue));
    //   if (JSON.stringify(todosObj.currentValue) !== JSON.stringify(todosObj.previousValue)) {
    //     this.styleObj = todosObj.currentValue.length < 3 ? {} : {'color': 'red', 'font-weight': 'bold'};
    //     console.log(this.styleObj);
    //   }
    // }
  }
  getLeftCount(todos: ITodoModel[]) {
    return todos.filter(todo => !todo.completed).length;
  }

  onClearCompleted(clear: boolean) {
    this.clearCompleted.emit(clear);
  }
}
