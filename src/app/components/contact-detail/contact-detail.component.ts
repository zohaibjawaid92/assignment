import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute , private contactService : ContactsService ){} 
  contactinformation : any;
  ngOnInit(): void {
    console.log('contactID', this.route.snapshot.params);
    const id = this.route.snapshot.params;  
    this.contactService.getContactById(id['id']).subscribe(x => {
      console.log('data of contact ' , x);
      this.contactinformation = x;
    })
  }

}
