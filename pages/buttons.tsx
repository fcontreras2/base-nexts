import { Container, Grid } from '@material-ui/core';
import Button from 'components/Button';

function Buttons() {
  return (
    <Container>
      <h1>Tipo de botones</h1>
      <h3>Main</h3>
      <Grid container justify="space-evenly">
        <Grid item>
          <Button
            variant={'mainXs'}
          >
            Button
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant={'mainS'}
          >
            Button
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant={'mainM'}
          >
            Button
          </Button>
        </Grid>
        <Grid item>
          <Button
            disabled
            variant={'mainL'}
          >
            Button
          </Button>
        </Grid>
      </Grid>
      <br/>
      <Grid container justify="space-evenly">
        <Grid item>
          <Button
            withArrow
            variant={'mainXs'}
          >
            Button
          </Button>
        </Grid>
        <Grid item>
          <Button
            withArrow
            variant={'mainS'}
          >
            Button
          </Button>
        </Grid>
        <Grid item>
          <Button
            withArrow
            variant={'mainM'}
          >
            Button
          </Button>
        </Grid>
        <Grid item>
          <Button
            withArrow
            disabled
            variant={'mainL'}
          >
            Button
          </Button>
        </Grid>
      </Grid>
      <h3>Tipo de botones</h3>
      <Grid container justify="space-evenly">
        <Grid item>
          <Button />
        </Grid>
        <Grid item>
          <Button />
        </Grid>
        <Grid item>
          <Button />
        </Grid>
        <Grid item>
          <Button />
        </Grid>
      </Grid>
      <h3>Tipo de botones</h3>
      <Grid container justify="space-evenly">
        <Grid item>
          <Button />
        </Grid>
        <Grid item>
          <Button />
        </Grid>
        <Grid item>
          <Button />
        </Grid>
        <Grid item>
          <Button />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Buttons;
