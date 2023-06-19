import * as Styled from '../../styles/stylesName'

function LoadingName() {
  return (
    <Styled.MainSidebar>
      <Styled.SidebarPersonal>
        <Styled.SidebarPersonalName>Sergey.Ivanov</Styled.SidebarPersonalName>
        <Styled.SidebarAvatar />
      </Styled.SidebarPersonal>
      <Styled.SidebarBlock>
        <Styled.SidebarList>
          <Styled.SidebarItem>
            <Styled.SidebarLink href="/#">
              <Styled.SidebarImg
                src="img/playlist-square.png"
                alt="day's playlist"
              />
            </Styled.SidebarLink>
          </Styled.SidebarItem>
          <Styled.SidebarItem>
            <Styled.SidebarLink href="/#">
              <Styled.SidebarImg
                src="img/playlist-square.png"
                alt="day's playlist"
              />
            </Styled.SidebarLink>
          </Styled.SidebarItem>
          <Styled.SidebarItem>
            <Styled.SidebarLink href="/#">
              <Styled.SidebarImg
                src="img/playlist-square.png"
                alt="day's playlist"
              />
            </Styled.SidebarLink>
          </Styled.SidebarItem>
        </Styled.SidebarList>
      </Styled.SidebarBlock>
    </Styled.MainSidebar>
  )
}

export default LoadingName
