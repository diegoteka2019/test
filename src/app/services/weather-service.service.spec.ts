import { TestBed, inject, async } from '@angular/core/testing';
import { WeatherServiceService } from './weather-service.service';
import { HttpClientModule } from '@angular/common/http';


describe('UNIT TEST - REAL WEB SERVICE', () => {
    
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
       HttpClientModule
      ],
      providers: [
        WeatherServiceService
      ]
    });
  });

  it('REAL WEB SERVICE SE INSTANCIO CORRECTAMENTE', inject([WeatherServiceService], (service: WeatherServiceService) => {
    expect(service).toBeTruthy();
  }));

  it('REAL WEB SERVICE : Llamada al método getWeather', inject([WeatherServiceService], (service: WeatherServiceService) => {
    expect(service.getWeather('Mendoza','Hoy')).not.toBeNull();
  }));
 

});
