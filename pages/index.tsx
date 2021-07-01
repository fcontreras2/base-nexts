import { Container, Grid } from '@material-ui/core'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <Container>
      <Grid container style={{background: 'green'}}>
        {Array(12).fill(1).map((e, index) => 
          <Grid 
            key={'grid' + index * 2} 
            item 
            xs={3} 
            md={1}>
            <div style={{background: 'blue', height: '100vh'}}>
              <p>{e * index}</p>
            </div>
          </Grid> 
        )}
      </Grid>
    </Container>
  )
}
