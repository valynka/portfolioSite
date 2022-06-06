import React from 'react';
import _ from 'lodash';

function SkillsList (props) {
    const { items, name } = props;
    return (
        <div className="col-sm-4 col-12">
            <h5>{name}</h5>
            <ul>
                {items.map((item) => <li key={_.uniqueId()}>{item}</li>)}
            </ul>
        </div>
    );
}

export default SkillsList;