import React from "react";
import { ListGroup, ListGroupItem, Alert, Button, Row, Col, ButtonToolbar } from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { SUMMARYDATA } from "../../../api/temp-data/temp-collections/tempCollections.js";
import Loading from '../../components/Loading.js';
import { TempObservationSummaryItem } from "./tempObservationSummaryItem.js";

class TempObservationsSummary extends React.Component {

	handleRefreshSummary() {
		Meteor.call("SummaryData.create", {});
	}

	render() {
		console.log(this.props.observationsList);
		return <div>
			<Row>
				<Col>
					<div>
						<h4>Observation Summary</h4>
						<span>
							<ButtonToolbar>
								<Button bsStyle="info" onClick={this.handleRefreshSummary.bind(this)}>
									Refresh summary
								</Button>
							</ButtonToolbar>
						</span>
					</div>
				</Col>
			</Row>
			<Row>
				<Col>
					{this.props.observationsList.map((obSumItem) => (
						<TempObservationSummaryItem
							key = {obSumItem._id}
							testSummaryItem = {obSumItem}
							indentLevel = {obSumItem.indentLevel}
						 />
					))}
				</Col>
			</Row>
		</div>
	}
}

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('observationsSummary');

  if (subscription.ready()) {
    const observationsList = SUMMARYDATA.find({}).fetch();
    onData(null, { observationsList });
  }
};

export default composeWithTracker(composer, Loading)(TempObservationsSummary);