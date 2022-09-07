import * as React from "react"
import { Link, HeadFC, navigate } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage = () => {

  return (
    <main className="h-screen" style={pageStyles}>
      <h1 className="font-cond-black text-primary-light" style={headingStyles}>Fereastra nu e pe aici...</h1>
      <p className=" text-primary-light" style={paragraphStyles}>
        Ne pare rău 😔, nu există pagina pe care o căutați.
        <br />
        
      </p>  
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Page Not found</title>
