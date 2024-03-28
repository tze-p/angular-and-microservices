import { Component } from '@angular/core';
import { SharedService } from '../services/common/shared.service';
import { PaneNames } from '../services/helpers/TI.types';
import { TIPaneComponent } from '../panes/static-data/common/ti.pane.component';

@Component({
  selector: 'app-system-tailoring',
  templateUrl: './system-tailoring.component.html',
  styleUrls: ['./system-tailoring.component.css']
})
export class SystemTailoringComponent extends TIPaneComponent {

  constructor(private sharedService: SharedService){
    super(sharedService);
    this.setPaneName(PaneNames.SystemTailoring);
  }

}
