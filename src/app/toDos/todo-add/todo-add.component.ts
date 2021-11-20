import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todos.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  public txtImput: FormControl

  constructor(private store: Store<AppState>) {
    this.txtImput = new FormControl('', Validators.required)

   }

  ngOnInit(): void {
  }

  public agregar(){

    if(this.txtImput.invalid){return}

    this.store.dispatch(actions.createToDo({texto: this.txtImput.value}))

   this.txtImput.reset()
    

  }

}
