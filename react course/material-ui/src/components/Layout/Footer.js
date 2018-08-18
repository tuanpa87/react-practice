import React from "react";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// can use props and  props.muscles
//props here is an object

const footer = ({ muscles, onSelect, category }) => {
  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0;

  const onIndexSelect = (e, index) =>
    onSelect(index === 0 ? "" : muscles[index - 1]);

  return (
    <Paper>
      <Tabs
        value={index}
        indicatorColor="primary"
        textColor="primary"
        centered
        onChange={onIndexSelect}
      >
        <Tab label="All" />
        {muscles.map((muscle, index) => <Tab key={muscle} label={muscle} />)}
      </Tabs>
    </Paper>
  );
};

export default footer;
