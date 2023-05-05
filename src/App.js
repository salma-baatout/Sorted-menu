import "bootstrap/dist/css/bootstrap.min.css";
import Sort from "./Sort";

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  return (
    <div className="container my-4 ">
      <h2 className="mb-4">List of Desserts:</h2>
      <Sort data={desserts} />
    </div>
  );
}

export default App;
