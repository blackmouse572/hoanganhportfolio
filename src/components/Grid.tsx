import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
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
  cols?: number;
  rows?: number;
  gap?: string;
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
  alignItems?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
};

const Grid = (props: Props) => {
  const Grid = styled.div`
    width: ${props.width || ""};
    height: ${props.height || ""};
    display: grid;
    gap: ${props.gap || "0"};
    padding-left: ${props.pLeft || "0" || props.pX};
    padding-right: ${props.pRight || "0" || props.pX};
    padding-top: ${props.pTop || "0" || props.pY};
    padding-bottom: ${props.pBottom || "0" || props.pY};
    padding: ${props.p || ""};
    margin-left: ${props.mLeft || "0" || props.mX};
    margin-right: ${props.mRight || "0" || props.mX};
    margin-top: ${props.mTop || "0" || props.mY};
    margin-bottom: ${props.mBottom || "0" || props.mY};
    margin: ${props.m || ""};
    justify-content: ${props.justifyContent || "flex-start"};
    align-items: ${props.alignItems || "flex-start"};
    grid-template-columns: repeat(${props.cols || "auto"}, 1fr);
    grid-template-rows: repeat(${props.rows || "auto"}, 1fr);
  `;

  return <Grid>{props.children}</Grid>;
};

export default Grid;
