import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todos.model';
import { borrar, editar, toggle } from '../todos.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todo!: Todo
  @ViewChild('inputFisico') textInpuntFisico!: ElementRef

  chkCompletado!: FormControl;
  textInput!: FormControl;

  editando: boolean = false

  constructor(private store: Store<AppState>) { 

    
  }
  
  ngOnInit(): void {
   //this.todo.completado = true
    this.chkCompletado = new FormControl(this.todo.completado);
    this.textInput = new FormControl ( this.todo.text, Validators.required)

    this.chkCompletado.valueChanges.subscribe( valor => { this.store.dispatch( toggle({id: this.todo.id}) )   })
    
  
    
  }

  public editar(){
    this.editando = true
    setTimeout(() => {
      
      this.textInpuntFisico.nativeElement.select()
    }, 1);
  }

  terminarEdicion(){
    this.editando = false
    if (this.textInput.invalid){return}
    else
    console.log(this.todo.id, this.textInput.value);

    
    this.store.dispatch(editar({
      id: this.todo.id,
      text: this.textInput.value
    })) 
    console.log(this.todo);
    
  }

  borrar(){
    this.store.dispatch(borrar({id : this.todo.id}));
  }

}
