import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 // Defining the components below
import {ContactsComponent} from './components/contacts/contacts.component';
import {ContactDetailComponent} from './components/contact-detail/contact-detail.component';

const routes: Routes = [
  {path:'',component:ContactsComponent},
  {path:'contactdetails/:id',component:ContactDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
