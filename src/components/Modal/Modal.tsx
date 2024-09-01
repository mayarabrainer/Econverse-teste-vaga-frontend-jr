import React, { useState } from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  productName: string;
  image: string;
  price: number;
  description: string;
  onClose: () => void;
}

const Modal = ({ productName, image, price, description, onClose }: ModalProps) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <div className={styles.modalBody}>
          <img src={image} alt="Product" className={styles.modalImage} />
          <div className={styles.modalDetails}>
            <h3 className={styles.productTitle}>{productName}</h3>
            <p className={styles.productPrice}>{`R$ ${price.toFixed(2)}`}</p>
            <p className={styles.productDescription}>
              {description}
            </p>
            <p className={styles.moreDetails}>Veja mais detalhes do produto</p>
            <div className={styles.quantityControl}>
              <button onClick={decreaseQuantity}>
                <img src="../assets/minus.png" alt="Imagem do botão"/>
              </button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>
                <img src="../assets/plus.png" alt="Imagem do botão"/>
              </button>
            </div>
            <button className={styles.buyButton}>COMPRAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
