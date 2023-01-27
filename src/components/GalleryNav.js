import React from "react";
import _ from 'lodash';
import cn from 'classnames';

function GalleryNav (props) {
    const { type } = props;
    const { tabs } = props;
    const { changeTypeHandler } = props;

    return (
        <ul className="nav nav-tabs gallery-tabs mb-4">
            {tabs.map(({ tabId, name }) => {
                const classes = cn('nav-link', 'text-custom-hover', {
                    'active': tabId === type,                    
                });
                return (
                <li className="nav-item" key={_.uniqueId()}>
                    <button className={classes} id={tabId} onClick={changeTypeHandler(tabId)}>{name}</button>
                </li>
                );
            })}
        </ul>
    );
}

export default GalleryNav;