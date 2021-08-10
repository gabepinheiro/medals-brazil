import Image from 'next/image'

type ImageProps = {
  url: string
  width: number
  height: number
}

export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    description: {
      html: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  return (
    <>
      <h1>{place.name}</h1>

      <div dangerouslySetInnerHTML={{ __html: place.description.html }} />

      {place.gallery.map((image, index) => (
        <Image
          key={`photo-${index}`}
          src={image.url}
          alt={place.name}
          width={image.width}
          height={image.height}
          quality={75}
        />
      ))}
    </>
  )
}
