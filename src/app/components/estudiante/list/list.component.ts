import { Component, OnInit } from '@angular/core';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Estudiante } from 'src/app/models/Estudiante';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  estudiantes: Estudiante[];

  constructor(private service: EstudianteService, private router: Router) { }

  ngOnInit() {
    this.service.getEstudiantes().subscribe(data => (this.estudiantes = data));
  }

  ver(estudiante: Estudiante):void{
    localStorage.removeItem('id');
    localStorage.setItem("id",estudiante.id.toString());
    this.router.navigate(["ver"]);
  }
}
