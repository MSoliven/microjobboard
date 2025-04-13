import { ResponseError, ServiceRequest, ServiceResponse } from '../../index.js';
import { WorkerDataType } from './types.js';
export type Request = ServiceRequest & {
    email?: string;
};
export type Response = ServiceResponse & ({
    error?: undefined;
    results: WorkerDataType[] | [];
} | ResponseError);
