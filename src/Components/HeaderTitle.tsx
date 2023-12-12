import React from "react";

import styled from 'styled-components';

const Heading = styled.h1`
  font-weight: bold;
  font-size: 22px;
  margin: 0;
  padding: 15px 0 0;
`;

export default function HeaderTitle(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Heading>{props.name}</Heading> 
                </div>
            </div>
        </div>
    )
};