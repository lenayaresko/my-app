import { Link } from 'react-router-dom'
import * as Styled from '../../styles/stylesName'

function Name() {
  return (
    <Styled.MainSidebar>
      <Styled.SidebarPersonal>
        <Styled.SidebarPersonalName>Sergey.Ivanov</Styled.SidebarPersonalName>
        <Styled.SidebarAvatar />
      </Styled.SidebarPersonal>
      <Styled.SidebarBlock>
        <Styled.SidebarList>
          <Styled.SidebarItem>
            <Link to="/dayplaylist">
              <Styled.SidebarLink>
                <Styled.SidebarImg
                  src="img/playlist01.png"
                  alt="day's playlist"
                />
              </Styled.SidebarLink>
            </Link>
          </Styled.SidebarItem>
          <Styled.SidebarItem>
            <Link to="/danceplaylist">
              <Styled.SidebarLink>
                <Styled.SidebarImg
                  src="img/playlist02.png"
                  alt="day's playlist"
                />
              </Styled.SidebarLink>
            </Link>
          </Styled.SidebarItem>
          <Styled.SidebarItem>
            <Link to="/indieplaylist">
              <Styled.SidebarLink>
                <Styled.SidebarImg
                  src="img/playlist03.png"
                  alt="day's playlist"
                />
              </Styled.SidebarLink>
            </Link>
          </Styled.SidebarItem>
        </Styled.SidebarList>
      </Styled.SidebarBlock>
    </Styled.MainSidebar>
  )
}

export default Name
