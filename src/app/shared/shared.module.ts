import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { SharedComponent } from './shared/shared.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BreadcrumsComponent,
    SharedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BreadcrumsComponent,
    SharedComponent
  ],
})
export class SharedModule { }
