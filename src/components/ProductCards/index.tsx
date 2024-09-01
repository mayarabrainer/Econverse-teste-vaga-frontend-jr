"use client";

import { useState, useEffect } from "react";
import ProductCard, { toMoney, ProductCardProps } from "./ProductCard";
import styles from "./ProductCards.module.scss";

const url =
  "https://cors-anywhere.herokuapp.com/https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

interface Product {
  photo: string;
  productName: string;
  price: number;
}

const mapProducts = (products: Product[]): ProductCardProps[] =>
  products.map((item, index) => ({
    id: index.toString(),
    image: item.photo,
    title: item.productName,
    price: item.price,
    discountPrice: item.price * 0.85, 
    obs: `ou 2x de ${toMoney(item.price / 2)} sem juros`,
  }));

export default () => {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = 4;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(({ products: items }) => setProducts(mapProducts(items)));
  }, []);

  const handleNext = () => {
    if (currentIndex + productsPerPage < products.length) {
      setCurrentIndex(currentIndex + productsPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - productsPerPage);
    }
  };

  return (
    <div className={styles.carouselWrapper}>
      <div onClick={handlePrevious} className={styles.arrow}>
        <img src="/assets/Vector-esquerda.png" alt="Previous" />
      </div>
  
      <div className={styles.cardsVitrine}>
        <div className={styles.productsContainer}>
          {products
            .slice(currentIndex, currentIndex + productsPerPage)
            .map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                discountPrice={product.discountPrice}
                obs={product.obs}
              />
            ))}
        </div>
      </div>
  
      <div onClick={handleNext} className={styles.arrowRight}>
        <img src="/assets/Vector-direita.png" alt="Next" />
      </div>
    </div>
  );
}
