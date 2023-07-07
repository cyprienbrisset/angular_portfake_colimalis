import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-tracking-dialog',
  templateUrl: './tracking-dialog.component.html',
  styleUrls: ['./tracking-dialog.component.scss']
})
export class TrackingDialogComponent implements  OnInit{

  public data: any;

  constructor(public ref: DynamicDialogRef, private config: DynamicDialogConfig) {
  }

  ngOnInit(): void {
    this.data = this.config.data;
  }

}
