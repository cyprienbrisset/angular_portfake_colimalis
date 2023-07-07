import {Component, ElementRef, ViewChild} from '@angular/core';
import {ApiService} from "./services/api.service";
import {lastValueFrom} from "rxjs";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {TrackingDialogComponent} from "./components/tracking-dialog/tracking-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'colimalis';
  public shipid: string = ''

  ref: DynamicDialogRef | undefined;

  // @ts-ignore
  @ViewChild('idship') myInput: ElementRef;

  constructor(private api: ApiService, public dialogService: DialogService) {

  }

  private async getship(shipid: string) {
    if (shipid != '') {
      let res = await lastValueFrom(this.api.getShippingInfo(shipid))
      console.log(res);
      if (res.returnCode === 200) {
        this.show(res)
      } else {

      }
    }
  }

  public setFocus() {
    this.myInput.nativeElement.focus();
  }

  public OnEnter(event: any) {
    if (event.key === 'Enter') {
      this.getship(this.shipid);
    }
  }

  show(res: any) {
    this.ref = this.dialogService.open(TrackingDialogComponent, {
      header: 'Suivi du colis : ' + this.shipid,
      data: res,
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });

    this.ref.onClose.subscribe(() => {
    });

    this.ref.onMaximize.subscribe((value) => {
    });
  }

  protected readonly eval = eval;
}
