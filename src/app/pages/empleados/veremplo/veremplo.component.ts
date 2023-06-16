import { Component } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
@Component({
  selector: 'app-veremplo',
  templateUrl: './veremplo.component.html',
  styleUrls: ['./veremplo.component.scss']
})
export class VeremploComponent {
  public respvec: any[]=[];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get('http://localhost:8080/api/veremplo').subscribe({
      next: (response) => {
        this.respvec = response as any[];
        console.log('Respuesta:', this.respvec);
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }
}
