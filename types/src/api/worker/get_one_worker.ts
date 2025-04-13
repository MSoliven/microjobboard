import { ResponseError, ServiceRequest, ServiceResponse } from '../../index.js';
import { WorkerDataType } from './types.js';

export type Request = ServiceRequest<{
  workerId: string;
}> & {
  email?: string;
};

export type Response = ServiceResponse &
  (
    | {
        error?: undefined;
        results: WorkerDataType[] | [];
      }
    | ResponseError
  );
