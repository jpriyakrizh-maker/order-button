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

        {/* TRUCK */}
        {isOrdering && (
          <motion.div
            key="truck"
            className="truck-wrapper"
            initial={{ x: 0 }}
            animate={{ x: 250 }}
            transition={{
              duration: 2.5,
              ease: "linear",
            }}
          >
            <svg
              className="truck-svg"
              viewBox="0 0 100 60"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Truck Body */}
              <rect
                x="10"
                y="20"
                width="52"
                height="27"
                rx="3"
                fill="#00ffe1"
              />

              {/* Truck Cabin */}
              <path
                d="M62 28H77L90 39V47H62Z"
                fill="#ff4fd8"
              />

              {/* Window */}
              <path
                d="M66 30H76L83 38H66Z"
                fill="#111827"
              />

              {/* Parcel */}
              <rect
                x="23"
                y="27"
                width="25"
                height="16"
                rx="2"
                fill="#c58b4a"
                stroke="#ffffff"
                strokeWidth="1.5"
              />

              {/* Parcel Tape */}
              <path
                d="M35.5 27V43"
                stroke="#ffdf8a"
                strokeWidth="3"
              />

              {/* Back Wheel */}
              <circle
                cx="25"
                cy="48"
                r="8"
                fill="#111"
                stroke="#ffffff"
                strokeWidth="2"
              />

              {/* Front Wheel */}
              <circle
                cx="76"
                cy="48"
                r="8"
                fill="#111"
                stroke="#ffffff"
                strokeWidth="2"
              />

              {/* Wheel Centers */}
              <circle
                cx="25"
                cy="48"
                r="2.5"
                fill="#00ffe1"
              />

              <circle
                cx="76"
                cy="48"
                r="2.5"
                fill="#00ffe1"
              />

              {/* Front Light */}
              <circle
                cx="88"
                cy="41"
                r="2"
                fill="#ffffff"
              />

              {/* Road */}
              <path
                d="M5 57H95"
                stroke="#555"
                strokeWidth="2"
                strokeLinecap="round"
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
