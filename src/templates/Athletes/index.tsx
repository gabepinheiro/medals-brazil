import Image from 'next/image'

import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'
import { useRouter } from 'next/dist/client/router'
import { NextSeo } from 'next-seo'

type ImageProps = {
  url: string
  width: number
  height: number
}

export type AthletesTemplateProps = {
  athtele: {
    id: string
    name: string
    city: string
    about?: {
      html: string
    }
    modality: string
    medal: string
    image: ImageProps
  }
}

export default function AthletesTemplate({ athtele }: AthletesTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${athtele.name} - Medals Brazil`}
        canonical="https://medals-brazil.vercel.app"
        openGraph={{
          url: 'https://medals-brazil.vercel.app',
          title: `${athtele.name} - Medals Brazil`,
          images: [
            {
              url: athtele.url,
              width: athtele.width,
              height: athtele.height,
              alt: `${athtele.name}`
            }
          ]
        }}
      />
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to Map" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{athtele?.name}</S.Heading>

          <S.Gallery>
            <Image
              key={`photo-${athtele.id}`}
              src={athtele.image.url}
              alt={athtele.name}
              width={athtele.image.width}
              height={athtele.image.height}
              quality={75}
            />
          </S.Gallery>

          <S.SectionAbout>
            <h2>About</h2>
            <S.Body
              dangerouslySetInnerHTML={{ __html: athtele.about?.html || '' }}
            />
          </S.SectionAbout>

          <S.SectionModality>
            <h2>Modality</h2>

            <S.Body>
              <p>
                <strong>{athtele.modality}</strong>
              </p>
            </S.Body>
          </S.SectionModality>

          <S.SectionMedal>
            <h2>Medal</h2>
            <S.Body>
              <Image
                src={`/img/${athtele.medal}.png`}
                alt={`${athtele.medal} medal`}
                width={48}
                height={48}
                loading="lazy"
              />
            </S.Body>
          </S.SectionMedal>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
