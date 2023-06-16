import { Component,OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
@Component({
  selector: 'app-veremp',
  templateUrl: './veremp.component.html',
  styleUrls: ['./veremp.component.scss']
})
export class VerempComponent implements OnInit {
  public respvec: any[]=[];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get('http://localhost:8080/api/veremp').subscribe({
      next: (response) => {
        this.respvec = response as any[];
        console.log('Respuesta:', this.respvec);
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }
 // obtenerDatos() {
 //   const url = 'http://localhost:8080/api/empresas'; // Reemplaza con la URL de tu servidor Spring
    /*this.http.get(url, { responseType: 'text' }).subscribe(
      response => {
        this.datos = response as string;
        console.log('Respuesta:', this.datos);
      },
      error => {
        console.error('Error:', error);
      }
    );*/
    /*this.http.get(url).subscribe(
      response => {
        this.datos = response as string;
        console.log('Respuesta:', this.datos);
      },
      error => {
        console.error('Error:', error);
      }
    );*/
  //  this.http.get(url).subscribe({
  //    next: (response) => {
   //     this.respvec = response as any[];
  //     // console.log('Respuesta:', this.datos);
  //    },
  //    error: (error) => {
  //      console.error('Error:', error);
  //    }
  //  });
 // }
}
