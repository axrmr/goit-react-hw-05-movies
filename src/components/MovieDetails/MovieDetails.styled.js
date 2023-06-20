import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  margin-bottom: 40px;
  font-size: 22px;

  & + & {
    margin-left: 20px;
  }

  &.active {
    font-size: 25px;
    color: orange;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 60px;

  .img {
    border-radius: 5px;
  }

  .info-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .title {
    display: inline-block;
    padding: 2px 15px;
    margin: 0 0 30px;
    border: 2px solid #fff;
    border-radius: 12px;
  }

  .overview-title {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 10px;
  }

  .overview-text {
    margin: 0 0 40px;
    width: 600px;
    line-height: 1.7;
  }

  .release-date,
  .rating,
  .lang {
    margin-top: 0;
    font-weight: 700;

    span {
      margin-left: 5px;
      font-weight: normal;
    }
  }

  .release-date {
    font-size: 18px;

    span {
      font-size: 16px;
    }
  }

  .rating {
    display: inline-block;
    margin-bottom: 15px;
  }

  .lang {
  }
`;
