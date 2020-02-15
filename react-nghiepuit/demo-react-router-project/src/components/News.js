import React from 'react';
const News = ({match}) => (
    <div>
        <h3>News</h3>
        <h3>{`You enter categoryName: ${match.params.categoryName}`}</h3>
        <h3>{`match object details: ${JSON.stringify(match, null, 4)}`}</h3>
    </div>
);
export default News;
