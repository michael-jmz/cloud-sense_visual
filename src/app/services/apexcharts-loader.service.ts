import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApexchartsLoaderService {
  private isApexChartsLoaded = false;

  constructor() { }
  loadApexCharts() {
    if (this.isApexChartsLoaded) {
      return Promise.resolve();
    }

    return import('apexcharts').then(() => {
      this.isApexChartsLoaded = true;
    });
  }
}
