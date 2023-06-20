import { Link, useNavigate } from 'react-router-dom'
import * as Styled from '../../styles/stylesLogin'

export function Registration() {
  const handleRegistrationButtonClick = (event) => {
    event.preventDefault()
    const navigate = useNavigate()
    navigate('/', { replace: true })
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
          <Styled.Input placeholder="Пароль" type="password" />
          <Styled.Input placeholder="Повторите пароль" type="password" />
        </Styled.InputBox>
        <Styled.ButtonBox>
          <Styled.SignupButtonBox>
            <Link to="/registration">
              <Styled.ButtonSignup
                onClick={handleRegistrationButtonClick}
              >
                Зарегистрироваться
              </Styled.ButtonSignup>
            </Link>
          </Styled.SignupButtonBox>
        </Styled.ButtonBox>
      </Styled.ContainerModalBox>
    </Styled.Container>
  )
}

export default Registration
