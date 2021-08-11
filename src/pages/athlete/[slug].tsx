import client from 'graphql/client'
import {
  GetAthleteBySlugQuery,
  GetAthletesQuery
} from 'graphql/generated/graphql'
import { GET_ATHLETES, GET_ATHLETE_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import AthletesTemplate, { AthletesTemplateProps } from 'templates/Athletes'

export default function Place({ athtele }: AthletesTemplateProps) {
  const router = useRouter()

  // retorna um loading, qq coisa enquanto está sendo criada a página
  if (router.isFallback) return null

  return <AthletesTemplate athtele={athtele} />
}

export const getStaticPaths = async () => {
  const { athteles } = await client.request<GetAthletesQuery>(GET_ATHLETES, {
    first: 3
  })

  const paths = athteles.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { athtele } = await client.request<GetAthleteBySlugQuery>(
    GET_ATHLETE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!athtele) return { notFound: true }

  return {
    props: {
      athtele
    }
  }
}
