import { IDBOptions, IDBOptionsAuth } from '../options/model';
import { IDBConfig, IDBConfigAuth } from './model';

export function generateDBConfig(options: IDBOptions): IDBConfig {
  const name = options.name || 'name';

  const host = options.host || 'localhost';
  const port = options.port || 27017;

  const db = options.db || '';
  const rs = options.rs || '';

  const auth = getAuth(options.auth || {});
  const address = getAddress(host, port);
  const connectionUrl = getConnectionUrl(address, db, auth);
  const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true };

  const debug = options.debug || false;

  const config = {
    name, host, port, auth, db, rs,
    address, connectionUrl, connectionOptions,
    debug
  };

  return config;
}

function getAuth(authOptions: IDBOptionsAuth): IDBConfigAuth {
  const auth: IDBConfigAuth = {
    enabled: authOptions.enabled || false
  };

  if (auth.enabled === true) {
    auth.username = getUsername(authOptions),
    auth.password = getPassword(authOptions);
  }

  return auth;
}

function getUsername(auth: IDBOptionsAuth): string {
  return auth.enabled ? auth.username || '' : '';
}

function getPassword(auth: IDBOptionsAuth): string {
  return auth.enabled ? auth.password || '' : '';
}

function getAddress(host: string, port: number): string {
  return `${host}:${port}`;
}

function getConnectionUrl(address: string, db: string, auth: IDBConfigAuth) {
  let url = 'mongodb://';

  if (auth.enabled === true) {
    url += `${auth.username}:${auth.password}@`;
  }

  url += `${address}/${db}`;

  return url;
}
