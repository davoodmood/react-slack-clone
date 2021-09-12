import React from 'react'
import styled from 'styled-components'
import {Avatar} from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SeachIcon from '@material-ui/icons/Search'
import HelpIcon  from '@material-ui/icons/Help'
function Header() {
    return (
        <HeaderContainer>
            {/* Header Start */}
            <HeaderStart>
                <HeaderAvatar 
                // TODO: Add onclick
                />
                <AccessTimeIcon/>
            </HeaderStart>
            {/* Header Middle */}
            <HeaderMiddle>
                <SeachIcon />
                <input type="text" placeholder="Search the chat" />
            </HeaderMiddle>
            {/* Header End */}
            <HeaderEnd>
                <HelpIcon />
            </HeaderEnd>
        </HeaderContainer>
    )
    
}

export default Header

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white
`

const HeaderStart = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`;

const HeaderMiddle = styled.div`
    flex: 0.4%;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;
    display: flex;
    padding:0 50px;
    border: 1px gray solid;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 10px;
    }

    > input {
        background-color: transparent;
        width: 100%;
        border: none;
        min-width: 30vw;
        color: white;
        outline:0;
    }
`;

const HeaderEnd = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
    }
`;

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    background-color: white;
    :hover {
        opacity: 0.8;
    }
`;
const HeaderSearch = styled.div`

`;