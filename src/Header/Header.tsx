import { FC } from 'react'
import styled from 'styled-components'

const Root = styled.div`
  height: 70px;
  background: white;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.18);
`

const Header: FC = () => {
  return <Root></Root>
}

export default Header
