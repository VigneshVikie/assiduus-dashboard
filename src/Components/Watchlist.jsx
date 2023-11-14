import React from "react";

const Watchlist = ({ data }) => {
  return (
    <div className="watchlist chart-container">
      <div className="watchlist-header">
        <h3>Account watchlist</h3>
      </div>
      <div className="wishlist-main">
        <div className="wishlist-acc">
          <h4>Account</h4>
          <p>Sales</p>
          <p>Advertising</p>
          <p>Inventory</p>
          <p>Entertainment</p>
          <p>Product</p>
        </div>
        <div className="wishlist-month">
          <h4>This Month</h4>
          <p>{data[0].salesMonth}</p>
          <p>{data[1].adsMonth}</p>
          <p>{data[2].inventoryMonth}</p>
          <p>{data[3].entertainmentMonth}</p>
          <p>{data[4].productMonth}</p>
        </div>
        <div className="wishlist-ytd">
          <h4>YTD</h4>
          <p>{data[0].salesYtd}</p>
          <p>{data[1].adsYtd}</p>
          <p>{data[2].inventoryYtd}</p>
          <p>{data[3].entertainmentYtd}</p>
          <p>{data[4].productYtd}</p>
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
