import { Component, EventEmitter, Output } from '@angular/core';
import { SharedService } from '../services/common/shared.service';
import { PaneNames } from '../services/helpers/TI.types';
import { TIPaneComponent } from '../panes/static-data/common/ti.pane.component';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent extends TIPaneComponent{

  constructor(private sharedService: SharedService){
    super(sharedService);
    this.setPaneName(PaneNames.ApplicationList);
  }

}
