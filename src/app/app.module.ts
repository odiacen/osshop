import { AuthGuard} from './auth-guard.service';
import { OsshopService } from './osshop.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NgbInputDatepickerConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { OkpedidosComponent } from './okpedidos/okpedidos.component';
import { AdproductosComponent } from './admin/adproductos/adproductos.component';
import { AdpedidosComponent } from './admin/adpedidos/adpedidos.component';
import { LoginComponent } from './login/login.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { Nav } from './nav/nav.component';
import { Pedidos } from './pedidos/pedidos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductosComponent,
    CarritoComponent,
    FacturacionComponent,
    OkpedidosComponent,
    AdproductosComponent,
    AdpedidosComponent,
    LoginComponent,
    ProductFormComponent,
    Nav,
    Pedidos
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'productos', component:ProductosComponent, canActivate: [AuthGuard]},
      {path: 'carrito', component:CarritoComponent},
      {path: 'login', component:LoginComponent},

      {path: 'facturacion', component:FacturacionComponent, canActivate: [AuthGuard]},
      {path: 'okpedidos', component:OkpedidosComponent, canActivate: [AuthGuard]},
      
      {path: 'admin/adproductos', component:AdproductosComponent, canActivate: [AuthGuard]},
      {path: 'admin/product/new', component:ProductFormComponent, canActivate: [AuthGuard]},
      {path: 'admin/adpedidos', component:AdpedidosComponent, canActivate: [AuthGuard]}
    ])
  ],
  providers: [
    OsshopService,
    AuthGuard,
    NgbInputDatepickerConfig,
    Pedidos
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
