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

    ':hover': {
      opacity: props.secondary ? '1' : '.6',
      color: props.secondary && !props.disabled && 'white',
      bg: props.secondary && !props.disabled && props.theme.colors.primary,
      '::after' : {
        filter: 'inherit',
      },
    },

    ':disabled': {
      cursor: 'auto',
      borderColor: props.secondary && props.theme.colors.gray40,
      bg: props.secondary ? 'white' : props.theme.colors.states.mainDisabled,
      color: props.withArrow && !props.secondary ? 'white' : props.theme.colors.gray40,
      ':hover': {
        opacity: '1',
      },
      '::after' : {
        filter: props.secondary && (
          'invert(64%) sepia(11%) saturate(309%) hue-rotate(181deg) brightness(95%) contrast(92%)'
        ),
      },
    },

    '::after': {
      content: '""',
      width: ['6px'],
      height: ['10px'],
      marginLeft: ['8px'],
      backgroundSize: 'contain',
      backgroundImage: 'url(/images/arrow.svg)',
      display: props.withArrow && !props.loading ? 'block' : 'none',
      filter: props.secondary && (
        'invert(36%) sepia(81%) saturate(4618%) hue-rotate(213deg) brightness(92%) contrast(96%)'
      ),
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
