import { Component } from '@angular/core';
import { TIPaneComponent } from '../panes/static-data/common/ti.pane.component';
import { SharedService } from '../services/common/shared.service';
import { PaneNames } from '../services/helpers/TI.types';

@Component({
  selector: 'app-trade-finance-processing',
  templateUrl: './trade-finance-processing.component.html',
  styleUrls: ['./trade-finance-processing.component.css']
})
export class TradeFinanceProcessingComponent extends TIPaneComponent{

  constructor(private sharedService: SharedService){
    super(sharedService);
    this.setPaneName(PaneNames.TradeFinanceProcessing);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

}
