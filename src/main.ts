import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {ShipmentDashboard} from './app/shipment-dashboard/shipment-dashboard';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
