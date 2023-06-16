import { Component } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
@Component({
  selector: 'app-verdep',
  templateUrl: './verdep.component.html',
  styleUrls: ['./verdep.component.scss']
})
export class VerdepComponent {
  public respvec: any[]=[];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get('http://localhost:8080/api/verdep').subscribe({
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
