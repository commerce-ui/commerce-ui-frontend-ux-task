import { FC } from 'react'
import styled from 'styled-components'
import { mq } from '../../styles.config'

const StyledContainer = styled.div`
  margin: 0 8vw;
`

const Container: FC = ({ children }) => <StyledContainer>{children}</StyledContainer>

export default Container
