import {
  ContractStatus,
  ContractTimeRange
} from '../../common/index.js';
import { CollectionTypes } from '../../common/collections.js';
import { Locale } from '../../common/locales.js';

export type WorkerDataType = {
  worker: {
    id: string;
    name: string;
    contacts: {
      name: string;
      email: string;
      phone1: string;
    }[];
    addresses: CollectionTypes.PartAddress[];
  };
  employer: {
    name: string;
    currency: string;
    locale: Locale;
    addresses: CollectionTypes.PartAddress[];
    contacts: {
      name: string;
      email: string;
      phone1: string;
      phone2: string;
    }[];
  };
  contract: {
    name: string;
    startDate: Date;
    endDate: Date;
    terminationDate?: Date;
    timeRange: ContractTimeRange;
    status: ContractStatus;
    jobs: {
      id: string;
      name: string;
      description: string;
      type: string;
    }[];
  };
};
