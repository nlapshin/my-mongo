export interface IDBOptions {
  name?: string;
  host?: string;
  port?: number;
  auth?: IDBOptionsAuth;
  db?: string;
  rs?: string;
  mode?: string;
  debug?: boolean;
}

export interface IDBOptionsAuth {
  enabled?: boolean;
  username?: string;
  usernameFilePath?: string;
  password?: string;
  passwordFilePath?: string;
}
