import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { STRUCTUREITEMS } from '../../../api/temp-data/temp-collections/tempCollections.js';
import { TESTDATA } from '../../../api/temp-data/temp-collections/tempCollections.js';
import TempTestDataList from '../../components/temp-components/tempTestDataList.js';
import Loading from '../../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('TestData.all');

  if (subscription.ready()) {
    const testDataList = TESTDATA.find().fetch();
    onData(null, { testDataList });
  }
};

export default composeWithTracker(composer, Loading)(TempTestDataList);