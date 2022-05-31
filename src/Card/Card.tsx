import { FC } from 'react'
import { CardProps } from './types'
import Image from 'next/image'
import styled from 'styled-components'
import CtaLink from '../CtaLink'

const Root = styled.div`
  position: relative;
  display: grid;
`
const ImageWrap = styled.div`
  grid-column: 1;
  grid-row: 1;
  position: relative;

  video {
    width: 100%;
    height: 100%;
  }
`

const ContentWrap = styled.div`
  grid-column: 1;
  grid-row: 1;
  z-index: 1;
  padding: 30px;
  place-self: center center;
`

const Card: FC<CardProps> = ({ title, href, media }) => {
  return (
    <Root>
      <ImageWrap>
        {media.resource_type === 'image' && <Image {...media} layout='fill' objectFit='cover' />}

        {media.resource_type === 'video' && (
          <video autoPlay muted loop playsInline>
            <source type={'video/' + media.format} src={media.src} />
          </video>
        )}
      </ImageWrap>
      <ContentWrap>
        <CtaLink href={href} label={title} />
      </ContentWrap>
    </Root>
  )
}

export default Card
