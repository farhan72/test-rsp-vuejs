import styled from "vue-styled-components";

const OurPartner = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 75, 102, 0.4);
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
  div {
    img {
      width: 100%;
    }
    margin: auto 20px;
  }

  @media only screen and (max-width: 768px) {
    padding: 4px;
    div {
      margin: 0 10px;
    }
  }
`;

export { OurPartner };
