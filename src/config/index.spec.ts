import { expect } from 'chai';
import { generateDBConfig } from './';

describe('generateDBConfig', () => {
  it('should generate database config per options', () => {
    expect(generateDBConfig({})).to.deep.equal({
      name: 'name',
      host: 'localhost',
      port: 27017,
      auth: { enabled: false },
      db: '',
      rs: '',
      address: 'localhost:27017',
      connectionUrl: 'mongodb://localhost:27017/',
      connectionOptions: { useNewUrlParser: true, useUnifiedTopology: true },
      debug: false
    });

    expect(generateDBConfig({
      name: 'name',
      host: 'test',
      port: 3000,
      rs: 'rs0',
      db: 'dictionary',
      auth: { enabled: true, username: 'user', password: 'password' }
    })).to.deep.equal({
      name: 'name',
      host: 'test',
      port: 3000,
      auth: { enabled: true, username: 'user', password: 'password' },
      db: 'dictionary',
      rs: 'rs0',
      address: 'test:3000',
      connectionUrl: 'mongodb://user:password@test:3000/dictionary',
      connectionOptions: { useNewUrlParser: true, useUnifiedTopology: true },
      debug: false
    });
  });
});

