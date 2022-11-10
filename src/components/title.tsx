import { motion, useScroll } from "framer-motion";
import styled from "styled-components";
import Password from "./icons/password";

type Props = {
  title: string;
};

export default function Title({ title }: Props) {
  const { scrollY } = useScroll();

  const Title = styled.h1`
    font-size: 6rem;
    font-weight: bold;
    color: "#5E616B";
    font-family: "Emilea";
    justify-self: flex-start;
  `;
  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        position: "relative",
      }}
    >
      <motion.span
        style={{
          rotate: scrollY,
          marginRight: "2rem",
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
          restDelta: 0.001,
        }}
      >
        <Password />
      </motion.span>
      <Title>{title}</Title>
      <motion.hr
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
        initial={{
          width: "0",
        }}
        whileInView={{
          width: "80%",
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.6,
          ease: [0.6, 0.01, -0.05, 0.9],
        }}
      />
    </motion.div>
  );
}
