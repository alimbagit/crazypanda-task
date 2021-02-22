import styled from "styled-components";
import { Container, ContainerProps } from "@material-ui/core";
import { Link as MyLink } from "react-router-dom";

export const ContentWrapper = styled(Container).attrs(
  (props: ContainerProps) => ({
    maxWidth: "md",

    ...props,
  })
)`
  margin: 0 auto 0 auto;
`;

export const Link = styled(MyLink)`
  outline: none;
  text-decoration: none;
`;
