import { connect } from './db.config';
import express from 'express';
import TestModel from './test.model';

function listen() {
  const app = express();

  app.get('/', (_, res) => {
    res.send({ time: Date.now() });
  });

  app.post('/', async (req, res) => {
    const testModel = new TestModel({
      test: req.query.test
    });

    const result = await testModel.save();

    res.send({ result });
  })

  connect().then(() => {
    console.log('DB is up and running ...');

    app.listen(3000, () => {
      console.log('Server running on port: 3000 ...');
    });
  });
}

listen();