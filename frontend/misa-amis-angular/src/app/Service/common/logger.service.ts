import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  public logMessage: string = 'MISA'
  
  constructor() { }

  log(message: any) {
    console.log(message);
  }
  
}
