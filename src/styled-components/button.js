import styled from "vue-styled-components";

const btnProps = { ml: Boolean, width: String, outline: Boolean };

const changeStyleBtn = (outline) => {
  if (!outline) {
    return `
      background-color: #e48800;
        border: none;
      `;
  } else {
    return `
      background-color: transparent;
      border: 1px solid #e48800;
      `;
  }
};
const Button = styled("button", btnProps)`
  position: relative;
  outline: none;
  border: none;
  color: #fff;
  margin-top: 10px;
  margin-left: ${({ ml }) => (ml == true ? "10px" : "0px")};
  border-radius: 20px;
  padding: 6px 40px;
  width: ${(width) => (width ? width : "auto")};
  ${({ outline }) => changeStyleBtn(outline)};
  
  &:focus {
    outline: none !important;
  }

  &:hover {
    transition: 0.5s;
    background-color: ${({ outline }) => (outline ? "#e48800" : "#f0940e")};
  }

  @media only screen and (max-width: 768px) {
    left: 0;
    padding: 5px 30px;
  }
`;

const ButtonWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    text-align: left;
    padding-left: 10px;

    button {
      display: block;
      margin-top: 10px;
      margin-left: 6px;
    }
  }
`;

export { Button, ButtonWrapper };
