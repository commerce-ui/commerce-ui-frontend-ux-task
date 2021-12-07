import { FC } from 'react'
import styled from 'styled-components'
import Container from '../Container'

const Root = styled.div`
  position: relative;
  display: grid;
`

const TextSection: FC = () => {
  return (
    <Root>
      <Container>
        <p>
          The adidas brand has a long history and deep-rooted connection with sport. Its broad and diverse portfolio in
          both the Sport Performance and Sport Inspired categories ranges from major global sports to regional grassroot
          events and local sneaker culture. This has enabled adidas to transcend cultures and become one of the most
          recognized, credible, and iconic brands both on and off the field of play.
        </p>
        <p>
          Key to our success and the execution of our strategy ‘Own the Game’, are our people and our culture. They
          bring our identity to life, defined by our purpose, mission, and attitude.
        </p>
      </Container>
    </Root>
  )
}

export default TextSection
