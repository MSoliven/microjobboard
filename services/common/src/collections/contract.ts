import { CollectionTypes } from '@microjobboard/types';
import mongoose from 'mongoose';
import Realm from './realm.js';

const ContractSchema = new mongoose.Schema<CollectionTypes.Contract>({
  realmId: { type: String, ref: Realm },
  name: String,
  description: String,
  numberOfTerms: Number,
  timeRange: { type: String, enum: ['days', 'weeks', 'months', 'years'] },
  active: Boolean,

  // ui state
  stepperMode: { type: Boolean, default: false }
});

export default mongoose.model<CollectionTypes.Contract>('Contract', ContractSchema);
