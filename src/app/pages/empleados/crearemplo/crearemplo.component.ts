import { Component } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
@Component({
  selector: 'app-crearemplo',
  templateUrl: './crearemplo.component.html',
  styleUrls: ['./crearemplo.component.scss']
})
export class CrearemploComponent {
  formData: any = {};
  chec: boolean = false;
  serverResponse: string="";
  constructor(private http: HttpClient) { }
  submitForm() {
    const formattedDateTime = this.formatDateTime(this.formData.created_date);
    
    const body = {
      created_date: formattedDateTime,
      modified_date: formattedDateTime,
      // Otros campos del formulario
    };
    this.formData.status=this.chec

    const url = 'http://localhost:8080/api/saveemplo'; // Reemplaza con la URL de tu servidor Spring
    
    /*this.http.post(url, { responseType: 'text' }).subscribe({
      next: response => {
        
        this.datos = response as string;
        console.log('Respuesta:', this.datos);
        // Realiza las acciones necesarias después de enviar los datos al servidor
      },
      error: error => {
        console.error('Error al enviar los datos:', error);
        // Maneja el error en caso de que ocurra
      }
    });*/
    this.http.post(url, this.formData).subscribe({
      
      next: response => {
        console.log(this.formData);
        this.serverResponse = (response as any).message;
        console.log('Respuesta del servidor:', (response as any).message);
        // Realiza las acciones necesarias después de enviar los datos al servidor
      },
      error: error => {
        console.error('Error al enviar los datos:', error);
        // Maneja el error en caso de que ocurra
      }
    });
  }
  formatDateTime(dateTime: string): string {
    const date = new Date(dateTime);
    return date.toISOString().replace('T', ' ').replace('Z', '');
  }
}
