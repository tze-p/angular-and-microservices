import { JsonMember, JsonObject } from 'typedjson-npm';
import { TypedJSON } from 'typedjson-npm';
import { Request, Response } from 'express';

@JsonObject
export class FilterAttachedDocumentType {
    @JsonMember
    Code: string;

    @JsonMember
    Description: string;

    @JsonMember
    Type: string;

    getFilterType(){
        if (this.Type === '') {
            return '%';
        }
        return this.Type + '%';    
    }

}

export const ReturnFilterAttachedDocumentType = (req: Request): FilterAttachedDocumentType => {

    var type = TypedJSON.parse(JSON.stringify(req.query), FilterAttachedDocumentType);
    type instanceof FilterAttachedDocumentType;
    return type;

}