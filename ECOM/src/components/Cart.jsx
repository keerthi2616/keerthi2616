import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [checkoutDone, setCheckoutDone] = useState(false);
  const [invoiceData, setInvoiceData] = useState(null);

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const handleRemove = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updated));
    setCartItems(updated);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const totalPrice = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

    const invoice = {
      date: new Date().toLocaleString(),
      items: cartItems,
      total: totalPrice,
      invoiceNo: "INV" + Date.now(),
    };

    setInvoiceData(invoice);
    setCheckoutDone(true);

    // Clear cart
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  const handleDownloadInvoice = () => {
    if (!invoiceData) return;
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("🧾 Invoice", 15, 15);
    doc.setFontSize(12);
    doc.text(`Invoice No: ${invoiceData.invoiceNo}`, 15, 25);
    doc.text(`Date: ${invoiceData.date}`, 15, 32);

    let y = 45;
    doc.text("Product", 15, y);
    doc.text("Price", 90, y);
    doc.text("Qty", 130, y);
    doc.text("Subtotal", 160, y);
    y += 10;

    invoiceData.items.forEach((item) => {
      doc.text(item.name, 15, y);
      doc.text(`₹${item.price}`, 90, y);
      doc.text(`${item.quantity}`, 130, y);
      doc.text(`₹${(item.price * item.quantity).toFixed(2)}`, 160, y);
      y += 10;
    });

    y += 5;
    doc.text(`Total Amount: ₹${invoiceData.total.toFixed(2)}`, 15, y + 10);

    doc.save(`${invoiceData.invoiceNo}.pdf`);
  };

  const totalPrice = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-blue-500 p-4 text-white">
        <h1 className="text-xl font-bold">Your Cart</h1>
        <div>
          <button onClick={() => navigate("/logout")} className="hover:underline">
            Logout
          </button>
        </div>
      </nav>

      {!checkoutDone ? (
        <>
          <h2 className="text-2xl font-bold text-center mt-6">Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p className="text-center mt-4">Your cart is empty.</p>
          ) : (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border text-center bg-white shadow-md rounded">
                <thead className="bg-gray-200">
                  <tr>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img
                          src={`/images/${item.image}`}
                          alt={item.name}
                          className="w-16 h-16 object-cover mx-auto rounded"
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>₹{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-right mt-4 font-bold text-lg">
                Total: ₹{totalPrice.toFixed(2)}
              </div>
              <div className="text-center mt-6">
                <button
                  onClick={handleCheckout}
                  className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            🎉 Thank You for Your Purchase!
          </h2>
          <p className="text-gray-600 mb-6">
            Your payment has been processed successfully.
          </p>
          <button
            onClick={handleDownloadInvoice}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Download Invoice
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;