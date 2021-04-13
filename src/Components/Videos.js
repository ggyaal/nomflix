import { useState } from 'react';
import styled from 'styled-components';



const Container = styled.div`

`;

const Main = styled.div`
    margin-bottom: 50px;
`;

const Side = styled.div`
    overflow-x: auto;
    height: 200px;
    ::-webkit-scrollbar { width: 5.2px; }
    ::-webkit-scrollbar-track { background-color: rgba(0, 0, 0, .5); border-radius: 10px; }
    ::-webkit-scrollbar-thumb {
        background-color: #e74c3c;
        border-radius: 10px;
        :hover { background-color: #c0392b; }
        :active { background-color: #d35400; }
    }
    ::-webkit-scrollbar-button { display: none; }
`;

const Iframe = styled.iframe`
    border-radius: 10px;
    width: 80%;
    height: 320px;
`;

const List =styled.div`
    display: flex;
`;

const VideoList = styled.div`
    position: relative;
`;


const Videos = styled.iframe`

`;

const StateBtn = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 1;
    border: ${props => props.select? "4px solid #c0392b": "" };
`;


const VideoBtn = ({ id, idx, num, setNum }) => (
    <VideoList>
        <Videos src={`https://www.youtube.com/embed/${id}`}></Videos>
        <StateBtn onClick={() => setNum(idx)} select={idx === num}></StateBtn>
    </VideoList>
);


export default ({ videos }) => {
    const [num, setNum] = useState(0);

    return (<Container>
        {(videos && videos.length > 0)? (
            <>
                <Main>
                    <Iframe src={`https://www.youtube.com/embed/${videos[num].key}`} allowFullScreen />
                </Main>
                <Side>
                    <List>
                        {videos.map((item, idx)=> <VideoBtn key={item.id} id={item.key} idx={idx} num={num} setNum={setNum} />)}
                    </List>
                </Side>
            </>
        ): "관련 영상이 없습니다."}
    </Container>
)
};