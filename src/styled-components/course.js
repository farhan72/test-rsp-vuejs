import styled from "vue-styled-components";

const CourseProgramming = styled.div`
  font-family: "Raleway", sans-serif;

  @media only screen and (min-width: 768px) {
    .context {
      padding-top: 100px;
      h2 {
        font-size: 26px;
        font-weight: bold;
        width: 500px;
      }

      p {
        line-height: 25px;
      }

      p:not(:first-child) {
        margin-top: 30px;
      }
    }

    .context-image {
      img {
        height: 550px;
        width: 550px;
      }
    }
  }
`;

const LearnMore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: "Raleway", sans-serif;

  div {
    margin-bottom: 6px;
  }
  h2 {
    color: #e48800;
    font-size: 18px;
  }
  h1 {
    font-size: 24px;
    font-weight: bold;
  }
`;

export { CourseProgramming, LearnMore };
