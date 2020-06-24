import {Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherServiceService {
 
  private ROOT_URL  = 'http://api.openweathermap.org/data/2.5/weather?q=' ;
  private ROOT_URL_TWO = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  private KEY = '&appid=ba01de6181f824481399b74e19e7d972';

  constructor(private http: HttpClient) {}

  getWeather(provincia: string, periodo: string): Observable<any>{  
    return (periodo === 'Hoy') ? this.http.get(this.ROOT_URL + provincia + this.KEY) : this.http.get(this.ROOT_URL_TWO + provincia + this.KEY + '&units=metric');
  }
}

