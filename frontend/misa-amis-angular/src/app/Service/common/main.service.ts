import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  public toggle_active = false;

  constructor(private loggerService: LoggerService) { }

  /**
   * Function set active toggle
   * @param active boolen set action toggle
   * PQ Huy (17.08.2021)
   */
  setActiveToggle(active: boolean) {
    this.toggle_active = active;
  }
}
