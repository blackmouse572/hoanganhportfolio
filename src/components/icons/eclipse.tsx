import { motion } from "framer-motion";
import { FillAnimation } from "../../constants/animationConstants";

function Eclipse() {
  return (
    <svg width="944" height="944" viewBox="0 0 944 944" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        variants={FillAnimation}
        initial="hidden"
        animate="show"
        d="M725.309 336.958C576.997 262.064 291.811 274.734 145.423 340.27C78.7549 370.117 -44.1799 456.601 30.6264 538.251C43.8204 552.653 59.8582 564.353 76.4512 574.477C259.065 685.892 513.764 674.546 709.75 607.88C738.98 597.938 767.741 586.135 794.204 570.093C813.995 558.095 833.129 543.224 848.541 525.87C893.657 475.065 881.872 423.937 833.331 380.866C777.051 330.928 700.09 315.453 627.473 306.977C563.973 299.566 500.552 298.143 436.753 301.168C317.101 306.84 179.21 315.864 78.8572 384.138C35.0258 413.959 -12.0654 477.682 25.506 529.257C66.2195 585.144 162.217 603.24 226.786 615.033C400.973 646.848 676.584 631.073 835.247 547.584C852.356 538.581 869.689 530.19 884.995 518.351C897.088 508.996 908.667 498.329 918.713 486.785C989.899 404.974 831.051 353.534 775.03 344.701C598.795 316.911 337.958 276.808 175.654 350.733"
        stroke="#AD8058"
        stroke-width="8.71385"
        stroke-miterlimit="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={FillAnimation}
        initial="hidden"
        animate="show"
        d="M107.9 414.5C127.643 414.5 143.648 394.577 143.648 370C143.648 394.577 159.653 414.5 179.397 414.5C159.653 414.5 143.648 434.423 143.648 459C143.648 434.423 127.643 414.5 107.9 414.5Z"
        fill="#E55733"
      />
      <motion.path
        variants={FillAnimation}
        initial="hidden"
        animate="show"
        d="M734.1 414.5C754.287 414.5 770.652 394.577 770.652 370C770.652 394.577 787.017 414.5 807.203 414.5C787.017 414.5 770.652 434.423 770.652 459C770.652 434.423 754.287 414.5 734.1 414.5Z"
        fill="#E55733"
      />
    </svg>
  );
}

export default Eclipse;