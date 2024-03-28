import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class SharedService {
    // Observable string sources
    private emitChangeSource = new Subject<any>();
    // Observable string streams
    changeEmitted$ = this.emitChangeSource.asObservable();
    // Service message commands
    emitChange(paneName: string, show: boolean) {
        this.emitChangeSource.next({
            "pane": JSON.stringify(paneName),
            "show": JSON.stringify(show)
          });
    }
}