import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShipmentService } from '../shipment.service';
import { HttpClientModule } from '@angular/common/http';
import {Shipment} from '../Models/Shipments.Type';

@Component({
  selector: 'app-shipment-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './shipment-dashboard.html',
  styleUrls: ['./shipment-dashboard.scss'],
})
export class ShipmentDashboard {
  private shipmentService = inject(ShipmentService);

  shipments = signal<Shipment[]>([]);
  searchTerm = signal('');
  selectedStatus = signal('');

  //for paging the table
  itemsPerPage = 4;
  currentPage = signal(1);


  constructor() {
    this.shipmentService.getShipments().subscribe((data) => {
      this.shipments.set(data);
    });
  }

  filteredShipments = computed(() => {
    const filtered = this.shipments().filter((shipment) => {
      const search = this.searchTerm(); //.toLowerCase();
      const status = this.selectedStatus();
      const matchesSearch =
        !search ||
        shipment.shipmentId.includes(search) ||  //toLowerCase().
        shipment.vesselName.includes(search);
      const matchesStatus = !status || shipment.currentStatus === status;
      return matchesSearch && matchesStatus;
    });

    const start = (this.currentPage() - 1) * this.itemsPerPage;
    return filtered.slice(start, start + this.itemsPerPage);
  });

  totalPages = computed(() => {
    const filtered = this.shipments().filter((shipment) => {
      const search = this.searchTerm();     //.toLowerCase()
      const status = this.selectedStatus();
      return (
        (!search ||
          shipment.shipmentId.includes(search) ||
          shipment.vesselName.includes(search)) &&
        (!status || shipment.currentStatus === status)
      );
    });
    return Math.ceil(filtered.length / this.itemsPerPage) || 1;
  });

  get statuses(): string[] {
    return Array.from(new Set(this.shipments().map((s) => s.currentStatus)));
  }

  goToPage(page: number) {
    const max = this.totalPages();
    if (page >= 1 && page <= max) this.currentPage.set(page);
  }
}
