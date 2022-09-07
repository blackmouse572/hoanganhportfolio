import styled from "styled-components";

type FlexProps = {
  flexDirection?: "row" | "column";
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  alignContent?: "flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around";
  wrap?: "wrap" | "nowrap";
  flex?: number;
  width?: string;
  height?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  children: React.ReactNode;
  maxWidth?: string;
  maxHeight?: string;
  position?: "absolute" | "relative" | "fixed";
  pX?: string;
  pY?: string;
  pTop?: string;
  pBottom?: string;
  pLeft?: string;
  pRight?: string;
  p?: string;
  overflow?: "auto" | "hidden" | "scroll" | "visible" | "inherit" | "clip";
};
function Flex(props: FlexProps) {
  const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${props.flexDirection || "row"};
    align-items: ${props.alignItems || "flex-start"};
    justify-content: ${props.justifyContent || "flex-start"};
    width: ${props.width || "100%"};
    height: ${props.height || "100%"};
    background-color: ${props.backgroundColor || "transparent"};
    background-image: url(${props.backgroundImage || ""});
    max-width: ${props.maxWidth || "100%"};
    max-height: ${props.maxHeight || "100%"};
    overflow: ${props.overflow || "clip"};
    position: ${props.position || "relative"};
    padding-left: ${props.pLeft || props.pX || "0"};
    padding-right: ${props.pRight || props.pX || "0"};
    padding-top: ${props.pTop || props.pY || "0"};
    padding-bottom: ${props.pBottom || props.pY || "0"};

    padding: ${props.p || ""};
  `;
  return <FlexContainer>{props.children}</FlexContainer>;
}

export default Flex;
