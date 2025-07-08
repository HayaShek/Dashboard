import { Component } from '@angular/core';
import {Header} from '../header/header';
import {ShipmentDashboard} from '../shipment-dashboard/shipment-dashboard';

@Component({
  selector: 'app-home',
  imports: [Header, ShipmentDashboard,],
  templateUrl: './home.html',
  standalone: true,
  styleUrl: './home.scss'
})
export class Home {

}
