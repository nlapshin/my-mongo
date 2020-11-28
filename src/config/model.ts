export interface IDBConfig {
  name: string;
  host: string;
  port: number;
  auth: IDBConfigAuth;
  db: string;
  rs?: string;
  debug: boolean;
  address: string;
  connectionUrl: string;
  connectionOptions: IDBConfigConnectionOptions;
}

export interface IDBConfigAuth {
  enabled: boolean;
  username?: string;
  password?: string;
}

export interface IDBConfigConnectionOptions {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
}
