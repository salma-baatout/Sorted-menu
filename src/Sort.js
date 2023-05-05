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
        <li key={dessert.name} className="list-group-item">
          {dessert.name} - {dessert.calories} cal
        </li>
      );
    });

  return (
    <div>
      <div className="my-form-group">
        <label htmlFor="sort-order">Sort by:</label>
        <select
          id="sort-order"
          className="my-select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="calories">Sort by calories</option>
          <option value="name">Sort by name</option>
        </select>
      </div>
      <ul className="list-group ">{sortedMenu}</ul>
    </div>
  );
};

export default Sort;
