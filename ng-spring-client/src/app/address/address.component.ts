import { Component, OnInit, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MatSidenav } from "@angular/material/sidenav";
   
 
import { app_service, confirmDialog } from '../app.service';
import { AddressService } from './address.service';

import { AddressModel } from './address.model';

declare var ace: any; 

@Component({
  selector: 'address',
  templateUrl: './address.html',
  styleUrls: ['./address.css'],
  providers: [  AddressService]
})
export class AddressComponent implements OnInit {

searchAddresss;
showComments;
hideComments;
codetext;
   addresses = [];
  newAddress = new AddressModel();

  title;  

  @ViewChild('addresssidenav', {static: false}) addresssidenav: MatSidenav;
 
  isDarkTheme = false;
  textm;
  options;
  onChange;
  //remove
  me; 


  constructor(public gsvc: app_service, public dialog: MatDialog, public vcr: ViewContainerRef, private addressSvc: AddressService) {
    this.textm = 'test';
    this.options = { printMargin: false, mode: 'javascript' };
    this.onChange = (data) => {
      
      console.log(data);

    }
  } 
  

  ngOnInit() {
    this.addressSvc.query('').then(addresslist => { 
      this.addresses = addresslist;
    }); 
  }
 

  togglenav() {
    
    this.addresssidenav.toggle();
  };

  reset() {
    this.newAddress = new AddressModel();
     
  };

  // List of this collection 
  listView() { } 

  // Save new or edited item
  save() {
    var i = -1;
    var j = 0; 
    this.addresses.forEach(address => {
      if (address.id === this.newAddress.id) {
        i = j; 
      }
        j++;
    });
 
    this.addressSvc.save(this.newAddress).then(success  => {
      console.log('success address',success);
      
      if (i >= 0) {
        this.addresses[i] = success;
      } else {
        this.addresses.push(success);
      };

      this.gsvc.showToast('Saved!');

      this.reset();
    },   (err)=> {
      if (err.status === 401) {
        this.gsvc.showToast('Unauthorized'); 
      } else { 
        this.gsvc.showToast('An error occured!');
      }
    });
     
  };

  // Edit selected item from ListView
  edit(address) {
    this.newAddress = address;
    this.togglenav();

  };

  //Delete one or more items in the collection 
  delete($event, address) {
    console.log(' this.addresses-------------', this.addresses);
    let msgdata = { title: "Delete", message: "Are you sure you want to delete this address?", option1: "Yes", option2: "No" };
    let dialogRef = this.dialog.open(confirmDialog, { data: msgdata });
    dialogRef.afterClosed().subscribe(result => {
      console.log('result-----------: ', result);
      if (result === "Yes") {

        this.addressSvc.delete(address).then( (success)=> {
          var i = this.addresses.indexOf(address);
          this.addresses.splice(i, 1);
          this.gsvc.showToast('deleted.');
          if (address.id === this.newAddress.id) {
            // delete this.comments;
            // this.hideComments();
          }
          this.reset();
        }, (err)  => {
          console.log(err);
          if (err.status === 401) {
            this.gsvc.showToast('Unauthorized.'); 
          } else {
            console.log(err);
            this.gsvc.showToast('An error occured!');

          }
        });
      }
      //  Endif

    });

  };
 
  openDialog() { 

  } 
}
