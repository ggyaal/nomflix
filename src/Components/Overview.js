import React from 'react';
import styled from 'styled-components';


const Overview = styled.p`
    height: 200px;
    overflow: auto;
    font-size: 12px;
    opacity: .7;
    line-height: 1.5;
    width: 80%;
`;

const Companies = styled.div`
    display:flex;
    width: 90%;
    flex-wrap: wrap;
    height: 400px;
    overflow-y: auto;
`;

const Company = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
`;

const CompanyImg = styled.div`
    height: 150px;
    width: 150px;
    background-image: url(${props => props.img? `https://image.tmdb.org/t/p/original${props.img}`: require("../assets/noImage.png").default});
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
`;

const CompanyName = styled.div``;

export default ({ overview, companies }) => (
    <>
        <Overview>{(overview && overview.length > 0)? overview : "관련 정보가 없습니다."}</Overview>
        <Companies>
            {companies.map(company => (
                <Company key={company.id}>
                    <CompanyImg img={company.logo_path}></CompanyImg>
                    <CompanyName>[{company.origin_country}]{company.name}</CompanyName>
                </Company>
            ))}
        </Companies>
    </>
);