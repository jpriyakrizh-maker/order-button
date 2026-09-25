import { motion, AnimatePresence } from "framer-motion";

function OrderButton({
  isOrdering,
  success,
  onClick,
}) {
  return (
    <button
      className="order-button"
      onClick={onClick}
      disabled={isOrdering || success}
    >
      <AnimatePresence mode="wait">

        {/* ORDER NOW */}
        {!isOrdering && !success && (
          <motion.span
            key="order-now"
            className="order-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            ORDER NOW
          </motion.span>
        )}

        {/* BIKE */}
        {isOrdering && (
          <motion.div
            key="bike"
            className="bike-wrapper"
            initial={{ x: 0 }}
            animate={{ x: 176 }}
            transition={{
              duration: 3.5,
              ease: "linear",
            }}
          >
            <svg
              className="bike-svg"
              viewBox="0 0 100 60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="22"
                cy="45"
                r="10"
                fill="none"
                stroke="#ffffff"
                strokeWidth="4"
              />

              <circle
                cx="78"
                cy="45"
                r="10"
                fill="none"
                stroke="#ffffff"
                strokeWidth="4"
              />

              <path
                d="
                  M22 45
                  L38 25
                  L55 45
                  L22 45
                  M38 25
                  L68 25
                  L55 45
                  M55 45
                  L78 45
                  M68 25
                  L78 45
                "
                fill="none"
                stroke="#00ffe1"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M68 25L73 18H82"
                fill="none"
                stroke="#ff4fd8"
                strokeWidth="4"
                strokeLinecap="round"
              />

              <path
                d="M34 20H45"
                stroke="#ff4fd8"
                strokeWidth="4"
                strokeLinecap="round"
              />

              <circle
                cx="39"
                cy="13"
                r="5"
                fill="#ffffff"
              />

              <path
                d="M39 18L45 27L55 25"
                fill="none"
                stroke="#ffffff"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        )}

        {/* SUCCESS INSIDE SAME BUTTON */}
        {success && (
          <motion.span
            key="success"
            className="success-button-text"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            ✓ ORDER SUCCESS
          </motion.span>
        )}

      </AnimatePresence>
    </button>
  );
}

export default OrderButton;
