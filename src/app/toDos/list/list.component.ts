import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos } from 'src/app/filtro/filtro.actions';
import { Todo } from '../models/todos.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  public todos:Todo[] = [];
  public filtroActual!: filtrosValidos

  constructor(private store: Store<AppState>) { 

    

  }

  ngOnInit(): void {

    //this.store.select('todos').subscribe(todos => this.todos = todos)
    this.store.subscribe( state => {

      this.todos = state.todos
      this.filtroActual = state.filtro
    })

  }

}
