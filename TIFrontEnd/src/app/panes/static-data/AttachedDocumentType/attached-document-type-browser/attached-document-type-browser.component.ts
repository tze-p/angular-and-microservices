import { Component } from '@angular/core';
import { AttachedDocumentTypeService } from '../../../../services/static-data/AttachedDocumentType/attached-document-type.service'
import { LoggerService } from 'src/app/services/logger.service';
import { AttachedDocumentType, processShowType } from 'src/app/model/static/AttachedDocumentType';
import { FilterAttachedDocumentType } from 'src/app/model/static/filter/FilterAttachedDocumentType';
import { NavigationExtras, Router } from '@angular/router';
import { AttachedDocumentTypeDataService } from 'src/app/services/static-data/AttachedDocumentTypeData/attached-document-type-data.service'
import { TIPaneComponent } from '../../common/ti.pane.component';
import { SharedService } from 'src/app/services/common/shared.service';
import { PaneNames } from 'src/app/services/helpers/TI.types';


@Component({
  selector: 'app-attached-document-type-browser',
  templateUrl: './attached-document-type-browser.component.html',
  styleUrls: ['./attached-document-type-browser.component.css'],
  providers: [AttachedDocumentTypeService]
})
export class AttachedDocumentTypeBrowserComponent extends TIPaneComponent {
  private className = "AttachedDocumentTypeBrowserComponent";

  constructor(private attachedDocTypeService: AttachedDocumentTypeService,  
    public router: Router, 
    private dataService: AttachedDocumentTypeDataService,
    private sharedService: SharedService){
      super(sharedService);
      this.setPaneNameBrowser(PaneNames.StaticAttachedDocumentType);
  }

  filter: FilterAttachedDocumentType = new FilterAttachedDocumentType;

  items: AttachedDocumentType[] = [];
  
  displayedHeaderColumn: string[] = ['Type', 'Key', 'Description'];

  // getting information from the DB
  loading: boolean = false;

  // calling child component
  callingChildComponent: boolean = false;

  //
  blank: AttachedDocumentType = new AttachedDocumentType;
  selectedItem: AttachedDocumentType = this.blank;
  selected: boolean = false;

  override ngOnInit(){
    super.ngOnInit();
    if (this.dataService.initialised) {
      this.items = this.dataService.items;
      this.selectedItem = this.dataService.selectedItem;
      if (this.selectedItem) {
        this.selected=true;
      }else{
        this.selected=false;
      }
      this.dataService.initialised = false; 
    }
  }

  override ngOnDestroy(){
    super.ngOnDestroy();
    if (this.callingChildComponent) {
      this.dataService.initialised = true;
      this.dataService.items = this.items;
      this.dataService.selectedItem = this.selectedItem;
      // console.log(this.dataService);  
    } else {
      // destroy the service
      
    }
  }

  onRefresh(){
    // console.log('Start retrieving from API');
    // console.log(this.filter);
  
    this.loading = true;
    this.attachedDocTypeService.RetrieveAttachedDocumentTypes(this.filter)
    .subscribe({ 
      next: data => {
        this.items = data;
        this.items.forEach( (item) =>{
          item.showType = processShowType(item.Type);
        })
        // console.log('End retrieving from API');
        this.loading = false;
        this.clearSelection();
      },
      error: (e) => {
        console.log(e);
        window.alert('Cannot process your request right now, please try again later.');
        this.loading = false;
      }
    });
  }

  clearSelection(){
    this.selectedItem=this.blank;
    this.selected=false;
  }

  onInputCode(eventData: Event){
    this.filter.Code = (<HTMLInputElement>eventData.target).value;
  }

  onInputDescription(eventData: Event){
    this.filter.Description = (<HTMLInputElement>eventData.target).value;
  }

  onSelectType(eventData: string){
    this.filter.setType(eventData);
  }

  onClickStaticButtons(actionType: string){

    this.callingChildComponent = true;
    if (actionType != 'New'){
      let navigationExtras: NavigationExtras = {
        state: {
          "action": JSON.stringify(actionType),
          "item": JSON.stringify(this.selectedItem)
        }
      }
      this.router.navigate(['AttachedDocumentTypeDetails'], navigationExtras);
    }else {
      window.alert(actionType);
    }
  }

  getRecord(eventData: AttachedDocumentType){
    this.selectedItem = eventData;
    this.selected = true;
    //console.log("Selected: " + this.selected);
  }

}
