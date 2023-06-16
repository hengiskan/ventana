import { Component, OnInit,HostListener} from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  nabvisible = false;
  btncerrar = false;
  sobrenav=false;
  mostrar: String="";

 
  
  ngAfterViewInit(): void {
      this.drop1()
  }
  compo1(){
    this.mostrar='comp1';
  }
  compo2(){
    this.mostrar='comp2';
  }
  compo3(){
    this.mostrar='comp3';
  }
  compodep1(){
    this.mostrar='compodep1';
  }
  compodep2(){
    this.mostrar='compodep2';
  }
  compodep3(){
    this.mostrar='compodep3';
  }
  compoemplo1(){
    this.mostrar='compoemplo1';
  }
  compoemplo2(){
    this.mostrar='compoemplo2';
  }
  compoemplo3(){
    this.mostrar='compoemplo3';
  }

  drop1(){
    document.querySelector('#sub1')?.classList.toggle('hidden')
    document.querySelector('#arrow1')?.classList.toggle('rotate-0')
  }
  drop2(){
    document.querySelector('#sub2')?.classList.toggle('hidden')
    document.querySelector('#arrow2')?.classList.toggle('rotate-0')
  }
  drop3(){
    document.querySelector('#sub3')?.classList.toggle('hidden')
    document.querySelector('#arrow3')?.classList.toggle('rotate-0')
  }
  cambnab() {
    this.nabvisible = false;
  }
  cerrnab(){
    this.nabvisible = true;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if(window.innerWidth <= 1000)
    {
      this.nabvisible=true
      this.btncerrar=true
      this.sobrenav=true;

    }else{
      this.nabvisible=false
      this.btncerrar=false
      this.sobrenav=false;

    }
    //this.checkSidebarVisibility();
  }

  //-------------------------------------------------------------------------------
  //registros: any[] = []; 
  
  //----------------------------------------------------------------------
  

  
  
  //---------------------------------------------------------------------


  /*seleccionarRegistro(registro: any) {
    // Asigna el registro seleccionado a la variable 'seleccionado' para mostrarlo en el formulario
    this.seleccionado = { ...registro };
  }*/
 

 

}
