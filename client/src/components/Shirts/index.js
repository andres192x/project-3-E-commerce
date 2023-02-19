import React from 'react';
const ShirtList = ({ shirts, title }) => {
  const itemArray = []
  const addItems = (e) => {
    const getItems = JSON.parse(localStorage.getItem(('items')))
    if (getItems != null) {
      getItems.push(e.target.parentNode.id)
      localStorage.setItem('items', JSON.stringify(getItems));
    }
    else {
      itemArray.push(e.target.parentNode.id)
      localStorage.setItem('items', JSON.stringify(itemArray));
    }
    console.log(getItems)
  };
  return (
    <div>
      <h3>{title}</h3>
      <div id='displayShirts'>{shirts &&
        shirts.map((shirt) => (
          <div key={shirt._id} id={shirt._id} className="shirt">
            <h4 className="shirt heading">
              {shirt.itemName} <br /></h4>
            <span style={{ fontSize: '0.8rem' }}>
              <img src={shirt.imgurl} alt={shirt.itemName}></img>
              <p>Price: {shirt.price}</p>
            </span>
            <button id='addItems' onClick={addItems} >Add to cart 🛒</button>
          </div>
        ))}</div>
    </div>
  );
};
export default ShirtList;