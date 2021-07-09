import styled from 'styled-components';
import css from '@styled-system/css';
import { variant } from 'styled-system';
import { ButtonProps } from './index';

export const StyledButton = styled.button<ButtonProps>`
  ${(props) => css({
    display: 'flex',
    padding: '0 24px',
    cursor: 'pointer',
    minHeight: '32px',
    fontWeight: 'bold',
    fontSize: ['16px'],
    minWidth: ['123px'],
    alignItems: 'center',
    borderRadius: ['40px'],
    transition: 'all 0.4s ease',
    color: props.secondary ? props.theme.colors.primary : 'white',
    bg: props.secondary ? 'white' : props.theme.colors.primary,
    justifyContent: props.withArrow && !props.loading ? 'space-between' : 'center',
    border: props.secondary ? `1px solid ${props.theme.colors.primary}` : 'none',

    ':disabled': {
      ':hover': {
        opacity: '1',
      },
      cursor: 'auto',
      borderColor: props.secondary && props.theme.colors.gray40,
      bg: props.secondary ? 'white' : props.theme.colors.states.mainDisabled,
      color: props.withArrow && !props.secondary ? 'white' : props.theme.colors.gray40,
    },

    ':hover': {
      opacity: props.secondary ? '1' : '.6',
      color: props.secondary && !props.disabled && 'white',
      bg: props.secondary && !props.disabled && props.theme.colors.primary,
    },

    '::after': {
      content: '""',
      width: ['6px'],
      height: ['10px'],
      marginLeft: ['8px'],
      backgroundSize: 'contain',
      backgroundImage: 'url(/images/arrow.svg)',
      display: props.withArrow && !props.loading ? 'block' : 'none',
    }
  })}

  ${() => variant({
    prop: 'variant',
    variants: {
      'xs': {
        height: ['32px'],
      },
      's': {
        height: ['40px'],
        minWidth: ['154px'],
      },
      'm': {
        height: ['48px'],
        minWidth: ['154px'],
      },
      'l': {
        height: ['56px'],
        minWidth: ['154px'],
      },
    }
  })}
`;
