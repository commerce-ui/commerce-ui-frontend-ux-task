import { FC } from 'react'
import styled from 'styled-components'

const StyledA = styled.a`
  position: relative;
  font-size: 12px;
  text-transform: uppercase;
  display: inline-flex;
  background: white;
  color: black;
  padding: 1em 1.5em 1em 1.75em;
  letter-spacing: 0.2em;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    border: 1px solid white;
    transform: translate(2px, 2px);
  }

  &:hover {
    transform: translate(-2px, -2px);
    &:before {
      transform: translate(4px, 4px);
    }
  }

  &:active {
    transform: translate(0px, 0px);
    &:before {
      transform: translate(2px, 2px);
    }
  }
`

const CtaLink: FC<{ label: string; href: string }> = ({ label, href }) => {
  return <StyledA href={href}>{label}</StyledA>
}

export default CtaLink
