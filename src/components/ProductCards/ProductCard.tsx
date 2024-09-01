import React, { useState } from 'react';
import styles from './ProductCards.module.scss';
import Modal from '../Modal/Modal';

export interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  discountPrice: number;
  obs: string;
}

export const toMoney = (value: number) =>
  new Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(value);

const ProductCard = ({
  id,
  image,
  title,
  price,
  discountPrice,
  obs,
}: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div key={id} className={styles.cardVitrine}>
      <img
        src={image}
        alt={title}
        className={styles.productImage}
        onClick={openModal}
      />
      <h3>{title}</h3>
      <p>
        <s>{toMoney(price)}</s>
      </p>
      <p>
        <b>{toMoney(discountPrice)}</b>
      </p>
      <p>{obs}</p>
      <span>Frete grátis</span>
      <button>COMPRAR</button>
      {isModalOpen && (
        <Modal
          productName={title}
          image={image}
          price={discountPrice}
          description={obs}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ProductCard;
