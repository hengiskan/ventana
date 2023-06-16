import { Component } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
@Component({
  selector: 'app-editdep',
  templateUrl: './editdep.component.html',
  styleUrls: ['./editdep.component.scss']
})
export class EditdepComponent {
  tabvisible=false;
  formData: any = {};
  chec: boolean = false;
  selec:any={};
  public respvec: any[]=[];
  baseUrl = 'http://localhost:8080/api/updep/';
  serverResponse: string="";
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
  fila(item:any)
  {
    this.tabvisible=true
    this.selec=item;
  }
  cancelar(){
    this.tabvisible=false;
  }
  onChange() {
    console.log(this.chec);
  }
 
  submitForm() {
    this.tabvisible=false;
    /*const formattedDateTime = this.formatDateTime(this.formData.created_date);
    
    const body = {
      created_date: formattedDateTime,
      modified_date: formattedDateTime,
      // Otros campos del formulario
    };*/
    this.formData.status=this.chec
    for (let prop in this.formData) {
      if (this.formData.hasOwnProperty(prop)) {
        this.selec[prop] = this.formData[prop];
        //status:this.chec;
      }
    }

    console.log(this.selec);
    const url = `${this.baseUrl}${this.selec.id}`; // URL de tu endpoint para actualizar un registro en el backend

    this.http.put(url, this.selec).subscribe(
      response => {
        this.serverResponse = (response as any).message;
        console.log('Registro actualizado:', response);
        // Realiza las acciones necesarias después de actualizar el registro
        // Por ejemplo, mostrar un mensaje de éxito, volver a cargar los registros, etc.
      },
      error => {
        this.serverResponse = "Error";
        console.error('Error al actualizar el registro:', error);
      }
    );
  }
  formatDateTime(dateTime: string): string {
    const date = new Date(dateTime);
    return date.toISOString().replace('T', ' ').replace('Z', '');
  }
}
