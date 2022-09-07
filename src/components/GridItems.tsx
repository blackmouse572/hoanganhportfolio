import { motion } from "framer-motion";
import styled from "styled-components";

type Props = {
  src: string;
  variants?: any;

  pX?: string;
  pY?: string;
  pTop?: string;
  pBottom?: string;
  pLeft?: string;
  pRight?: string;
  p?: string;
  mX?: string;
  mY?: string;
  mTop?: string;
  mBottom?: string;
  mLeft?: string;
  mRight?: string;
  m?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;

  colSpan?: number;
  rowSpan?: number;
  colStart?: number;
  colEnd?: number;
  rowStart?: number;
  rowEnd?: number;
};

export default function GridItems(props: Props) {
  const ColItem = styled(motion.div)`
    width: ${props.width || ""};
    height: ${props.height || ""};
    max-width: ${props.maxWidth || "100%"};
    max-height: ${props.maxHeight || "100%"};
    overflow: visible;
    position: relative;
    padding-left: ${props.pLeft || props.pX || "0"};
    padding-right: ${props.pRight || props.pX || "0"};
    padding-top: ${props.pTop || props.pY || "0"};
    padding-bottom: ${props.pBottom || props.pY || "0"};
    padding: ${props.p || ""};
    margin-left: ${props.mLeft || "0" || props.mX};
    margin-right: ${props.mRight || "0" || props.mX};
    margin-top: ${props.mTop || "0" || props.mY};
    margin-bottom: ${props.mBottom || "0" || props.mY};
    margin: ${props.m || ""};
    min-height: ${props.minHeight || ""};
    min-width: ${props.minWidth || ""};
    grid-column: span ${props.colSpan || "auto"} / span ${props.colSpan || "auto"};
    grid-row: span ${props.rowSpan || "auto"} / span ${props.rowSpan || "auto"};
    grid-column-start: ${props.colStart || ""};
    grid-row-start: ${props.rowStart || ""};
    grid-column-end: ${props.colEnd || ""};
    grid-row-end: ${props.rowEnd || ""};
  `;
  const Image = styled.img`
    width: 100%;
    object-fit: cover;
  `;
  return (
    <ColItem
      layout
      key={props.src}
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1.6,
          ease: [0.6, 0.05, -0.01, 0.9],
        },
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        scale: 1.1,
        z: 1,
        transition: {
          duration: 0.4,
          ease: "easeIn",
        },
      }}>
      <Image src={props.src} alt="" />
    </ColItem>
  );
}
