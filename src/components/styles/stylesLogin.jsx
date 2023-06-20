import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: #000;
  min-height: 100vh;
`
export const ContainerModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: #fff;
  width: 366px;
  height: 439px;
  border-radius: 12px;
`
export const LogoBox = styled.div`
  width: 140px;
`
export const LogoImg = styled.img`
  width: 140px;
`
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  div::placeholder {
    color: #e1e1e1;
    font-family: 'StratosSkyeng';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    padding-bottom: 8px;
    height: 32px;
  }
`
export const Input = styled.input`
  border: none;
  height: 32px;
  width: 278.5px;
  color: #000;
  border-bottom: 1px solid #d0cece;
  margin-bottom: 38px;
  outline: none;
  font-family: 'StratosSkyeng';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
`
export const LoginButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  div:hover {
    background: #3f007d;
  }
  div:active {
    background: #271a58;
  }
`
export const SignupButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  div:hover {
    background: #f4f5f6;
  }
  div:active {
    background: #d9d9d9;
  }
`

export const Button = styled.button`
  width: 278px;
  height: 52px;
  font-family: 'StratosSkyeng';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  border-radius: 6px;
  border: none;
`
export const ButtonLogin = styled(Button)`
  color: #ffffff;
  background: #580ea2;
  margin-bottom: 20px;
`
export const ButtonSignup = styled(Button)`
  color: #000000;
  border: 1px solid #d0cece;
  border-radius: 6px;
  background: #fff;
`

export default Container
