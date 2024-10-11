import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchTerm: string = '';
  personajes: any[] = []; // Aquí deberías tener el arreglo de personajes que obtienes de la API
  personajesFiltrados: any[] = [];
  buscarPersonajes() {
    this.personajesFiltrados = this.personajes.filter(personaje =>
      personaje.Nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
