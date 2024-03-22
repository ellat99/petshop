import React from 'react';
import { useCart } from 'react-use-cart';

const styles = {
  cartTable: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableCell: {
    border: '1px solid #dddddd',
    padding: '8px',
    textAlign: 'left',
  },
  tableHeader: {
    backgroundColor: '#f2f2f2',
  },
  cartImage: {
    maxWidth: '100px',
  },
  button: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
    marginRight: '5px',
  },
};

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) {
    return <h1 className="text-center">Your cart is empty</h1>;
  }

  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>
            Cart ({totalUniqueItems}) Total Items: ({totalItems})
          </h5>
          <table style={styles.cartTable}>
            <thead>
              <tr>
                <th style={{ ...styles.tableCell, ...styles.tableHeader }}>
                  Image
                </th>
                <th style={styles.tableCell}>Title</th>
                <th style={styles.tableCell}>Price</th>
                <th style={styles.tableCell}>Quantity</th>
                <th style={styles.tableCell}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={item.img}
                      alt={item.title}
                      style={styles.cartImage}
                    />
                  </td>
                  <td style={styles.tableCell}>{item.title}</td>
                  <td style={styles.tableCell}>${item.price}</td>
                  <td style={styles.tableCell}>{item.quantity}</td>
                  <td style={styles.tableCell}>
                    <button
                      style={styles.button}
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      style={styles.button}
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button
                      style={styles.button}
                      onClick={() => removeItem(item.id)}
                    >
                      Remove Item
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
          <h2>Total Price : ${cartTotal}</h2>
        </div>
        <div className="col-auto">
          <button
            className="btn btn-danger m-2"
            onClick={() => emptyCart()}
            style={styles.button}
          >
            Clear Cart
          </button>
          <button className="btn btn-primary m-2" style={styles.button}>
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
