import styled from "vue-styled-components";

const homeProps = { transparent: Boolean, showbgimage: Boolean };

const bgImage = (show) => {
  if (show) {
    return `
          background-image: url('https://refactory.id/wp-content/uploads/2020/01/ripple-bg.png');
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
        `;
  }
};

const HomeJumbotron = styled("div", homeProps)`
  margin-bottom: 0 !important;
  background-color: ${({ transparent }) => {
    if (transparent == true) {
      return "transparent !important";
    } else {
      return "#F4F5F6 !important";
    }
  }};
  & .jumbotron {
    h1,
    h2 {
      font-family: "Raleway", sans-serif;
      color: #0b162b;
    }
    p {
      font-family: "Montserrat", sans-serif;
      font-size: 16px;
      line-height: 30px;
      color: #f1f1f1;
    }
  }
  a:hover {
    transition: all 0.5s ease;
    text-decoration: none;
    color: #e48800;
  }
  ${({ showbgimage }) => bgImage(showbgimage)}
`;

const CoursesJumbotron = styled.div`
  position: relative;
  background-color: ${({ transparent }) => {
    if (transparent == true) {
      return "transparent";
    } else {
      return "#F4F5F6";
    }
  }};
  font-family: "Raleway", sans-serif;

  .side-title {
    width: 300px !important;
    font-size: 28px !important;
    font-family: "Raleway", sans-serif;
    b {
      color: #e48800;
    }

    button {
      font-size: 14px;
      font-weight: 500;
    }
  }

  .feature {
    width: 100%;
  }

  .subtitle {
    font-size: 16px;
    line-height: 40px;
  }

  .review {
    font-size: 38px;
    line-height: 30px;
  }

  .report {
    font-size: 24px;
  }

  @media only screen and (min-width: 768px) {
    .learn-more {
      padding-left: 5rem;
    }
  }
`;

const JumbotronStartLearning = styled.div`
  background: linear-gradient(
    110deg,
    rgba(19, 126, 200, 1) 0%,
    rgba(43, 164, 182, 1) 57%,
    rgba(52, 179, 174, 1) 100%
  );
`;

export { HomeJumbotron, CoursesJumbotron, JumbotronStartLearning };
