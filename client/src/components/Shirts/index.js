import React from 'react';


const ShirtList = ({ shirts, title }) => {
  // if (!shirts.length) {
  //   return <h3>No shirts Yet</h3>;
  // }
// console.log(shirts)
  return (
    <div>
      <h3>{title}</h3>
      <div id='displayShirts'>{shirts &&
        shirts.map((shirt) => (
          <div key={shirt._id} className="shirt">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {shirt.itemName} <br />
              <span style={{ fontSize: '1rem' }}>
                <img src={shirt.imgurl} alt={shirt.itemName}></img>
                <p>Price: {shirt.price}</p> 
                              </span>
            </h4>
            <button type='submit'>Add to cart 🛒</button>
          </div>
        ))}</div>
      
    </div>
  );
};

export default ShirtList;
