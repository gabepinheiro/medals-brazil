import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline'

import * as S from './styles'
import { NextSeo } from 'next-seo'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <S.Content>
    <NextSeo
      title={`${heading} - Medals Brazil`}
      description="Interactive map showing the Brazilian states/cities represented by Brazilian athletes who won medals at the Olympic Games in Tokyo."
      canonical="https://medals-brazil.vercel.app"
      openGraph={{
        url: 'https://medals-brazil.vercel.app',
        title: 'Medals Brazil - Olympic Games in Tokyo 2020',
        images: [
          {
            url: 'https://medals-brazil.vercel.app/img/cover.png',
            width: 1366,
            height: 768,
            alt: 'Medals Brazil - Olympic Games in Tokyo 2020'
          }
        ],
        site_name: 'Medals Brazil - Olympic Games in Tokyo 2020'
      }}
    />
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>{heading}</S.Heading>

    <S.Body>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </S.Body>
  </S.Content>
)

export default PageTemplate
