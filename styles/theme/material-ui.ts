import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

breakpoints.values.xs = 320; 
breakpoints.values.sm = 360; 
breakpoints.values.md = 1024; 
breakpoints.values.lg = 1440; 

const themeMaterial = createMuiTheme({
  breakpoints,
  overrides: {
    MuiGrid: {
      container: {
        width: '100% !important',
        margin: '0',
      },
      item: {
        [breakpoints.down('xs')]: {
          width: '25% !important',
          margin: '0 8px',
        },
        [breakpoints.only('xs')]: {
          width: '60px',
          maxWidth: '60px',
          padding: '0 8px',
          margin: '0',
        },
        [breakpoints.only('sm')]: {
          width: '70px',
          maxWidth: '70px',
          padding: '0 8px',
          margin: '0',
        },
      }
    },
    MuiContainer: {
      root: {
        [breakpoints.only('xs')]: {
          width: breakpoints.width('xs'),
          padding: '0 8px',
        },
        [breakpoints.only('sm')]: {
          width: breakpoints.width('sm'),
          padding: '0 8px',
        },
        [breakpoints.only('md')]: {
          width: '768px',
        },
        [breakpoints.only('lg')]: {
          width: '1088px',
        },
      }
    },
  }
});

export default themeMaterial;
