import { Component } from '@angular/core';
import { SharedService } from "src/app/services/common/shared.service";

@Component({
    selector: 'app-ti-pane-component',
    template: '',
    styles: ['']
  })
export class TIPaneComponent {

    constructor(public _sharedService: SharedService){}

    paneName: string = '';

    setPaneName(name: string){
        this.paneName = name;
    }

    setPaneNameBrowser(name: string){
        this.paneName = name + ' browser';
    }

    setPaneNameDetails(name: string){
        this.paneName = name + ' details';
    }

    ngOnInit(): void {
        this._sharedService.emitChange(this.paneName,true);
      }
    
    ngOnDestroy(): void {
        this._sharedService.emitChange(this.paneName,false);
    }
}