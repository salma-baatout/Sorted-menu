import { useState } from "react";

const Sort = (props) => {
  const [sortOrder, setSortOrder] = useState("calories");

  const sortedMenu = props.data
   
    .sort((a, b) => {
      if (sortOrder === "calories") {
        return a.calories - b.calories;
      } else {
        return a.name.localeCompare(b.name);
      }
    })
    .map((dessert) => {
      return (
        <ul>
          {dessert.name} - {dessert.calories} cal
        </ul>
      );
    });

  return (
    <div>
      <label htmlFor="sort-order">Sort by:</label>
      <select
        id="sort-order"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="calories">Sort by calories</option>
        <option value="name">Sort by name</option>
      </select>
      <ul>{sortedMenu}</ul>
    </div>
  );
};

export default Sort;
