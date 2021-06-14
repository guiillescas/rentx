import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface IContainerProps {
  color: string | undefined;
}

export const Container = styled(RectButton)<IContainerProps>`
  width: 100%;

  padding: 19px;
  align-items: center;
  justify-content: center;

  background: ${({ theme, color }) => color || theme.colors.main};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.background_primary};
`;