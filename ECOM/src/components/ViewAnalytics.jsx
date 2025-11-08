import { useState, useEffect } from "react";

const ViewAnalytics = () => {
  const [analytics, setAnalytics] = useState({ totalProducts: 0, totalUsers: 0, totalOrders: 0 });

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const users = JSON.parse(localStorage.getItem("users"))||  [];
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    setAnalytics({
      totalProducts: products.length,
      totalUsers: users.length,
      totalOrders: orders.length,
    });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Analytics</h2>
      <table className="w-full border text-center">
        <thead className="bg-gray-200">
          <tr><th>Category</th><th>Count</th></tr>
        </thead>
        <tbody>
          <tr><td>Total Products</td><td>{analytics.totalProducts}</td></tr>
          <tr><td>Total Users</td><td>{analytics.totalUsers}</td></tr>
          <tr><td>Total Orders</td><td>{analytics.totalOrders}</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViewAnalytics;