import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the o marker in correct place', () => {
    const place = {
      id: '1',
      athtele: {
        name: 'Petrópolis',
        city: 'petropolis'
      },
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      athtele: {
        name: 'Reykjavik',
        city: 'reykjavik'
      },
      location: {
        latitude: 129,
        longitude: -50
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/petrópolis/i)).toBeInTheDocument
    expect(screen.getByTitle(/reykjavik/i)).toBeInTheDocument
  })
})
