import { ChangeDetectorRef, Component } from '@angular/core';
import { Location } from '@angular/common';
import { SharedService } from '../services/common/shared.service';
import { PaneNames } from '../services/helpers/TI.types';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  constructor(private location: Location,
    private _sharedService: SharedService,
    private cdr: ChangeDetectorRef
    ) { 
      _sharedService.changeEmitted$.subscribe(pane => {
        //console.table(pane);
        this.paneName = JSON.parse(pane["pane"]);
        this.paneShow = JSON.parse(pane["show"]);
      });
  }

  ngAfterViewChecked(){
    this.checkChanges(this.paneName, this.paneShow);
    this.cdr.detectChanges();   
  }

  // make the close button hidden when on the 
  // Trade Innovation Application
  //
  hideButton: boolean = false;
  buttonName: string = 'Close';
  paneName: string = '';
  paneShow: boolean = false;


  checkChanges(paneName: string, show: boolean){

    if (paneName == PaneNames.ApplicationList){
      this.hideButton = show;
    } 
    else if (paneName.search('details') != -1){
      this.hideButton = show;
    }
    else {
      this.hideButton = false;
    }

    //console.log('Hiding/Show of button on: ' + paneName + ' value: ' +  show);
  }

  onClick(){
    this.location.back();
  }

}
