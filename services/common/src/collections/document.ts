import { CollectionTypes } from '@microjobboard/types';
import Contract from './contract.js';
import mongoose from 'mongoose';
import Realm from './realm.js';
import Template from './template.js';
import Worker from './worker.js';

const DocumentSchema = new mongoose.Schema<CollectionTypes.Document>({
  realmId: { type: String, ref: Realm },
  workerId: { type: String, ref: Worker },
  contractId: { type: String, ref: Contract },
  templateId: { type: String, ref: Template },
  type: String, // one of 'text', 'file'
  name: String,
  description: String,
  mimeType: String, // used only when type === "file"
  expiryDate: Date, // used only when type === "file"
  contents: Object, // used only when type === "text"
  html: String, // used only when type === "text"
  url: String, // used only when type === "file"
  versionId: String, // used only when type === "file"
  createdDate: Date,
  updatedDate: Date
});

DocumentSchema.pre('save', function (next) {
  const now = new Date();
  if (!this.createdDate) {
    this.createdDate = now;
  }
  this.updatedDate = now;
  next();
});

DocumentSchema.pre('findOneAndUpdate', function (next) {
  const update = this?.getUpdate();
  if (!update || !('set' in update)) {
    return next();
  }
  /* @ts-ignore */
  update.$set.updatedDate = new Date();
  next();
});

export default mongoose.model<CollectionTypes.Document>(
  'Document',
  DocumentSchema
);
