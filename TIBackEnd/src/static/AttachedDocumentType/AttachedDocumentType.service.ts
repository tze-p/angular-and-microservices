import { AttachedDocumentType } from '../../entity/static/AttachedDocumentType.entity'
import { AppDataSource } from "../../data-source"
import { FilterAttachedDocumentType } from '../../model/static/filter/FilterAttachedDocumentType';
import { Like } from 'typeorm';


const AttachedDocumentTypeRepository = AppDataSource.getRepository(AttachedDocumentType);

export async function AttachedDocumentTypeBrowse (filter: FilterAttachedDocumentType) {

    console.log(filter);

    // retrieve the records by sequence and filter
    const rtn = await AttachedDocumentTypeRepository.find({
        order: {
            Sequence: "ASC"
        },
        where:
        {           
            Key: Like(filter.Code + '%'),
            Description: Like(filter.Description + '%'),
            Type: Like(filter.getFilterType())
        }
    })

    return rtn
}