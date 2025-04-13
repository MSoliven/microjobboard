export declare namespace RedisClientTypes {
    type GetFunction = (key: string) => Promise<string | null>;
    type SetFunction = (key: string, value: string) => Promise<string | null>;
    type DelFunction = (key: string) => Promise<number>;
    type KeysFunction = (pattern: string) => Promise<string[]>;
    type MonitorFunction = () => Promise<void>;
}
