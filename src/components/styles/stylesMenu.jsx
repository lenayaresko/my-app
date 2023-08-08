import styled from 'styled-components'

export const MainNav = styled.div`
  width: 244px;
  background-color: ${(props) => props.theme.backgroundMenu};
  padding: 20px 0 20px 36px;
`

export const NavLogo = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`

export const NavBurger = styled.div`
  cursor: pointer;
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`

export const NavBurgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.color};
`

export const NavMenu = styled.div`
  display: block;
  visibility: visible;
`

export const NavLogoImage = styled.img`
  width: 113.33px;
  height: 17px;
  color: #181818;
`

export const MenuList = styled.ul`
  padding: 18px 0 10px 0;
`

export const MenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
`

export const MenuLink = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color};
`
export const MenuItemThemeSvg = styled.svg`
  width: 39px;
  height: 39px;
  margin-right: 5px;
  stroke: #ffffff;
  fill: transparent;
  cursor: pointer;
`

export default NavLogo
