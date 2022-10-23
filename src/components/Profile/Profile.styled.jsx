import styled from '@emotion/styled';

export const PrifileBox = styled.div`
  width: 360px;
  margin: 0 auto;
  text-align: center;
  background-color: #fff;
  box-shadow: ${props => props.theme.shadows.regular};
  border-radius: 4px;
`

export const Description = styled.div`
  padding: 32px;
`;

export const ImgAvatar = styled.img`
margin-bottom:20px;
  width: 40%;
  border-radius: 50%;
  margin: 0 auto;
`;

export const Username = styled.p`
font-size: ${props => props.theme.fontSizes.large};
font-weight: 700;
margin-bottom:10px;
`;

export const UserTag = styled.p`
color: ${props => props.theme.colors.gray};
`;

export const UserLocation = styled.p`
color: ${props => props.theme.colors.gray};
`;

export const StatsBox = styled.ul`
 display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const StatsItem = styled.li`
display: flex;
  flex-direction: column;
  border: 1px solid #dcdfe3;
`;

export const StatsLabel = styled.span`
color: ${props => props.theme.colors.gray};
`;

export const StatsQuantity = styled.span`
font-size: ${props => props.theme.fontSizes.medium};
`;






