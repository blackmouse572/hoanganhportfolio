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
  backgroundColor?: string;
  backgroundImage?: string;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
  position?: "absolute" | "relative";
  overflow?: "auto" | "hidden" | "scroll" | "visible" | "inherit" | "clip";
};

const Container = (props: Props) => {
  const Container = styled.div`
    width: ${props.width || ""};
    height: ${props.height || ""};
    background-color: ${props.backgroundColor || "transparent"};
    background-image: url(${props.backgroundImage || ""});
    max-width: ${props.maxWidth || "100%"};
    max-height: ${props.maxHeight || "100%"};
    overflow: ${props.overflow || "visible"};
    position: ${props.position || "relative"};
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
  `;

  return <Container>{props.children}</Container>;
};

export default Container;
