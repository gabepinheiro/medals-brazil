import { useRouter } from 'next/dist/client/router'
import { MapContainer, TileLayer, Marker, MapConsumer } from 'react-leaflet'

type Place = {
  id: string
  location: {
    latitude: number
    longitude: number
  }
  athtele: {
    name: string
    city: string
    medal?: string
  }
  slug?: string
}

export type MapProps = {
  places?: Place[]
}

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID

const CustomTileLayer = () => {
  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )
}

import * as S from './styles'

import L from 'leaflet'

const Map = ({ places }: MapProps) => {
  const router = useRouter()

  return (
    <S.MapWrapper>
      <MapContainer
        center={[-14.235, -51.9253]}
        zoom={4}
        minZoom={3}
        maxBounds={[
          [180, -180],
          [-180, 180]
        ]}
        style={{ width: '100%', height: '100%' }}
      >
        <MapConsumer>
          {(map) => {
            const width =
              window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth

            if (width < 768) {
              map.setMinZoom(2)
            }

            return null
          }}
        </MapConsumer>
        <CustomTileLayer />

        {places?.map(({ id, location, athtele, slug }) => {
          const { latitude, longitude } = location
          const { name, city, medal } = athtele

          const markerIcon = new L.Icon({
            iconUrl: `img/${medal}.png`,
            iconSize: [40, 40],
            iconAnchor: [20, 40],
            popupAnchor: [0, -10]
          })

          return (
            <Marker
              key={`place-${id}`}
              position={[latitude, longitude]}
              title={`${city}, ${name}`}
              icon={markerIcon}
              eventHandlers={{
                click: () => router.push(`athlete/${slug}`)
              }}
            />
          )
        })}
      </MapContainer>
    </S.MapWrapper>
  )
}

export default Map
