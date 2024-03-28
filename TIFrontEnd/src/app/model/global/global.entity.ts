export class GlobalUser {
    username: string;

    fullname: string;

    password: string;

    profileUpdatedBy: string;

    enabled: boolean;

    forcePasswordReset: boolean;

    badLoginAttempts: number;

    activityTimeout: number;

    lastGoodLogin: Date;

    lastBadLogin: Date;

    lastProfileChange: Date;

    expiryDate: Date;

    passwordHistory: string;

    more: string;

    lastPasswordChange: Date;

    profileCreated: Date;

    profileCreatedBy: string;

    passwordChangedBy: string;

    disabledReason: string;

    userRole: string;

}