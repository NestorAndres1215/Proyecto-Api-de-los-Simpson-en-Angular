import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { SimpsonService } from 'src/app/service/simpson.service';
@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css']
})
export class SimpsonComponent implements OnInit {

  Nombre: string = '';
  personajes: any[] =[];

  constructor(private simpsonService: SimpsonService) { }

  ngOnInit() {
    this.simpsonService.getPersonajes().subscribe(data => {
      this.personajes = data;
    });
  }
  buscarPorNombre() {
    try {
      if (this.Nombre ) {
        this.personajes = this.personajes.filter((personajes: any) =>
        personajes.nombre.toLowerCase().includes(this.Nombre.toLowerCase()) 
    
        );
      } else {
        this.restaurar();
        console.log("Ingrese un nombre o RUC para buscar.");
      }
    } catch (error) {
      console.log("Error en la búsqueda: ", error);
      // Realizar acciones de manejo de errores, como mostrar un mensaje al usuario
    }
  }
  restaurar() {
    this.Nombre = ''; // Restablecer el valor del nombre a vacío
   
    this.simpsonService.getPersonajes().subscribe(
      (simpson: any) => {
        this.personajes = simpson;
      },
      (error: any) => {
        console.log("Error al obtener las categorías: ", error);
      }
    );
  }
}