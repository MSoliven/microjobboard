import { CollectionTypes } from '@microjobboard/types';
import Contract from './contract.js';
import mongoose from 'mongoose';
import Job from './job.js';
import Realm from './realm.js';

const WorkerSchema = new mongoose.Schema<CollectionTypes.Worker>({
  // Organization
  realmId: { type: String, ref: Realm },

  // individual details
  name: String,

  // address
  street1: String,
  street2: String,
  zipCode: String,
  city: String,
  country: String,

  // contract
  contract: String,
  contractId: { type: String, ref: Contract },
  jobs: [
    {
      _id: false,
      jobId: { type: String, ref: Job },
      job: Job.schema,
      rent: Number,
      expenses: [
        {
          _id: false,
          title: String,
          amount: Number,
          beginDate: Date,
          endDate: Date
        }
      ],
      entryDate: Date,
      exitDate: Date
    }
  ],

});

export default mongoose.model<CollectionTypes.Worker>('Occupant', WorkerSchema);
