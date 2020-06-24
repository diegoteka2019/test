import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WeatherServiceService } from './services/weather-service.service';
import { Observable, of } from 'rxjs';
import { API_MENDOZA_HOY, API_BAIRES_HOY } from './mock-data-service';


//Mock service 
class MockWeatherServiceClass { 
    getWeather(provincia: string, periodo: string): Observable<any>{  
      return (provincia === 'Mendoza') ? of(API_MENDOZA_HOY) : of(API_BAIRES_HOY); 
  }
}


describe('COMPONENT UNIT TEST',() =>{

let fixture: ComponentFixture<AppComponent>;
let comp:AppComponent;
let userService:WeatherServiceService;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [ FormsModule ],
    declarations: [
      AppComponent
    ],
    providers: [
     /* { provide: WeatherServiceService, useValue: MockWeatherServiceValue }*/
      { provide: WeatherServiceService, useClass: MockWeatherServiceClass }
    ]
  })
 
  fixture = TestBed.createComponent(AppComponent);
  comp    = fixture.componentInstance;

  // UserService from the root injector
  userService = TestBed.get(WeatherServiceService);


});


it('Metodo consultar del componente que usa el servicio simulado', () => {
  comp.provinciaselected = 'Buenos Aires';
  comp.periodoselected = 'Hoy';
  comp.consultar();
  fixture.detectChanges();
  expect(comp.temp).not.toBeNull();
});

it('Metodo consultar del componente que usa el servicio simulado', () => {
  comp.provinciaselected = 'Mendoza';
  comp.periodoselected = 'Hoy';
  comp.consultar();
  fixture.detectChanges();
  expect(comp.temp).not.toBeNull();
});


it('title no sea indefinido', () => {
  expect(comp.title).not.toBeUndefined();
});

it('title tenga el valor que corresponde', () => {
  expect(comp.title).toEqual('Examen - Diego Morini');
});

it('Fecha actual no sea nula', () => {
  comp.ngOnInit();
  expect(comp.fstr).not.toBeNull();
});



})


/*Testing with useValue in provider------------------------------------------
let MockWeatherServiceValue: Partial<WeatherServiceService>;
let fixture: ComponentFixture<AppComponent>;
let comp,userService;

MockWeatherServiceValue = {
  ServiceActive : true
}*/
