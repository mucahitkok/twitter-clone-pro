import '../styles/globals.css'
import Container from '../layout/container'

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <div className="border-x flex-1 ">
        <Component {...pageProps} />
      </div>
    </Container>
  )
}

export default MyApp
