import styled from "vue-styled-components";

const WrapperBestArticle = styled.div`
  font-family: "Raleway", sans-serif;

  h2 {
    font-size: 28px;
    font-weight: bold;
  }
`;

const KnowledgeWrapper = styled.div`
  h2,
  a {
    font-size: 18px;
  }
  .title {
    margin-top: 2rem;
    font-weight: bold;
    font-size: 28px;
  }

  a {
    position: relative;
    top: 3rem;

    &:hover {
      transition: 0.5s;
      color: #e48800;
    }
  }

  @media only screen and (max-width: 768px) {
    a {
      top: 2rem;
    }
  }
`;

export { WrapperBestArticle, KnowledgeWrapper };
