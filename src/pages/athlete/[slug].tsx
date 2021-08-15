import client from 'graphql/client'
import {
  GetAthleteBySlugQuery,
  GetAthletesQuery
} from 'graphql/generated/graphql'
import { GET_ATHLETES, GET_ATHLETE_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import AthletesTemplate, { AthletesTemplateProps } from 'templates/Athletes'

export default function Place({ athlete }: AthletesTemplateProps) {
  const router = useRouter()

  // retorna um loading, qq coisa enquanto está sendo criada a página
  if (router.isFallback) return null

  return <AthletesTemplate athlete={athlete} />
}

export const getStaticPaths = async () => {
  const { athletes } = await client.request<GetAthletesQuery>(GET_ATHLETES, {
    first: 3
  })

  const paths = athletes.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { athlete } = await client.request<GetAthleteBySlugQuery>(
    GET_ATHLETE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!athlete) return { notFound: true }

  return {
    props: {
      athlete
    }
  }
}
