import * as React from 'react'
import { Head, SSG } from '@quercia/quercia'

const Code = props => (
  <code
    style={{
      background: 'rgba(50,50,50,.1)',
      padding: '.35rem',
      borderRadius: '.35em'
    }}
    {...props}
  />
)

export default ({ file }) => (
  <div
    style={{
      fontFamily: 'Operator Mono, Fira Code, Menlo, monospace',
      width: '100vw',
      height: '100vh',

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}
  >
    <Head>
      <title>My quercia index page</title>
    </Head>
    <h1>Welcome to your quercia application!</h1>
    <h3>
      you can start editing the <Code>{SSG ? '????????' : file}</Code> file to
      see ✨ happen
      <h3>
        Or even better run
        <br />✨<Code>$ yarn build</Code> / <Code>$ npm run build</Code>✨<br />{' '}
        to build your application in production mode and replace
        <br /> the heavy <Code>react|react-dom</Code> with the featherweight{' '}
        <Code>preact</Code>
      </h3>
    </h3>
  </div>
)
