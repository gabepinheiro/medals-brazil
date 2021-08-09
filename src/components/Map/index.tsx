import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => (
  <MapContainer
    center={[-14.235, -51.9253]}
    zoom={4}
    style={{ width: '100%', height: '100%' }}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[-14.235, -51.9253]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
)

export default Map
