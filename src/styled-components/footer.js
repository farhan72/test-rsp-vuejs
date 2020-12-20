import styled from "vue-styled-components";

const WrapperJumbotron = styled.div`
  padding: 50px;
  background-color: #0c162a;
  padding: 50px;
  width: 100%;
`;

const Segment = styled.div`
  color: #fff;
  padding-left: 0px;
  h2 {
    color: #fff;
    font-size: 14px;
  }

  ul {
    text-align: left;
    color: #fff;
  }
  p {
    color: #fff;
  }
  a {
    text-decoration: none;
    color: #eaeaea;
    font-size: 12px;
    &:hover {
      transition: 0.5s;
      color: #e48800;
    }
  }

  @media only screen and (max-width: 768px) {
    width: auto !important;
  }
`;

const Socmed = styled.ul`
  list-style: none;
  padding: 0;
  li {
    display: inline-block;
    margin-right: 8px;
    margin-left: 0;
    padding: 4px;
    width: 30px;
    height: 30px;
    background-color: #35b4ae;
    border-radius: 50%;
    text-align: center;

    &:hover {
      transition: all 0.5s ease;
      background-color: #2d9791;
    }
    a {
      i {
        font-size: 15px;
      }
      &:hover {
        color: #ffffff;
      }
    }
  }
`;

const CopyRight = styled.div`
  background-color: #0c162a;
  color: #ffffff;
`;

export { WrapperJumbotron, Segment, Socmed, CopyRight };
