import { Component, VERSION, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  myArray=[10,34,28,12, 72, 54, 91, 106];
  $userData: Observable<any>
  result:[]=[];

  ngOnInit(){
    this.$userData=this.getObservable()
  }

  getObservable(){
   return this.obtainUsers().pipe(map((res)=>res))
  }

  obtainUsers():Observable<any>{
    const lenght=this.myArray.length;
    console.log(lenght)
    const max=lenght-1;
    const min=0;
    for(let i=0; i==length; i++){
      const pos=Math.floor(Math.random()*(max-min)+min);
       this.result = this.result.push(this.myArray[pos]);
    }

    return this.result;
  }

  /*1- CREAR 5 MULTINACIONALES CON 6 MARCAS CADA UNA DE ELAS
    2- OBTENER TODAS LAS MULTINACIONALES Y METERLAS EN UN ARRAY
    3- 
*/




}
