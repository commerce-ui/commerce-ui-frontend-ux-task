import { FC, useEffect, useRef } from 'react'
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

  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const videoRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      
      if(entry.isIntersecting){
        ref.current?.play()
      }else{
        ref.current?.pause()
      }
    }, { threshold: 0.75 });

    observer.observe(videoRef);

    return () => observer.unobserve(videoRef);
  }, [ref])
  
  return (
    <Root>
      <ImageWrap>
        {media.resource_type === 'image' && <Image {...media} />}

        {media.resource_type === 'video' && (
            <video ref={ref} muted loop playsInline >
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
