import styled from "styled-components";
import { theme } from "./theme.js";

const StyledBtn = styled.button`
  height: ${(props) => props.height || "100px"};
  width: ${(props) => props.width || "350px"};
  border: ${(props) => props.border || "10px solid " + theme.colors.blanc};
  background-color: ${(props) => props.backgroundColor || theme.colors.rouge};
  border-radius: ${(props) => props.borderRadius || "30px"};
  box-shadow: ${(props) =>
    props.boxShadow || "0px 4px 4px " + theme.colors.gris1};
  color: ${(props) => props.color || theme.colors.blanc};
  font-weight: ${(props) => props.fontWeight || "700"};
  font-size: ${(props) => props.fontSize || "38px"};
  line-height: ${(props) => props.lineHeight || "50px"};
`;

export default StyledBtn;
