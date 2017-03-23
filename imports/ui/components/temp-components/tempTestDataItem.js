import React from "react";
import { Random } from 'meteor/random';
import { HorizontalBarComponent } from "../supplementary-components/horizontal-bar-component/horizontalBarComponent.js";

export class TempTestDataItem extends React.Component {

	insertHorizontalBars() {
		let hbArray = [];
		
		let indentLevel = this.props.indentLevel;
		for(let i=0; i<indentLevel; i++) {
			let key = Random.id();
			hbArray.push(<span><HorizontalBarComponent key={key}/></span>);
		}
		return hbArray;
	}

	render() {
		const testDataItem = this.props.testDataItem;
		return <div>
			{this.insertHorizontalBars()} {testDataItem.staticDotString} {testDataItem.name} {testDataItem.itemType}
		</div>
	}
}