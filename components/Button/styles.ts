import styled from 'styled-components';
import css from '@styled-system/css';
import { variant } from 'styled-system';
import { ButtonProps } from './index';

export const StyledButton = styled.button`
  ${(props: ButtonProps) => css({
    bg: 'white',
    display: 'flex',
    padding: '0 24px',
    cursor: 'pointer',
    minHeight: '32px',
    fontWeight: 'bold',
    fontSize: ['16px'],
    minWidth: ['123px'],
    alignItems: 'center',
    borderRadius: ['40px'],
    border: '1px solid black',
    justifyContent: props.withArrow ? 'space-between' : 'center',

    ':disabled': {
      ':hover': {
        opacity: '1',
      },
      cursor: 'auto',
      bg: props.theme.colors.states.mainDisabled,
      color: props.withArrow ? props.theme.colors.white : props.theme.colors.gray40,
    },

    ':hover': {
      opacity: '.6',
    },

    '::after': {
      content: '""',
      width: ['6px'],
      height: ['10px'],
      marginLeft: ['8px'],
      backgroundSize: 'contain',
      backgroundImage: 'url(/images/arrow.svg)',
      display: props.withArrow ? 'block' : 'none',
    }
  })}

  ${(props) => variant({
    prop: 'variant',
    variants: {
      'mainXs': {
        border: 'none',
        color: 'white',
        height: ['32px'],
        bg: props.theme.colors.primary,
      },
      'mainS': {
        border: 'none',
        color: 'white',
        height: ['40px'],
        minWidth: ['154px'],
        bg: props.theme.colors.primary,
      },
      'mainM': {
        border: 'none',
        color: 'white',
        height: ['48px'],
        minWidth: ['154px'],
        bg: props.theme.colors.primary,
      },
      'mainL': {
        border: 'none',
        color: 'white',
        height: ['56px'],
        minWidth: ['154px'],
        bg: props.theme.colors.primary,
      },

      'secondaryXs': {
        border: 'none',
        color: 'white',
        height: ['32px'],
        bg: props.theme.colors.primary,
      },
      'secondaryS': {
        border: 'none',
        color: 'white',
        height: ['40px'],
        minWidth: ['154px'],
        bg: props.theme.colors.primary,
      },
      'secondaryM': {
        border: 'none',
        color: 'white',
        height: ['48px'],
        minWidth: ['154px'],
        bg: props.theme.colors.primary,
      },
      'secondaryL': {
        border: 'none',
        color: 'white',
        height: ['56px'],
        minWidth: ['154px'],
        bg: props.theme.colors.primary,
      },
    }
  })}
`;
