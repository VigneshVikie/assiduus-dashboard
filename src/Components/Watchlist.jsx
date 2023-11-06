import React from "react";

const Watchlist = () => {
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
          <p>1,194.58</p>
          <p>6,879.02</p>
          <p>4,692.26</p>
          <p>0.00</p>
          <p>4,652.10</p>
        </div>
        <div className="wishlist-ytd">
          <h4>YTD</h4>
          <p>11,418.29</p>
          <p>9,271.36</p>
          <p>9,768.09</p>
          <p>0.00</p>
          <p>2,529.90</p>
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
