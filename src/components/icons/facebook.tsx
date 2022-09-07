import { motion } from "framer-motion";
import { FillAnimation } from "../../constants/animationConstants";

type Props = {};

const FacbookIcon = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 90 90" stroke-width="4">
      <g transform="matrix(0.9,0,0,0.9,4.512400305775564,4.47700181911744)">
        <motion.path
          variants={FillAnimation}
          initial="hidden"
          whileInView="show"
          fill="#ffffff"
          fill-rule="evenodd"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="1.5"
          d="M70.5845 76.4082C81.268 74.0035 79.1389 59.2053 78.9567 51.1212C78.9045 48.8119 78.8968 46.5019 78.8223 44.1925C78.7312 41.3657 78.5811 38.5418 78.4197 35.7185C78.2082 32.0179 77.891 28.4056 77.3053 24.7426C77.0146 22.9264 76.6932 21.0635 75.8982 19.3885C72.0606 11.3037 62.5143 12.0058 54.9992 11.7554C47.345 11.5008 39.6754 11.412 32.017 11.6026C27.0978 11.7257 22.1878 11.5057 17.8168 13.8123C12.4016 16.6704 11.8027 22.8152 11.5015 28.3639C10.8741 39.9161 10.5806 52.2269 12.1874 63.7131C13.0443 69.8405 15.0907 75.6023 21.856 77.006C29.2702 78.5446 37.019 78.0245 44.4479 77.6044C50.9628 77.2364 64.0676 76.8603 70.5845 76.4082Z"
          clip-rule="evenodd"></motion.path>
        <motion.path
          variants={FillAnimation}
          initial="hidden"
          whileInView="show"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="1.5"
          d="M46.3873 77.5179C45.7557 64.2371 42.4474 49.5256 44.8833 36.354C46.5131 27.5409 54.7956 24.3127 62.6342 29.2249"></motion.path>
        <motion.path
          variants={FillAnimation}
          initial="hidden"
          whileInView="show"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="1.5"
          d="M35.6324 45.9408C42.3949 45.7795 49.1512 45.5319 55.9095 45.2711"></motion.path>
      </g>
    </svg>
  );
};

export default FacbookIcon;
