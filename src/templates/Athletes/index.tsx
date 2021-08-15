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
  athlete: {
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

export default function AthletesTemplate({ athlete }: AthletesTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${athlete.name} - Medals Brazil`}
        canonical="https://medals-brazil.vercel.app"
        openGraph={{
          url: 'https://medals-brazil.vercel.app',
          title: `${athlete.name} - Medals Brazil`,
          images: [
            {
              url: athlete.image.url,
              width: athlete.image.width,
              height: athlete.image.height,
              alt: `${athlete.name}`
            }
          ]
        }}
      />
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to Map" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{athlete?.name}</S.Heading>

          <S.Gallery>
            <Image
              key={`photo-${athlete.id}`}
              src={athlete.image.url}
              alt={athlete.name}
              width={athlete.image.width}
              height={athlete.image.height}
              quality={75}
            />
          </S.Gallery>

          <S.SectionAbout>
            <h2>About</h2>
            <S.Body
              dangerouslySetInnerHTML={{ __html: athlete.about?.html || '' }}
            />
          </S.SectionAbout>

          <S.SectionModality>
            <h2>Modality</h2>

            <S.Body>
              <p>
                <strong>{athlete.modality}</strong>
              </p>
            </S.Body>
          </S.SectionModality>

          <S.SectionMedal>
            <h2>Medal</h2>
            <S.Body>
              <Image
                src={`/img/${athlete.medal}.png`}
                alt={`${athlete.medal} medal`}
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
