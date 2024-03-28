import { ChangeDetectorRef, Component } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { AuthService } from './services/common/authenticator.service';
import { SharedService } from './services/common/shared.service';
import { PaneNames } from './services/helpers/TI.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TIFrontEnd';
  loggedOut: boolean = true;
  showApplicationList: boolean = false;
  paneName: string = PaneNames.ApplicationList;
  showPaneName: string = PaneNames.ApplicationList; 

  constructor(private loggerService: LoggerService,
              private authService: AuthService,
              private _sharedService: SharedService,
              private cdr: ChangeDetectorRef){

                _sharedService.changeEmitted$.subscribe(pane => {
                  //console.table(pane);
                  this.paneName = JSON.parse(pane["pane"]);
                });

  }

  ngOnInit(){
    if (this.authService.isLoggedIn()) {
      this.loggedOut = false;
    }else{
      this.loggedOut = true;
    }
  }
  
  ngOnDestroy(){
   

  }

  ngAfterViewChecked(){

    this.showPaneName = this.paneName;

    this.cdr.detectChanges();
  }


  setShowApplicationList( event: boolean){
    this.showApplicationList = event;
  }


}
