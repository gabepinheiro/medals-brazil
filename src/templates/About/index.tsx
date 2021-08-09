import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo dolorum
        maxime amet corrupti pariatur. Perspiciatis sunt aliquam, modi doloribus
        nesciunt vitae amet earum harum, facere sed labore. Iure, nostrum sunt!
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
