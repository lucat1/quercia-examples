import * as React from 'react'
import { Head, SSG } from '@quercia/quercia'

interface IndexProps {
  file: string
}

export default ({ file }: IndexProps) => (
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
      you can start editing the{' '}
      <code
        style={{
          background: 'rgba(50,50,50,.1)',
          padding: '.35rem',
          borderRadius: '.35em'
        }}
      >
        {SSG ? '????????' : file}
      </code>{' '}
      file to see ✨ happen
    </h3>
  </div>
)
