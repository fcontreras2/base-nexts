import { Container, Grid } from '@material-ui/core';
import Button from 'components/Button';

function Buttons() {
  return (
    <Container>
      <h1>Tipo de botones</h1>
      <h3></h3>
      <Grid container justify="space-evenly">
        <Grid item>
          <Button
            type="button"
            variant="xs"
          >
            Button
          </Button>
        </Grid>
        <Grid item>
          <Button
            type="button"
            variant="s"
          >
            Button
          </Button>
        </Grid>
        <Grid item>
          <Button
            loading
            type="button"
            variant="m"
          >
            Button
          </Button>
        </Grid>
        <Grid item>
          <Button
            disabled
            type="button"
            variant="l"
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
            variant="xs"
          >
            Button
          </Button>
        </Grid>
        <Grid item>
          <Button
            withArrow
            variant="s"
          >
            Button
          </Button>
        </Grid>
        <Grid item>
          <Button
            loading
            withArrow
            variant="m"
          >
            Button
          </Button>
        </Grid>
        <Grid item>
          <Button
            withArrow
            disabled
            variant="l"
          >
            Button
          </Button>
        </Grid>
      </Grid>
      <h3>Tipo de botones</h3>
      <Grid container justify="space-evenly">
        <Grid item>
          <Button
            secondary
            variant="xs"
          >
            Button
          </Button>
        </Grid>
        <Grid item>
          <Button
            secondary
            variant="s"
          >
            Button
          </Button>
        </Grid>
        <Grid item>
          <Button
            loading
            secondary
            variant="m"
          >
            Button
          </Button>
        </Grid>
        <Grid item>
          <Button
            disabled
            secondary
            variant="l"
          >
            Button
          </Button>
        </Grid>
      </Grid>
      <h3>Tipo de botones</h3>
      <Grid container justify="space-evenly">
        <Grid item>
          <Button
            secondary
            withArrow
            variant="xs"
          >
            Button
          </Button>
        </Grid>
        <Grid item>
          <Button
            secondary
            withArrow
            variant="s"
          >
            Button
          </Button>
        </Grid>
        <Grid item>
          <Button
            loading
            secondary
            withArrow
            variant="m"
          >
            Button
          </Button>
        </Grid>
        <Grid item>
          <Button
            secondary
            withArrow
            disabled
            variant="l"
          >
            Button
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Buttons;
