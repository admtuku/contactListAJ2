import { Component } from '@angular/core';
import { VehicleService } from './model/vehicle.service';
import { Vehicle } from './model/vehicle';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
//  providers: [VehicleService]
})
export class AppComponent {
  title = 'Contact List';
 // vehicles: Vehicle[];

 // constructor(private vehicleService: VehicleService) {
 //   this.vehicles = this.vehicleService.getVehicles();
 // }


}
