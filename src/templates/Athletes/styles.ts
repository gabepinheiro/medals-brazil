import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: var(--large) var(--medium);
`

export const Container = styled.section`
  max-width: var(--container);
  margin: auto;
`

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--medium);
`

export const SectionAbout = styled.section`
  margin-bottom: var(--medium);
  h2 {
    font-size: var(--large);
    margin-bottom: var(--medium);
  }
`

export const Body = styled.div`
  background: var(--white);
  margin-bottom: var(--large);
  color: var(--background);
  padding: 1.6rem;
`

export const SectionModality = styled(SectionAbout)``

export const SectionMedal = styled(SectionAbout)`
  ${Body} {
    display: flex;
    align-items: center;
  }
`

export const Gallery = styled.div`
  display: grid;
  grid-gap: var(--medium);
  margin-bottom: var(--medium);

  img {
    display: block;
    width: 100%;
    object-fit: cover;
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimer 1s linear infinite forwards;

    @keyframes placeholderShimer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`
