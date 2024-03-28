import { GlobalUser } from '../../entity/global/GlobalUser.entity'
import { GlobalDataSource } from "../../data-source"
import { Like } from 'typeorm';

const GlobalRepository = GlobalDataSource.getRepository(GlobalUser);

export async function findUserByUserName (username: string) {

    console.log(username);

    // retrieve the records
    const rtn = await GlobalRepository.findOne({
        select: {
            username: true,
            password: true,
            fullname: true
        },        
        where:
        {           
            username: Like(username),
        }
    })
    return rtn;
}

export async function findUsers() {

    console.log('find users');

    // retrieve the records
    const rtn = await GlobalRepository.find(
        {
            select: {
                username: true,
                fullname: true,
            }
        }

    );

    return rtn
}
