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
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  lineHeight?: string;
  textAlign?: "left" | "center" | "right";
  textTransform?: "uppercase" | "lowercase" | "capitalize";
  textDecoration?: "none" | "underline" | "line-through";
  textShadow?: string;
  textOverflow?: "ellipsis" | "clip";
  whiteSpace?: "nowrap" | "pre" | "pre-wrap" | "pre-line" | "normal";
  overflow?: "visible" | "hidden" | "scroll" | "auto";
};

const Content = (props: Props) => {
  const Content = styled.p`
    width: ${props.width || ""};
    height: ${props.height || ""};
    color: ${props.color || ""};
    font-size: ${props.fontSize || ""};
    font-weight: ${props.fontWeight || ""};
    font-family: ${props.fontFamily || ""};
    line-height: ${props.lineHeight || ""};
    text-align: ${props.textAlign || "left"};
    text-transform: ${props.textTransform || "none"};

    text-decoration: ${props.textDecoration || "none"};
    text-shadow: ${props.textShadow || "none"};
    text-overflow: ${props.textOverflow || "ellipsis"};
    white-space: ${props.whiteSpace || "normal"};
    overflow: ${props.overflow || "visible"};

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
  `;

  return <Content>{props.children}</Content>;
};

export default Content;
