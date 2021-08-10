import dynamic from 'next/dynamic'

import LinkWrapper from 'components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

import * as S from './styles'

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <S.Wrapper>
        <LinkWrapper href="/about">
          <InfoOutline size={32} aria-label="About" />
        </LinkWrapper>
      </S.Wrapper>
      <Map places={places} />
    </>
  )
}
