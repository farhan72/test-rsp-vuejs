import styled from "vue-styled-components";

const CourseProgramming = styled.div`
  font-family: "Raleway", sans-serif;
  
  .context {
    padding-left: 0;
    padding-bottom: 50px;
  }
  
  .context-image {
    padding-left: 0;
    margin: 0;
    img {
     width: 300px;
    }
  }
  @media only screen and (min-width: 768px) {
    .context {
      padding-left: 4rem;
      padding-top: 100px;
      h2 {
        font-size: 26px;
        font-weight: bold;
        width: 500px;
      }

      p {
        line-height: 25px;
        font-size: 14px;
      }

      p:not(:first-child) {
        margin-top: 30px;
      }
    }

    .context-image {
        text-align: end;
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
