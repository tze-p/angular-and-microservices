import { Column, PrimaryColumn, BaseEntity, Entity } from "typeorm";

@Entity("COLLDOCTYP")
export class AttachedDocumentType extends BaseEntity {
    @PrimaryColumn({
        length: 3,
        name: 'KEY97'
    })
    Key: string;

    @Column({
        length: 35,
        name: 'DESCR'
    })
    Description: string;

    @Column({
        name: 'SEQUENCE'
    })
    Sequence: number;

    @Column({
        length: 4,
        name: 'TYPE'
    })
    Type: string;

    @Column({
        length: 1,
        name: 'OBSOLETE'
    })
    Obsolete: string;

    @Column({
        length: 1,
        name: 'MNT_IN_BO'
    })
    MaintainedInBackOffice: string;

    @Column({
        default: 9191,
        name: 'TYPEFLAG'
    })
    Typeflag: number;

    @Column({
        name: 'TSTAMP'
    })
    timestamp: number;


}


// @PrimaryColumn({
//     length: 3
// })
// KEY97: string;

// @Column({
//     length: 35
// })
// DESCR: string;

// @Column()
// 'SEQUENCE': number;

// @Column({
//     length: 4
// })
// TYPE: string;

// @Column({
//     length: 1
// })
// OBSOLETE: string;

// @Column({
//     length: 1
// })
// MNT_IN_BO: string;

// @Column({default: 9191})
// TYPEFLAG: number;

// @Column()
// TSTAMP: number;

