import { Ottoman, set } from 'ottoman';

const ottoman = new Ottoman({ collectionName: '_default' });

const connect = async () => {
  set('DEBUG', true);

  await ottoman.connect({
    connectionString: `couchbase://127.0.0.1:8091`,
    bucketName: 'test_bucket',
    username: 'test',
    password: 'test',
    kvTimeout: 10000
  });

  await ottoman.start();
}

export { connect, ottoman };