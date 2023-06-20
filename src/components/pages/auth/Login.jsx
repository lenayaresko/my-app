import { Link, useNavigate } from 'react-router-dom'
import * as Styled from '../../styles/stylesLogin'

export function Login() {
  const handleRegistrationButtonClick = (event) => {
    event.preventDefault()
    const navigate = useNavigate()
    navigate('/')
  }

  return (
    <Styled.Container>
      <Styled.ContainerModalBox>
        <Styled.LogoBox>
          <Styled.LogoImg
            src="https://my.sky.pro/5987ea2b7acbe5e5379157f8c4f0fb7f.svg"
            alt="Skypro"
          />
        </Styled.LogoBox>
        <Styled.InputBox>
          <Styled.Input placeholder="Логин" type="text" />
          <Styled.Input placeholder="Пароль" type="text" />
        </Styled.InputBox>
        <Styled.ButtonBox>
          <Styled.LoginButtonBox>
            <Styled.ButtonLogin onClick={handleRegistrationButtonClick}>
              Войти
            </Styled.ButtonLogin>
          </Styled.LoginButtonBox>
          <Styled.SignupButtonBox>
            <Link to="/registration">
              <Styled.ButtonSignup>Зарегистрироваться</Styled.ButtonSignup>
            </Link>
          </Styled.SignupButtonBox>
        </Styled.ButtonBox>
      </Styled.ContainerModalBox>
    </Styled.Container>
  )
}

export default Login
