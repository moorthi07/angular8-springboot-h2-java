import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MatSidenav } from "@angular/material/sidenav"; 
import { app_service } from './app.service';
 

@Component({
  selector: 'settings-dialog',
  template: `
    <label>Would you like to set up app options???</label>
    <mat-slide-toggle></mat-slide-toggle>
  `
})
export class SettingsDialog {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'
  ],
  providers: []
})
export class AppComponent implements OnInit {

  public posts;
  title;
  data: any;
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  isDarkTheme = false;
  public me;
  constructor(public gsvc: app_service, public dialog: MatDialog, public vcr: ViewContainerRef) {
  }

  ngOnInit() {
    let newAccount = { "username": "user", "password": "password" };
  }

  ngOnDestroy() { 
  }

  

  togglenav() { 
    this.sidenav.toggle();
  };

  openDialog() {
    const config = new MatDialogConfig();
    config.viewContainerRef = this.vcr;
    this.dialog.open(SettingsDialog, config);
  }

   
}

