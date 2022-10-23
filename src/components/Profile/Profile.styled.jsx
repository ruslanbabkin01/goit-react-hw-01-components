import styled from '@emotion/styled';

export const PrifileBox = styled.div`
  width: 320px;
  margin: 0 auto;
  text-align: center;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.regular};
  border-radius: 4px;
  margin-bottom: 30px;
`;

export const Description = styled.div`
  padding: 25px;
`;

export const ImgAvatar = styled.img`
  width: 30%;
  border-radius: 50%;
  margin: 20px auto;
`;

export const Username = styled.p`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 700;
  margin-bottom: 10px;
`;

export const UserTag = styled.p`
  margin-bottom: 10px;
  color: ${props => props.theme.colors.gray};
`;

export const UserLocation = styled.p`
  color: ${props => props.theme.colors.gray};
`;

export const StatsBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${props => props.theme.colors.mainBackground};
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid #dcdfe3;
  padding: 20px 16px;
  width: calc(100% / 3);
`;

export const StatsLabel = styled.span`
  margin-bottom: 5px;
  color: ${props => props.theme.colors.gray};
`;

export const StatsQuantity = styled.span`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 700;
`;
