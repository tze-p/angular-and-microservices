import { Injectable } from "@angular/core";
import { AttachedDocumentType } from "src/app/model/static/AttachedDocumentType";

@Injectable({ providedIn: 'root' })
export class AttachedDocumentTypeDataService {
  public initialised = false;
  public items: AttachedDocumentType[];
  public selectedItem: AttachedDocumentType;

  clear() {
    // set it back to default

  }
}