import { Routes, RouterModule } from '@angular/router';
import {CommunityComponent} from './components/community/community.component';
import {HomeComponent} from './components/home/home.component';
import {ContactoComponent} from './components/contacto/contacto.component';
import {NosotrosComponent} from './components/nosotros/nosotros.component';
import {ServiciosComponent} from './components/servicios/servicios.component';

const APP_ROUTES: Routes = [
  { path: 'stratos', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'community/manager', component: CommunityComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'stratos' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
