import { model, Schema } from 'ottoman';

const testSchema = new Schema({
  test: { type: String }
});

const TestModel = model('Test', testSchema);

export default TestModel;
