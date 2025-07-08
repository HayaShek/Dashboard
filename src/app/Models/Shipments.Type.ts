export interface Shipment {
  shipmentId: string;
  cargoType: string;
  currentStatus: string;
  vesselName: string;
  originPort: string;
  destinationPort: string;
  eta: Date;
}
