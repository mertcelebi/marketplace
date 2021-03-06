import styled, { css } from "react-emotion";
import { basePadding, screenWidth } from "../styles";

const spacerSize = (pads, props) => {
  return css`
    ${props.inline ? "width:" : "height:"} ${basePadding * pads}px;
  `;
};

export const Spacer = styled("div")`
  ${props => {
    if (props.big) return spacerSize(2, props);
    if (props.small) return spacerSize(0.5, props);
    if (props.size) return spacerSize(props.size, props);
    return spacerSize(1, props);
  }};
  ${props =>
    props.inline &&
    `
    display: inline-block;
  `};
`;

export const Wrapper = styled("div")`
  width: 95%;
  max-width: ${screenWidth}px;
  margin: auto;
`;
