import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { RouterModule } from '@angular/router';
import { SellerCarComponent } from './seller-car/seller-car.component';
import { BuyCarComponent } from './buy-car/buy-car.component';
import { ItemCardDetailComponent } from './item-card-detail/item-card-detail.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        RouterModule,
    ],
    declarations: [
        LandingComponent,
        SellerCarComponent,
        SellerCarComponent,
        BuyCarComponent,
        ItemCardDetailComponent
    ]
})
export class ComponentsModule { }
