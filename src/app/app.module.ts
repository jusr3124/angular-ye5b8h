import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { OverigebetalingenpolitieComponent } from './overigebetalingenpolitie/overigebetalingenpolitie.component';
import { TestAppComponent } from './test-app/test-app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VisumaanvragenComponent } from './visumaanvragen/visumaanvragen.component';
import { TegenonderzoekArtikelAchtComponent } from './tegenonderzoek-artikel-acht/tegenonderzoek-artikel-acht.component';
import { ConcatFirstSixCharPipe } from './pipe/concat-first-six-char.pipe';
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    NgbAlertModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'overigebetalingenpolitie', component: OverigebetalingenpolitieComponent },
      { path: 'test-app', component: TestAppComponent },
      { path: 'visumaanvragen', component: VisumaanvragenComponent },
      { path: 'tegenonderzoek-artikel-acht', component: TegenonderzoekArtikelAchtComponent },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    OverigebetalingenpolitieComponent,
    TestAppComponent,
    PageNotFoundComponent,
    VisumaanvragenComponent,
    TegenonderzoekArtikelAchtComponent,
    ConcatFirstSixCharPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/