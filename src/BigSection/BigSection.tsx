import { FC } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import bigImage from '../../public/assets/court.jpeg'
import Container from '../Container'
import CtaLink from '../CtaLink'
import { mq } from '../../styles.config'

const Root = styled.div`
  position: relative;
  display: grid;
  .hideOnSmall {
    display: none;
  }
  height: 100vh;
  max-height: 640px;
  ${mq['large']} {
    height: auto;
    max-height: none;
    .hideOnLarge {
      display: none;
    }
    .hideOnSmall {
      display: block;
    }
  }
`
const Background = styled.a`
  grid-column: 1;
  grid-row: 1;
`
const ContentWrap = styled.div`
  grid-column: 1;
  grid-row: 1;
  z-index: 1;
  color: white;
  place-self: center start;
  h1 {
    font-size: 60px;
  }
  h1,
  p {
    max-width: 580px;
  }
`

const BigSection: FC = () => {
  return (
    <Root>
      <Background href={'/ivy'}>
        <Image {...bigImage} alt={'People on tennis court'} className={'hideOnSmall'} />
        <Image
          {...bigImage}
          alt={'People on tennis court'}
          className={'hideOnLarge'}
          layout={'fill'}
          objectFit={'cover'}
        />
      </Background>
      <ContentWrap>
        <Container>
          <h1>HALLS OF IVY</h1>
          <CtaLink label={'Explore More'} href={'/ivy'} />
        </Container>
      </ContentWrap>
    </Root>
  )
}

export default BigSection
