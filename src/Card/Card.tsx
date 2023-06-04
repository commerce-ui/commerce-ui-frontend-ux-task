import { FC, useEffect, useRef } from 'react'
import { CardProps } from './types'
import Image from 'next/image'
import styled from 'styled-components'
import CtaLink from '../CtaLink'
import Video from './Video'

const Root = styled.div`
  position: relative;
  display: grid;
`
const ImageWrap = styled.div`
  grid-column: 1;
  grid-row: 1;

  video {
    width: 100%;
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
        {media.resource_type === 'image' && <Image {...media} />}

        {media.resource_type === 'video' && (
            <Video media={media} />
        )}
      </ImageWrap>
      <ContentWrap>
        <CtaLink href={href} label={title} />
      </ContentWrap>
    </Root>
  )
}

export default Card
