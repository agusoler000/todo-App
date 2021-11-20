import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos, setFiltro } from 'src/app/filtro/filtro.actions';
import { limpiarCompletados } from '../todos.actions';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  filtroActual: filtrosValidos = 'todos'
  filtros: filtrosValidos[] = [ 'todos','completados', 'pendientes']
  pendientes: number = 0

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    // this.store.select("filtro").subscribe(filtro => {
    //   console.log(filtro);
    //   this.filtroActual = filtro
    // })

    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter( todo => !todo.completado).length

    })
  }

  cambiarFiltro( filtro: filtrosValidos | string ){
    console.log(filtro);

    this.store.dispatch(setFiltro({filtro: filtro}))
    
  }

  limpiar(){
    this.store.dispatch(limpiarCompletados())
  }

}
