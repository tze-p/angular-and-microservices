import { Component } from '@angular/core';
import { SharedService } from '../services/common/shared.service';
import { PaneNames } from '../services/helpers/TI.types';
import { TIPaneComponent } from '../panes/static-data/common/ti.pane.component';

@Component({
  selector: 'app-static-data',
  templateUrl: './static-data.component.html',
  styleUrls: ['./static-data.component.css'],
})
export class StaticDataComponent extends TIPaneComponent {

  constructor(private sharedService: SharedService){
    super(sharedService);
    this.setPaneName(PaneNames.StaticData);
  }

}
