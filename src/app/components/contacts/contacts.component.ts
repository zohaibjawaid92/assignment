import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contactList : any;
  constructor(private contactService : ContactsService , private route:Router) { }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe(x => {
      console.log(x);
      this.contactList = x;
    })
  }

  checkDetail(obj: any){
    console.log(obj)
    this.route.navigate(['/contactdetails'] , {state : {obj}});
  }

}
