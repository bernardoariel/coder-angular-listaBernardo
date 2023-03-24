import { Component, SimpleChanges,OnInit } from '@angular/core';
import { IEstudiante } from '../interface/iEstudiante';



@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit{

  isLoading: boolean = true;
  estudiantesPromedio:IEstudiante[] = [
    { id:1,nombre: "Juan", apellido: "García", curso: "Introducción a JavaScript", puntuacion: 80.3513,fechaFinCurso:new Date("2023-02-01") },
    { id:2,nombre: "María", apellido: "López", curso: "Programación con JavaScript", puntuacion: 60.4540,fechaFinCurso:new Date("2022-11-15") },
    { id:3,nombre: "Pedro", apellido: "Sánchez", curso: "Desarrollo web con JavaScript", puntuacion: 85.1241,fechaFinCurso:new Date("2023-01-30") },
    { id:4,nombre: "Luisa", apellido: "Hernández", curso: "JavaScript avanzado", puntuacion: 30.156,fechaFinCurso:new Date("2022-12-20") },
    { id:5,nombre: "Carlos", apellido: "González", curso: "Programación orientada a objetos", puntuacion: 70.014,fechaFinCurso:new Date("2023-02-28") },
    { id:6,nombre: "Ana", apellido: "Martínez", curso: "Desarrollo de videojuegos", puntuacion: 50.002,fechaFinCurso:new Date("2022-10-31") },
    { id:7,nombre: "Javier", apellido: "Ruiz", curso: "Introducción a Node.js", puntuacion: 75.446,fechaFinCurso:new Date("2023-01-15") },
    { id:8,nombre: "Lucía", apellido: "Gutiérrez", curso: "Desarrollo de aplicaciones móviles", puntuacion: 91.01,fechaFinCurso:new Date("2022-11-30") },
    { id:9,nombre: "Diego", apellido: "Fernández", curso: "Frameworks de JavaScript", puntuacion: 82.121,fechaFinCurso:new Date("2022-12-31") },
    { id:10,nombre: "Sofía", apellido: "Pérez", curso: "Seguridad en aplicaciones web", puntuacion: 87.155,fechaFinCurso:new Date("2023-02-15") }
  ];
  estudianteMaxPuntuacion: any = this.estudiantesPromedio.reduce((prev, current) => (prev.puntuacion > current.puntuacion) ? prev : current);

/*   ngOnChanges(changes: SimpleChanges) {
    if (changes['estudiantesPromedio']) {
      this.estudianteMaxPuntuacion = this.estudiantesPromedio.reduce((prev, current) => (prev.puntuacion > current.puntuacion) ? prev : current);
    }
  } */
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false
    }, 2000);
  }



}
