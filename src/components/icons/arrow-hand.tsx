import { motion } from "framer-motion";
import { FillAnimation } from "../../constants/animationConstants";

function ArrowHand() {
  return (
    <svg width="183" height="183" viewBox="0 0 183 183" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        variants={FillAnimation}
        initial="hidden"
        animate="show"
        d="M117.018 108.318C117.656 115.684 118.51 133.673 117.285 135.19C115.56 137.324 112.536 138.091 110.017 138.812C110.095 144.975 110.061 151.166 110.297 157.326C110.42 160.55 110.624 165.043 109.216 168.031C107.772 171.094 101.384 174.167 99.6791 169.612C98.8477 167.39 98.9571 164.819 98.7873 162.486C98.4441 157.769 98.3502 153.04 98.1852 148.316C96.4494 151.199 91.449 151.516 89.2585 148.991C88.446 148.054 88.2341 146.762 88.1023 145.562C85.1286 149.644 80.5768 145.978 78.9322 142.601C78.1276 142.896 77.3554 143.214 76.4964 143.316C72.825 143.753 70.7178 140.026 70.1406 136.915C69.6399 134.218 69.1535 118.337 69.0996 110.192"
        stroke="white"
        stroke-width="4.58579"
        stroke-miterlimit="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={FillAnimation}
        initial="hidden"
        animate="show"
        d="M110.039 138.843C110.084 134.719 109.371 130.577 109.44 126.443"
        stroke="white"
        stroke-width="4.58579"
        stroke-miterlimit="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={FillAnimation}
        initial="hidden"
        animate="show"
        d="M118.835 97.2824C119.064 100.836 119.045 104.225 119.063 107.678C115.207 108.443 111.329 108.074 107.439 108.108C103.726 108.141 100.013 108.559 96.2959 108.631C86.5769 108.817 76.8268 109.864 67.0966 109.741C67.0794 107.031 66.8279 102.934 66.6905 99.4281"
        stroke="white"
        stroke-width="4.58579"
        stroke-miterlimit="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={FillAnimation}
        initial="hidden"
        animate="show"
        d="M120.002 33.7021C120.699 44.4131 123.144 84.0684 121.623 97.3433C111.41 96.9473 101.264 98.424 91.0858 98.6313C81.6192 98.8241 72.0202 98.8034 62.5614 99.3768C63.4947 94.223 60.6888 47.2904 61.3259 33.7985"
        stroke="white"
        stroke-width="4.58579"
        stroke-miterlimit="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default ArrowHand;
