import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  public toggle_active = false;

  public currentPage = 1;

  public totalPage = 0;

  public pageSize = 10;

  constructor(private loggerService: LoggerService) { }

  /**
   * Function write log
   * @param message string
   * CreatedBy: PQ Huy (18.08.2021)
   */
  logError(message: string) {
    this.loggerService.log(message)
  }

  /**
   * Function set active toggle
   * @param active boolen set action toggle
   * PQ Huy (17.08.2021)
   */
  setActiveToggle(active: boolean) {
    this.toggle_active = active;
  }
}
