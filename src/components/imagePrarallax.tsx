import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import Flex from "./flex";

type Props = {};

const ImageContainer = (props: Props) => {
  const { scrollYProgress } = useScroll();
  const screenHeight = window.innerHeight;
  const ovalY = useTransform(scrollYProgress, [0.4, 0.7], [0, 80]);
  const imageY = useTransform(scrollYProgress, [0.2, 0.4], [0, 100]);
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      console.log("Page scroll: ", latest, "screenHeight: ", screenHeight);
    });
  });
  return (
    <Flex position="relative" justifyContent="center" overflow="visible" alignContent="center">
      <motion.img
        style={{
          margin: "3rem auto",
          y: imageY,
        }}
        src={"/assets/MYSELF.png"}
        alt="profile"
      />
      <motion.img
        src={"/assets/icons/oval.svg"}
        alt="oval icons"
        style={{
          position: "absolute",
          bottom: ovalY,
          left: "-3rem",
          width: "30%",
        }}
      />
    </Flex>
  );
};

export default ImageContainer;
