export class AttachedDocumentType {
    id?: string;
    
    Key: string;

    Description: string;

    Sequence: number;

    Type: string;

    Obsolete: string;

    MaintainedInBackOffice: string;

    Typeflag: number;

    timestamp: number;

    showType: string; // this is for conversion

    displayType(Type: string){
        if (Type === 'DOCU') {
            return 'Document';
        }else{
            return 'General';
        }

    }

}

export function processShowType(Type: string){
    if (Type === 'DOCU') {
        return 'Documents';
    }else{
        return 'General';
    }
}


