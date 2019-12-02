import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.scss';


const MenuItem = ({title, imageUrl, size, linkUrl, match}) => (
  <div
    className={`${size} menu-item`}
    onClick={() => this.props.history.push(`${match.url}${linkUrl}`)}
  >

    <div
      classname='background-image'
      style={{ backgroundImage:`url(${imageUrl})` }}
    />
    <div className="content">
     <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle"> SHOP NOW </span>
    </div>
  </div>
);

export default withRouter(MenuItem);