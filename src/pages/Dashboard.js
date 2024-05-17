// simple button dashboard
// const Dashboard = () => {
//     return (
//         <div className="dashboard">
//             <h1>Dashboard</h1>
//         </div>
//     );
// }

// export default Dashboard;

import { Routes, Link, Route, useParams } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="">Profile</Link>
        </li>
        <li>
          <Link to="orders">Orders</Link>
        </li>
        <li>
          <Link to="quotes">Quotes</Link>
        </li>
      </ul>
      <div className="dashboard">
        <Routes>
          <Route path="/" element={<Profile />}></Route>
          <Route path="orders/*" element={<Orders />}></Route>
          <Route path="quotes" element={<Quotes />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export const Profile = () => {
  return <h2>Profile</h2>;
};

export const Orders = () => {
  const orderIds = ["10001", "10002", "10003"];
  return (
    <>
      <h2>Orders</h2>
      <ul>
        {orderIds.map((orderId) => (
          <li key={orderId}>
            <Link to={`orderdetails/${orderId}`}>Voir commande #{orderId}</Link>
            {/* Link ai dettagli dell'ordine */}
          </li>
        ))}
      </ul>
      <Routes>
        <Route path="orderdetails/:orderId" element={<OrderDetails />} />
      </Routes>
   
    </>
  );
};

export const OrderDetails = () => {
  const {orderId} = useParams();
  return <h2>Details of order {orderId}</h2>;
};

export const Quotes = () => {
  return <h2>Quotes</h2>;
};

export default Dashboard;
