import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AccountComponent } from './account/account.component';
import { AvatarComponent } from './avatar/avatar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { OkpedidosComponent } from './okpedidos/okpedidos.component';
import { AdproductosComponent } from './admin/adproductos/adproductos.component';
import { AdpedidosComponent } from './admin/adpedidos/adpedidos.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AccountComponent,
    AvatarComponent,
    NavbarComponent,
    HomeComponent,
    ProductosComponent,
    CarritoComponent,
    FacturacionComponent,
    OkpedidosComponent,
    AdproductosComponent,
    AdpedidosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'productos', component:ProductosComponent},
      {path: 'carrito', component:CarritoComponent},
      {path: 'facturacion', component:FacturacionComponent},
      {path: 'okpedidos', component:OkpedidosComponent},
      {path: 'login', component:LoginComponent},
      {path: 'admin/adproductos', component:AdproductosComponent},
      {path: 'admin/adpedidos', component:AdpedidosComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
