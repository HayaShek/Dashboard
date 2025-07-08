import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ShipmentDashboard} from './shipment-dashboard/shipment-dashboard';
import {Header} from './header/header';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.scss'
})
export class App {

}
