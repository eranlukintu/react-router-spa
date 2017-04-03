import React from "react";
import { ListGroup, ListGroupItem, Alert, Button } from 'react-bootstrap';
import { TempTestDataItem } from "./tempTestDataItem.js";
import { deleteTestDataItem } from "../../../api/temp-data/temp-methods/tempMethods.js";
import { calculateIndentLevel } from "../../functions/dot-string-functions/dotStringFunctions.js";

export default class TempOutlineComponent extends React.Component{

	handleDeleteAllTestData(testData) {
		testData.forEach(function(TDI) {
			deleteTestDataItem.call(TDI);
		});
		console.log("All deleted");
	}

	handleCalculateIndentLevel(testDataItem) {
		let dString = testDataItem.staticDotString;
    	return calculateIndentLevel(dString); 
	}

  render() { 	
    const testDataList = this.props.testDataList;
    // console.log(this.props);
    // console.log(testDataList);
    
    return 	<div>
        <span className="pull-right"><Button bsStyle="danger" onClick={this.handleDeleteAllTestData.bind(this, testDataList)}>Delete all test data</Button></span>
        <ListGroup>
            {testDataList.map((tdi, index) => (        	
                <TempTestDataItem 
                    testDataItem = {tdi} 
                    key={index} 
                    setControllingElement = {this.props.setControllingElement}
                    indentLevel={this.handleCalculateIndentLevel(tdi)} 
                />
            ))}
        </ListGroup>
    </div>
  }
}