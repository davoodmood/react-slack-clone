import React,{FC} from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'
import SidebarOptions from './SidebarOptions'
import {InsertComment, Inbox, Drafts, BookmarkBorder, PeopleAlt, Apps, FileCopy, ExpandLess, ExpandMore, Add } from '@material-ui/icons/'
import { useCollection } from 'react-firebase-hooks/firestore';
import {db} from '../firebase'

function Sidebar() {
    // const getDocuments = async (): Promise<any> => {
    //     // return await getDocs(collection(db,'rooms'))
    //     // const querySnapshot = await getDocs(await collection( await db, "users"));
    //     const querySnapshot = await getDocs(collection(db, "rooms"));
    //     // querySnapshot.forEach((doc) => {
    //     // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    //     // });
    //     return querySnapshot
    // }
    // getDocuments()
    const [channels, loading, error] = useCollection(db.collection('rooms'));
    // getDocuments.forEach((doc: any) => {
    //     console.log(`${doc.id} => ${doc.data()}`);
    //   });
      
    console.log("Channels: ", channels);

    return (
        <>
            <SidebarCointainer>
                <SidebarHeader>
                    <SidebarInfo>
                        <h2>Stack Clone Channel</h2>
                        <h3>
                            <FiberManualRecordIcon />
                            David Mood
                        </h3>
                    </SidebarInfo>
                    <CreateIcon />
                </SidebarHeader>
                <SidebarOptions Icon={InsertComment} title="Threads"></SidebarOptions>
                <SidebarOptions Icon={Inbox} title="Mentions & reactions"></SidebarOptions>
                <SidebarOptions Icon={Drafts} title="Saved items"></SidebarOptions>
                <SidebarOptions Icon={BookmarkBorder} title="Channel browser"></SidebarOptions>
                <SidebarOptions Icon={PeopleAlt} title="People & user groups"></SidebarOptions>
                <SidebarOptions Icon={Apps} title="Apps"></SidebarOptions>
                <SidebarOptions Icon={FileCopy} title="File browser"></SidebarOptions>
                <SidebarOptions Icon={ExpandLess} title="Show less"></SidebarOptions>
                <hr />
                <SidebarOptions Icon={ExpandMore} title="Channels"></SidebarOptions>
                <hr />
                <SidebarOptions Icon={Add} addChannelOption title="Channels"></SidebarOptions>
                {channels?.docs.map((doc:any) => (
                 <SidebarOptions key={doc.id} id={doc.id} title={doc.data().name}></SidebarOptions>
             ))}
            </SidebarCointainer>
             
        </>
    )
}

export default Sidebar

const SidebarCointainer = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;

    > hr {
        margin: 10px 0;
        border: 1px solid #49274b;
    }
`;

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 10px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`;

const SidebarInfo = styled.div`
    flex: 1;

    > h2 {
        font-size:15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;

    }

    > h3 .MuiSvgIcon-root {
        margin-top: 1px;
        margin-right: 2px;
        font-size: 14px;
        color: green
    }
`;