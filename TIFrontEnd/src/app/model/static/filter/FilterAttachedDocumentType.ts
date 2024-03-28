export class FilterAttachedDocumentType {
    Code: string;

    Description: string;

    Type: string;

    constructor() {
        this.Code = '';
        this.Description = '';
        this.Type = '';
    }

    setType(argType: string){
        if (argType === 'Documents') {
            this.Type = 'DOCU';
        } 
        else if (argType === 'General'){
            this.Type = 'GEN';
        } 
        else{
            this.Type = '';
        }
    }

}