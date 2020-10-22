import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/models/Estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {

  estudiante: Estudiante = new Estudiante();
  constructor(private service: EstudianteService) { }

  ngOnInit() {
    
    let id=localStorage.getItem("id");
    this.service.getEstudiante(+id)
    .subscribe(data=>{
      this.estudiante=data;
      console.log(data);
    });

  }

}
