import { Component, OnInit } from '@angular/core';
export interface SelecList{
  id: number,
  name: string
}
export enum FuelTypeEnum{
  Diesel = 1,
  Eléctrico = 2,
  GNC = 3,
  Híbrido = 4,
  Nafta = 5,
}
@Component({
  selector: 'app-buy-car',
  templateUrl: './buy-car.component.html',
  styleUrls: ['./buy-car.component.scss']
})
export class BuyCarComponent implements OnInit {
  selectedFuel: SelecList | undefined;
  fuels: SelecList[] = [
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

  items: any[] = [{
    vendorName: 'Joaquin Martinez',
    carName: 'Fiat Palio 1.4 Fire',
    model: 2008,
    fuel: FuelTypeEnum.Nafta,
    doorQuantity: 5
  },
  {
    vendorName: 'Joaquin Martinez',
    carName: 'Fiat Palio 1.4 Fire',
    model: 2008,
    fuel: FuelTypeEnum.Nafta,
    doorQuantity: 5
  },
  {
    vendorName: 'Joaquin Martinez',
    carName: 'Fiat Palio 1.4 Fire',
    model: 2008,
    fuel: FuelTypeEnum.Nafta,
    doorQuantity: 5
  },
  {
    vendorName: 'Joaquin Martinez',
    carName: 'Fiat Palio 1.4 Fire',
    model: 2008,
    fuel: FuelTypeEnum.Nafta,
    doorQuantity: 5
  },
  {
    vendorName: 'Joaquin Martinez',
    carName: 'Fiat Palio 1.4 Fire',
    model: 2008,
    fuel: FuelTypeEnum.Nafta,
    doorQuantity: 5
  },
  {
    vendorName: 'Joaquin Martinez',
    carName: 'Fiat Palio 1.4 Fire',
    model: 2008,
    fuel: FuelTypeEnum.Nafta,
    doorQuantity: 5
  },
  {
    vendorName: 'Joaquin Martinez',
    carName: 'Fiat Palio 1.4 Fire',
    model: 2008,
    fuel: FuelTypeEnum.Nafta,
    doorQuantity: 5
  },
  {
    vendorName: 'Joaquin Martinez',
    carName: 'Fiat Palio 1.4 Fire',
    model: 2008,
    fuel: FuelTypeEnum.Nafta,
    doorQuantity: 5
  },
  {
    vendorName: 'Joaquin Martinez',
    carName: 'Fiat Palio 1.4 Fire',
    model: 2008,
    fuel: FuelTypeEnum.Nafta,
    doorQuantity: 5
  },
  {
    vendorName: 'Joaquin Martinez',
    carName: 'Fiat Palio 1.4 Fire',
    model: 2008,
    fuel: FuelTypeEnum.Nafta,
    doorQuantity: 5
  }]
  constructor() { }

  ngOnInit(): void {
  }

  handleSelectedFuel(fuel: SelecList){
    this.selectedFuel = fuel;
  }
}
