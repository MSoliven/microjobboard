import { CollectionTypes } from '@microjobboard/types';
import mongoose from 'mongoose';
import Realm from './realm.js';

const JobSchema = new mongoose.Schema<CollectionTypes.Job>({
  realmId: { type: String, ref: Realm },

  type: String,
  name: String,
  description: String,
  payRange: {
    min: Number,
    max: Number
  }
});
export default mongoose.model<CollectionTypes.Job>(
  'Job',
  JobSchema
);
