import { useState } from "react";
import OrderButton from "./OrderButton";

function OrderCard() {
  const [isOrdering, setIsOrdering] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleOrder = () => {
    if (isOrdering || success) return;

    setIsOrdering(true);

    // Truck travels + stops for 1 second
    setTimeout(() => {
      setIsOrdering(false);
      setSuccess(true);

      // Keep success visible for 3 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }, 2800);
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
