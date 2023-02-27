import { Component, OnInit } from '@angular/core';
export enum FuelTypeEnum{
    Diesel = 1,
    Eléctrico = 2,
    GNC = 3,
    Híbrido = 4,
    Nafta = 5,
}

export enum QuantityDoorEnum{
  TwoDoor = 1,
  ThreeDoor = 2,
  FourDoor = 3,
  FiveDoor = 4,
  MoreThanFive = 5
}

export interface SelecList{
    id: number,
    name: string
}


@Component({
  selector: 'app-seller-car',
  templateUrl: './seller-car.component.html',
  styleUrls: ['./seller-car.component.scss']
})
export class SellerCarComponent implements OnInit {
  selectedFuel: SelecList | undefined;
  selectedQuantityDoor: SelecList | undefined;
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

  doors: SelecList[] = [
    {
      id: QuantityDoorEnum.TwoDoor,
      name: '2 puertas'
    },
    {
      id: QuantityDoorEnum.ThreeDoor,
      name: '3 puertas'
    },
    {
      id: QuantityDoorEnum.FourDoor,
      name: '4 puertas'
    },
    {
      id: QuantityDoorEnum.FiveDoor,
      name: '5 puertas'
    },
    {
      id: QuantityDoorEnum.MoreThanFive,
      name: 'Mas de 5 puertas'
    }
  ];

  constructor() { }

  ngOnInit() {}

  handleSelectedFuel(fuel: SelecList){
      this.selectedFuel = fuel;
  }

  handleSelectedQuantityDoor(door: SelecList){
    this.selectedQuantityDoor = door;
  } 
}
