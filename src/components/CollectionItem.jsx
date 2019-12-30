import React from 'react';
import CustomButton from './CustomButton';
import {connect} from 'react-redux';
import {addItem} from '../redux/cart/cartActions';
import '../scss/collection-item.scss';

const CollectionItem = ({item, addItem}) => {
  const
  return (
    div className = 'collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${item.imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{item.name}</span>
        <span className='price'>{item.price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted> ADD TO CART </CustomButton>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);