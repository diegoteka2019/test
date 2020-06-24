import { Component } from '@angular/core';
import { WeatherServiceService } from './services/weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Examen - Diego Morini';
  data: any;
  temp;temp1;temp2;temp3;temp4;temp5;fstr;fstr1;fstr2;fstr3;fstr4;fstr5;json;
  provincias = ['Mendoza', 'Buenos Aires','Cordoba','Santa Fe','Entre Rios'];
  periodo = ['Hoy','Proximos 5 dias'];
  provinciaselected = 'Mendoza';
  periodoselected = 'Hoy';
  f = new Date();
  
  constructor(private servicio1: WeatherServiceService) { }

  ngOnInit(): void{
    this.fstr = this.setDateZero(this.f.getFullYear()) + '-' + this.setDateZero(this.f.getMonth() + 1) + '-' + this.setDateZero(this.f.getDate()) + ' 03:00:00';
    this.fstr1 = this.setDateZero(this.f.getFullYear()) + '-' + this.setDateZero(this.f.getMonth() + 1) + '-' + this.setDateZero(this.f.getDate() + 1) + ' 03:00:00';
    this.fstr2 = this.setDateZero(this.f.getFullYear()) + '-' + this.setDateZero(this.f.getMonth() + 1) + '-' + this.setDateZero(this.f.getDate() + 2) + ' 03:00:00';
    this.fstr3 = this.setDateZero(this.f.getFullYear()) + '-' + this.setDateZero(this.f.getMonth() + 1) + '-' + this.setDateZero(this.f.getDate() + 3) + ' 03:00:00';
    this.fstr4 = this.setDateZero(this.f.getFullYear()) + '-' + this.setDateZero(this.f.getMonth() + 1) + '-' + this.setDateZero(this.f.getDate() + 4) + ' 03:00:00';
    this.fstr5 = this.setDateZero(this.f.getFullYear()) + '-' + this.setDateZero(this.f.getMonth() + 1) + '-' + this.setDateZero(this.f.getDate() + 5) + ' 03:00:00';

    console.log('fecha actual: ' + this.fstr)
    console.log('fecha proximo primer dia: ' + this.fstr1)
    console.log('fecha proximo segundo dia: ' + this.fstr2)
    console.log('fecha proximo tercer dia: ' + this.fstr3)
  }

  search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].dt_txt === nameKey) {
            return myArray[i];
        }
    }
  }

  setDateZero(date){
    return date < 10 ? '0' + date : date;
  }

  onSelectedChange() {
    console.log('onSelectedChange : ' + this.provinciaselected) 
  }

  onSelectedChange2() {
    console.log('onSelectedChange2 : ' + this.periodoselected)
  }

  consultar() {

    this.temp = ""
    this.temp1 = ""
    this.temp2= ""
    this.temp3= ""
    this.temp4=""
    this.temp5=""
   
    console.log('Method consultar - provincia' + this.provinciaselected)
    
    this.data = this.servicio1.getWeather(this.provinciaselected,this.periodoselected).subscribe(data => { 
     
      if (this.periodoselected === 'Hoy'){
        this.data = data;
        this.temp = data['main'].temp;
      }
      else{
        this.data = data;
      
        this.temp1 = this.search(this.fstr1,data['list'])
        this.temp1 = this.temp1['main'].temp

        this.temp2 = this.search(this.fstr2,data['list'])
        this.temp2 = this.temp2['main'].temp 

        this.temp3 = this.search(this.fstr3,data['list'])
        this.temp3 = this.temp3['main'].temp 
        
        this.temp4 = this.search(this.fstr4,data['list'])
        this.temp4 = this.temp4['main'].temp 
        
        this.temp5 = this.search(this.fstr5,data['list'])
        this.temp5 = this.temp5['main'].temp 
      }
 
    },
    err => {
      console.log("Error.")
    })
  }
}

