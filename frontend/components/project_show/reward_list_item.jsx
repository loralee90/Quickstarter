import React from 'react';

const RewardListItem = ({reward}) => {
  return (
    <li key={reward.id} className="reward-list-item">
      <h4>Pledge ${reward.cost} or more</h4>
      <h5>{reward.title}</h5>
      <p className="reward-description">{reward.description}</p>
      <span>estimated delivery</span>
      <p className="delivery-date">{reward.delivery_date}</p>
      <p className="reward-backers">{reward.total_backers} backers</p>
    </li>
  );
};

export default RewardListItem;
// <p className="delivery-date">{reward.delivery_date}</p>
