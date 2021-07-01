import styled from 'styled-components';
import { variant } from 'styled-system';
import TypographyGlobal from 'components/Typography';

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  padding-left: 16px;
  padding-right: 16px;
  position: absolute;left: 0;
  background-color: ${(props) => props.theme.colors.green};
`;

export const Typography = styled(TypographyGlobal)`
  ${variant({
    prop: 'styles',
    variants: {
      title: {
        fontFamily: 'bold',
        fontSize: '18px',
        color: 'white',
        marginTop: '20px',
        marginBottom: '20px',
      },
      description: {
        fontFamily: 'light',
        fontSize: '17px',
        color: 'white',
        lineHeight: 1.4,
      },
    },
  })}
`;

export const Figure = styled.figure`
  margin-top: -16px;
`;
