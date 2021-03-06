import { Injectable } from '@angular/core';

let vehicles = [
    {
        id: 1,
        name: 'Verna C Perry',
        email: 'verna@gmail.com',
        bday: '12/7/1982',
        phn: '789-683-7864',
        add: '24th Street Rd',
        city: 'Miami',
        country: 'US'
    },
    {
        id: 2,
        name: 'Matt L Ramirez',
        email: 'matt@gmail.com',
        bday: '2/14/1997',
        phn: '517-669-9733',
        add: '3679 Haven Lane',
        city: 'Dewitt',
        country: 'US'
    },
    {
        id: 3,
        name: 'Timothy R Ragland',
        email: 'tim@gmail.com',
        bday: '3/27/1964',
        phn: '956-735-0214',
        add: '2484 Adamsville Road',
        city: 'Mcallen',
        country: 'US'
    },
    {
        id: 4,
        name: 'Tommy M Dandrea',
        email: 'tom@yahoo.com',
        bday: '9/24/1952',
        phn: '786-012-2211',
        add: '2810 Woodbridge Lane',
        city: 'FELLOWS',
        country: 'US'
    },
    {
        id: 5,
        name: 'Mushfiq Sazal',
        email: 'sazal@gmail.com',
        bday: '10/11/1989',
        phn: '786-009-1234',
        add: '24th Street Rd',
        city: 'Miami',
        country: 'US'
    },
    {
        id: 6,
        name: 'Tracy C Siller',
        email: 'tracy@outlook.com',
        bday: '3/2/1992',
        phn: '541-758-4735',
        add: '1777 Buena Vista Avenue',
        city: 'Corvallis',
        country: 'US'
    },
    {
        id: 7,
        name: 'Mary A Arndt',
        email: 'mary@gmail.com',
        bday: '5/13/1997',
        phn: '410-768-0444',
        add: '2055 Woodhill Avenue',
        city: 'Glen Burnie',
        country: 'US'
    },
    {
        id: 8,
        name: 'Raymond M Allen',
        email: 'ray@samsung.com',
        bday: '9/1/1974',
        phn: '559-862-4331',
        add: '3973 Half and Half Drive',
        city: 'EAST NORTHPORT',
        country: 'US'
    },
    {
        id: 9,
        name: 'Ganim R Rakib',
        email: 'ganim@samsung.com',
        bday: '01/02/1990',
        phn: '786-122-3222',
        add: '24th Street Rd',
        city: 'Atlanta',
        country: 'US'
    },
    {
        id: 10,
        name: 'Sheri C Phillips',
        email: 'sheri@intel.com',
        bday: '3/19/1955',
        phn: '718-350-1462',
        add: '173 Pride Avenue',
        city: 'New York',
        country: 'US'
    },
    {
        id: 11,
        name: 'Donna D Wise',
        email: 'donna@microsoft.com',
        bday: '9/22/1975',
        phn: '305-650-5775',
        add: '2709 Golden Street',
        city: 'Miami',
        country: 'US'
    },
    {
        id: 12,
        name: 'Douglas J Ballard',
        email: 'doug@ibm.com',
        bday: '7/25/1963',
        phn: '313-704-7904',
        add: '1744 Tully Street',
        city: 'Detroit',
        country: 'US'
    },
    
];



@Injectable()
export class VehicleService {

    private vehicles;

    constructor() {
        this.vehicles = vehicles;
    }

    getVehicles() {
        return this.vehicles;
    }


}
