import "bootstrap/dist/css/bootstrap.min.css";
import Sort from "./Sort";
import "./App.css";


const appetizer = [
  {
    name: "Avocado Hummus",
    calories: 215,
    price:"7",
  },
  {
    name: "Greek Salad",
    calories: 230,
    price:"9",

  },
  {
    name: "Calamar Soup",
    calories: 255,
    price:"12",

  },
  {
    name: "Crab-Stuffed Mushrooms",
    calories: 220,
    price:"12",
  },
  
];
const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
    price:"14 ",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
    price:"11 ",

  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
    price:"9 ",

  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
    price:"8 ",
  },
  
];
const main = [
  {
    name: "Baked feta pasta",
    calories: 553,
    price:"21 ",
  },
  {
    name: "Blue cheese gratin",
    calories: 409,
    price:"18 ",

  },
  {
    name: "Chicken saag",
    calories: 562,
    price:"23 ",

  },
  {
    name: "Paneer makhani",
    calories: 328,
    price:"17 ",
  },
  
];
function App() {
  return (
    <div className="container">
      <div className="row">
      <div className='col-md-4'>
      <h2 className="Title">Appetizers</h2>
      <Sort data={appetizer} /></div>
      <div className='col-md-4'>
      <h2 className="Title">Main courses</h2>
      <Sort data={main} />
      </div>
      <div className='col-md-4'>

      <h2 className="Title">Desserts</h2>
      <Sort data={desserts} />
      </div>
      

      </div>
    </div>
  );
}
export default App;
