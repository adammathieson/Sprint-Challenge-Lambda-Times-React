import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  // console.log(props.tabs);
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        
        {props.tabs.map((tab, i) =>
          <Tab
            tab={tab}
            key={i} 
            selectTabHandler={props.selectTabHandler} 
            selectedTab={props.selectedTab}/>
          )}
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
