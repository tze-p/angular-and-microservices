import { Component, EventEmitter, Input, Output } from '@angular/core';
import { buttonAction, PaneNames } from 'src/app/services/helpers/TI.types';

@Component({
  selector: 'app-static-buttons-component',
  templateUrl: './static-browser-buttons.component.html',
  styleUrls: ['./static-browser-buttons.component.css']
})
export class StaticBrowserButtonsComponent {

  constructor(){}

  @Input() loading: boolean = false;

  @Input() selected: boolean = false;

  @Output() notifyParent: EventEmitter<string> = new EventEmitter<string>()

  onClickNew() {
    this.notifyParent.emit(buttonAction.NEW);
  }

  onClickCopy() {
    this.notifyParent.emit(buttonAction.COPY);
  }

  onClickUpdate() {
    this.notifyParent.emit(buttonAction.UPDATE);
  }

  onClickDelete() {
    this.notifyParent.emit(buttonAction.DELETE);
  }

  onClickView() {
    this.notifyParent.emit(buttonAction.VIEW);
  }

}
