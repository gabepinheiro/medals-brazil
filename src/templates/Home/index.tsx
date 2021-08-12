import dynamic from 'next/dynamic'

import LinkWrapper from 'components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

import * as S from './styles'
import { NextSeo } from 'next-seo'

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        description="Interactive map showing the Brazilian states/cities represented by Brazilian athletes who won medals at the Olympic Games in Tokyo."
        canonical="https://medals-brazil.vercel.app"
        openGraph={{
          url: 'https://medals-brazil.vercel.app',
          title: 'Medals Brazil - Olympic Games in Tokyo 2020',
          images: [
            {
              url: 'https://medals-brazil.vercel.app/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Medals Brazil - Olympic Games in Tokyo 2020'
            }
          ],
          site_name: 'Medals Brazil - Olympic Games in Tokyo 2020'
        }}
      />
      <S.Wrapper>
        <LinkWrapper href="/about">
          <InfoOutline size={32} aria-label="About" />
        </LinkWrapper>
      </S.Wrapper>
      <Map places={places} />
    </>
  )
}
