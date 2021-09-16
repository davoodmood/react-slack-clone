import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import {FC} from 'react'
import styled from 'styled-components';
import {db} from '../firebase';
import {useDispatch} from 'react-redux';
import { enterRoom } from '../features/appSlice';


interface Props {
    Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    title: string;
    addChannelOption?: boolean;
    id?: string;
}

const SidebarOptions: FC<Props> = ({Icon, title, addChannelOption, id}: Props) => {

    const dispatch = useDispatch();
   

    const addChannel = async() => {
        const channelName = prompt('Please enter the channel name');
        
        if (channelName) {
            try {
                const docRef = await db.collection("users").add({
                    name: channelName,
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    }
    const selectChannel = () => {
        if (id) {
            // push to store
            dispatch(enterRoom({
                roomId: id
            }));
            console.log("Channel ID: ", id);
        }
    }

    return (
        <SidebarOptionContainer
            onClick={addChannelOption? addChannel: selectChannel}
        >
             {Icon && <Icon fontSize="small" style={{padding: 10}} />}
                {Icon ? (<h3>{title}</h3>):
                (<SidebarOptionChannel>
                    <span>#</span> {title}
                </SidebarOptionChannel>)
                }
        </SidebarOptionContainer>
    )
}

export default SidebarOptions;

const SidebarOptionContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 2px;
    cursor: pointer;

    :hover {
        opacity: 0.9;
        background-color: #340e36;
    }

    > h3 {
        font-weight: 500;
    } 

    > h3 > span {
        padding: 15px;
    }
`; 
const SidebarOptionChannel = styled.h3`
    padding: 10px 0;
    font-weight: 300;
`;

// function SidebarOptions({icon, title} : Props) {
//     return <>
//          <SidebarOptionContainer>
                
//          </SidebarOptionContainer>
//         </>
// }
