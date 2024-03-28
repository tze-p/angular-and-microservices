import { Column, PrimaryColumn, BaseEntity, Entity, Timestamp } from "typeorm";
import {Exclude, instanceToPlain} from "class-transformer";

@Entity("SS_USER")
export class GlobalUser extends BaseEntity{
    @PrimaryColumn({
        name: "USERNAME",
        length: 255
    })
    username: string;

    @Column({
        name: "FULLNAME",
        length: 255
    })
    fullname: string;

    @Column({
        name: "PASSWORD",
        length: 32
    })
    @Exclude()
    password: string;

    @Column({
        name: "PROFILE_UPDATE_BY",
        length: 255
    })
    profileUpdatedBy: string;

    @Column({
        name: "ACCOUNT_ENABLED"
    })
    enabled: boolean;

    @Column({
        name: "PASSWORD_RESET"
    })
    forcePasswordReset: boolean;

    @Column({
        name: "FAILED_LOGINS"
    })
    badLoginAttempts: number;

    @Column({
        name: "ACTIVITY_TIMEOUT"
    })
    activityTimeout: number;

    @Column({
        name: "LAST_GOOD_LOGIN"
    })
    lastGoodLogin: Date;

    @Column({
        name: "LAST_BAD_LOGIN"
    })
    lastBadLogin: Date;

    @Column({
        name: "LAST_PROFILE_CHANGE"
    })
    lastProfileChange: Date;

    @Column({
        name: "EXPIRY_DATE"
    })
    expiryDate: Date;

    @Column({
        name: "PASSWORD_HISTORY",
        length: 255
    })
    passwordHistory: string;

    @Column({
        name: "MORE",
        length: 255
    })
    more: string;

    @Column({
        name: "LAST_PASSWORD_CHANGE"
    })
    lastPasswordChange: Date;

    @Column({
        name: "PROFILE_CREATED"
    })
    profileCreated: Date;

    @Column({
        name: "PROFILE_CREATED_BY",
        length: 255
    })
    profileCreatedBy: string;

    @Column({
        name: "PASSWORD_CHANGED_BY",
        length: 255
    })
    passwordChangedBy: string;

    @Column({
        name: "DISABLED_REASON",
//        length: 10
    })
    disabledReason: string;

    @Column({
        name: "ROLECODE",
        length: 20
    })
    userRole: string;

    toJSON() {
        return instanceToPlain(this);
    }

}