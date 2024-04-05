import { Request, Response } from 'express';
import { getErrorMessage } from '../../utils/errors.utils'
import * as attachedDocumentTypeService from './AttachedDocumentType.service'
import { FilterAttachedDocumentType, ReturnFilterAttachedDocumentType } from '../../model/static/filter/FilterAttachedDocumentType';
import { TypedJSON } from 'typedjson-npm';


export const browseAttachedDocumentType = async (req: Request, res: Response) => {
    try {
        //console.log(req.query);

        const found = await attachedDocumentTypeService.AttachedDocumentTypeBrowse(ReturnFilterAttachedDocumentType(req))
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        //res.setHeader('Access-Control-Allow-Credentials', true);
        res.status(200).send(found)
    } catch (error) {
        return res.status(500).send(getErrorMessage(error));
    }
};

export const viewAttachedDocumentType = async (req: Request, res: Response) => {

    try {


    } catch (error) {
        return res.status(500).send(getErrorMessage(error));
    }
}