import { motion } from "framer-motion";
import { FillAnimation } from "../../constants/animationConstants";

function WindLine() {
  return (
    <svg width="286" height="346" viewBox="0 0 286 346" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        variants={FillAnimation}
        initial={"hidden"}
        animate="show"
        d="M-16.17 172.355C8.42964 144.671 39.9799 138.668 72.0556 134.084C112.092 128.362 152.946 124.849 182.125 84.1413"
        stroke="#AD8058"
        stroke-width="24.5735"
        stroke-miterlimit="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={FillAnimation}
        initial={"hidden"}
        animate="show"
        d="M-22.5347 246.997C-0.589913 212.312 32.7691 190.786 73.113 184.276C94.2222 180.871 115.862 182.106 136.755 177.046C183.823 165.643 226.532 134.661 245.013 89.1493"
        stroke="#AD8058"
        stroke-width="24.5735"
        stroke-miterlimit="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={FillAnimation}
        initial={"hidden"}
        animate="show"
        d="M183.708 207.779C168.475 218.629 151.783 227.148 133.144 230.292C96.0225 236.55 56.6229 232.721 29.7733 264.27"
        stroke="#AD8058"
        stroke-width="24.5735"
        stroke-miterlimit="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default WindLine;
