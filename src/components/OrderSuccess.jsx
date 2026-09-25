import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OrderButton from "./OrderButton";

function OrderCard() {
  const [isOrdering, setIsOrdering] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleOrder = () => {
    if (isOrdering || success) return;

    setIsOrdering(true);

    setTimeout(() => {
      setIsOrdering(false);
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }, 3500);
  };

  return (
    <div className="order-area">
      <OrderButton
        isOrdering={isOrdering}
        success={success}
        onClick={handleOrder}
      />

      {success && (
        <div className="confetti-box">
          {Array.from({ length: 35 }).map((_, index) => (
            <span
              key={index}
              className={`paper paper-${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default OrderCard;
