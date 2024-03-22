import React from 'react';
import { useCart } from 'react-use-cart';

const Itemcard = props => {
  const { addItem } = useCart();

  const style = {
    card: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      maxWidth: '300px',
      margin: 'auto',
      marginBottom: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    img: {
      width: '100%',
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      margin: '10px 0',
    },
    desc: {
      fontSize: '1rem',
      marginBottom: '20px',
    },
    button: {
      backgroundColor: '#007bff',
      color: '#ffffff',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 20px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex">
      {/* Utilizează clasa d-flex pentru a face cardurile să fie afișate unul lângă altul */}
      <div className="card h-100" style={style.card}>
        <img
          src={props.img}
          className="card-img-top"
          alt={props.title}
          style={style.img}
        />
        <div className="card-body text-center">
          <h5 className="card-title" style={style.title}>
            {props.title}
          </h5>
          <h5 className="card-title" style={style.desc}>
            ${props.price}
          </h5>
          <p className="card-text" style={style.desc}>
            {props.desc}
          </p>
          <button
            className="btn btn-success"
            onClick={() => addItem({ ...props.item, id: props.item.id })}
            style={style.button}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Itemcard;
