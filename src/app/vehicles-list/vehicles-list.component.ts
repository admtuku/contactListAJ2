import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../model/vehicle.service';
import { Vehicle } from '../model/vehicle';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: 'vehicles-list.component.html',
  styleUrls: ['vehicles-list.component.css'],
  providers: [VehicleService]
})
export class VehiclesListComponent implements OnInit {

  vehicles: Vehicle[];
  selectedVehicle: Vehicle;

  constructor(private vehicleService: VehicleService) {
    this.vehicles = this.vehicleService.getVehicles();
  }

  ngOnInit() {
  }

  onSelect(vehicle: Vehicle) { this.selectedVehicle = vehicle; }

  performSearch(searchTerm: HTMLInputElement): void {

  var toSearch = `${searchTerm.value}`;
  var cnt=0;

   for( var i=0; i<this.vehicles.length; i++)
   {
      //console.log(this.vehicles[i].name);
      if(this.vehicles[i].name.search(toSearch)!=-1)
      {
          this.selectedVehicle = this.vehicles[i];
          break;
          
      }

      cnt = cnt+1;

    }

    if(cnt==this.vehicles.length){

      alert('No Contact Found!');

    }


    
  }

  compareA(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

compareD(a,b) {
  if (a.name > b.name)
    return -1;
  if (a.name < b.name)
    return 1;
  return 0;
}

compareEmailA(a,b) {
  if (a.email < b.email)
    return -1;
  if (a.email > b.email)
    return 1;
  return 0;
}

compareEmailD(a,b) {
  if (a.email > b.email)
    return -1;
  if (a.email < b.email)
    return 1;
  return 0;
}

  sortNameA(): void{ this.vehicles.sort(this.compareA); }

  sortNameD(): void{this.vehicles.sort(this.compareD);}
  
  sortEmailA(): void{ this.vehicles.sort(this.compareEmailA); }
  sortEmailD(): void{ this.vehicles.sort(this.compareEmailD); }

}
