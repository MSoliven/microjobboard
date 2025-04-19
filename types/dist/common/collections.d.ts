import { ContractTimeRange, Locale, UserRole } from './index.js';
export type MongooseDocument<T> = {
    __v: number;
    save: () => Promise<T>;
    toObject: () => T;
} & T;
export declare namespace CollectionTypes {
    type PartAddress = {
        street1: string;
        street2?: string;
        zipCode: string;
        city: string;
        state?: string;
        country: string;
    };
    type Account = {
        _id: string;
        firstname: string;
        lastname: string;
        email: string;
        password: string;
        createdDate?: Date;
    };
    type Realm = {
        _id: string;
        name: string;
        members: {
            name: string;
            email: string;
            role: UserRole;
            registered: boolean;
        }[];
        applications: {
            name: string;
            role: UserRole;
            clientId: string;
            clientSecret: string;
            createdDate: Date;
            expiryDate: Date;
        }[];
        addresses: CollectionTypes.PartAddress[];
        bankInfo: {
            name: string;
            iban: string;
        };
        contacts: {
            name: string;
            email: string;
            phone1: string;
            phone2: string;
        }[];
        isCompany: boolean;
        companyInfo: {
            name: string;
            legalStructure: string;
            legalRepresentative: string;
            capital: number;
            ein: string;
            dos: string;
            vatnumber: string;
        };
        thirdParties: {
            gmail: {
                selected: boolean;
                email: string;
                appPassword: string;
                fromEmail: string;
                replyToEmail: string;
            };
            mailgun: {
                selected: boolean;
                apiKey: string;
                domain: string;
                fromEmail: string;
                replyToEmail: string;
            };
            b2: {
                keyId: string;
                applicationKey: string;
                endpoint: string;
                bucket: string;
            };
        };
        locale: Locale;
        currency: string;
    };
    type Email = {
        _id: string;
        templateName: string;
        recordId: string;
        params: Record<string, never>;
        sentTo: string;
        sentDate: Date;
        status: string;
        emailId: string;
    };
    type Contract = {
        _id: string;
        realmId: string;
        name: string;
        description: string;
        numberOfTerms: number;
        timeRange: ContractTimeRange;
        active: boolean;
    };
    type Job = {
        _id: string;
        realmId: string;
        type: string;
        name: string;
        description: string;
        payRange: {
            min: number;
            max: number;
        };
    };
    type Worker = {
        _id: string;
        realmId: string | Realm;
        name: string;
        street1: string;
        street2: string;
        zipCode: string;
        city: string;
        country: string;
        phone: string;
        email: string;
        contract: string;
        contractId: string | Contract;
        skills: string[];
        certifications: string[];
        education: string;
        experience: number;
        expectedPayRange: {
            min: number;
            max: number;
        };
        references: {
            name: string;
            contact: string;
            relation: string;
        }[];
        socialProfiles?: {
            linkedIn?: string;
            github?: string;
            portfolio?: string;
        };
        ratings?: {
            score: number;
            reviews: string[];
        };
        jobs: {
            jobId: string;
            job: CollectionTypes.Job;
            pay: number;
            startDate: Date;
            endDate: Date;
        }[] | [];
    };
}
