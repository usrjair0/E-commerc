import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const ProductDetail = ({ data }) => {
  return (
    <div className="product-detail">
      <div className="product-detail__left-side">
        <div className="product-detail__card">
          <img src={`https://e-commerc-blue.vercel.app/${data.imgPath}`} alt={data.title} />
          <p>{data.title}</p>
        </div>
        <div className="product-detail__description">
          <h1>Descrição</h1>
          <p>{data.title}</p>
        </div>
      </div>
      <div className="product-detail__right-side">
        <h1>Informações Sobre o Produto</h1>
        <h2>{data.price}</h2>
        <p>
          Cor:{" "}
          {data.colors.length === 1
            ? data.colors.map((color, index) => (
                <span key={index}>{color}</span>
              ))
            : data.colors.map((color, index) =>
                index + 1 === data.colors.length ? (
                  <span key={index}>{color}</span>
                ) : (
                  <span key={index}>{color}, </span>
                )
              )}
        </p>
        <div className="product-detail__cube-colors">
          {data.colors.map((color, index) => (
            <div
              style={{
                width: "64px",
                height: "60px",
                border: "1px solid black",
                borderRadius: "10px",
                backgroundColor: color,
              }}
              key={index}
            ></div>
          ))}
        </div>
        <p>Tamanho:</p>
        <div className="product-detail__sizes">
          {data.sizes.map((size, index) => (
            <span
              style={{
                width: "55px",
                height: "58px",
                borderRadius: "10px",
                border: "1px solid black",
                padding: "20px",
                textTransform: "uppercase",
                textAlign: "center",
              }}
              key={index}
            >
              {size}
            </span>
          ))}
        </div>
          <Link className="link" to={`/pay/${data.id}`}><button>Finalizar Compra</button></Link>
      </div>
    </div>
  );
};

export default ProductDetail;