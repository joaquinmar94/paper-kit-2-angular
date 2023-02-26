import { Component, OnInit } from '@angular/core';
export enum FuelTypeEnum{
    Diesel = 1,
    Eléctrico = 2,
    GNC = 3,
    Híbrido = 4,
    Nafta = 5,
}
export interface FuelType{
    id: number,
    name: string
}
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    selectedFuel: FuelType | undefined;
    fuels: FuelType[] = [
        {
            id: FuelTypeEnum.Diesel,
            name: 'Diesel'
        },
        {
            id: FuelTypeEnum.Eléctrico,
            name: 'Eléctrico'
        },
        {
            id: FuelTypeEnum.GNC,
            name: 'GNC'
        },
        {
            id: FuelTypeEnum.Híbrido,
            name: 'Híbrido'
        },
        {
            id: FuelTypeEnum.Nafta,
            name: 'Nafta'
        }
    ];
    constructor() { }

    ngOnInit() {}

    handleSelectedFuel(fuel: FuelType){
        this.selectedFuel = fuel;
    }
}
