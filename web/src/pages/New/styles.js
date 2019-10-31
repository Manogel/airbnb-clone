import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    color: #444;
    font-weight: bold;
    margin-bottom: 8px;

    span {
      font-weight: normal;
      color: #999;
      font-size: 12px;
    }
  }

  input {
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 2px;
    height: 45px;
    padding: 0 15px;
    font-size: 16px;
  }
`;

export const InputFile = styled.label`
  background-image: url(${props => props.preview});
  background-size: cover;
  margin-bottom: 30px;
  border: ${props => (props.preview ? 0 : "1px dashed #ddd")};
  cursor: pointer;
  height: 160px;

  display: flex;
  justify-content: center;
  align-items: center;

  input {
    display: none;
  }

  img {
    display: ${props => props.preview && "none"};
  }
`;
