/** @format */

import React, { useEffect, useReducer, useState } from "react";
import { Block, Box, BoxImg, Card, CenterText, ImgTop, PaginationAnt, Text } from "./style";
import BootomImg  from "../../../Assets/image/image 12.png"
const FilterBlock = () => {
  const [data, setData] = useState();
  const [fit, fitSet]=useState();
  const [current, setCurrent] = useState(3);
  useEffect(() => {
    fetch(`https://greenshophorizontteam.herokuapp.com/product`)
      .then((res) => res.json())
      .then((res) => {
      setData(res )
      });
  }, []);


  const HousePlants = () => {
    let res = data.filter((item) => { 
      return item.type === "houseplants";
    });
    fitSet(res);
  };

  const Potterplants = () => {
    let res = data.filter((item) => { 
      return item.type === "potterplants";
    });
    fitSet(res);

  };
  const Son = () => {
    let res= data.filter((item) => { 
      return item.type === "bigplants";
    });
    fitSet(res);
  };
  const Smallplants = () => {
    let res = data.filter((item) => { 
      return item.type === "smallplants";
    });
    fitSet(res);
  };
  const Bigplants = () => {
    let res = data.filter((item) => { 
      return item.type === "bigplants" ;
    });
    fitSet(res);
  };

  const Gardening = () => {
    let res = data.filter((item) => { 
      return item.type === "gardening";
    });
    fitSet(res);
  };
  const onChange = (page) => {
       setCurrent(page===1 && HousePlants() ) || setCurrent(page===2 && Potterplants() )|| setCurrent(page===3 && Smallplants() )|| setCurrent(page===4 && Gardening() )||setCurrent(page===5 && Bigplants() );
  };
  return (
    <Box>
         <CenterText>ALL Plants</CenterText>
      <Block>
        <Block.Left>
          <Text size="16px" lineHeight="16px" fontWeight="700" color="#3D3D3D">
            Categories
          </Text>
          <Text 
            onClick={HousePlants}
            size="15px"
            lineHeight="40px"
            fontWeight="700"
            color="#3D3D3D"
            margin="10px 13px"
          >
            House Plants  <p>(4)</p>
          </Text>
          <Text 
		  onClick={Potterplants}
            size="15px"
            lineHeight="40px"
            fontWeight="700"
            color="#3D3D3D"
            margin="10px 13px"

          >
            Potter Plants  <p>(6)</p>
          </Text>
          <Text 
		    onClick={Son}
            size="15px"
            lineHeight="40px"
            fontWeight="700"
            color="#3D3D3D"
            margin="10px 13px"
          >
            Seeds<p>(10)</p>
          </Text>
          <Text 
		    onClick={Smallplants}
            size="15px"
            lineHeight="40px"
            fontWeight="700"
            color="#3D3D3D"
            margin="10px 13px"
          >
            Small Plants  <p>(11)</p>
          </Text>
          <Text 
		    onClick={Bigplants}
            size="15px"
            lineHeight="40px"
            fontWeight="700"
            color="#3D3D3D"
            margin="10px 13px"
          >
            Big Plants<p>(10)</p>
          </Text>
          <Text 
		    onClick={Gardening}
            size="15px"
            lineHeight="40px"
            fontWeight="700"
            color="#3D3D3D"
            margin="10px 13px"
          >
            Gardening  <p>(12)</p>
          </Text>
        </Block.Left>
        <div>
          <Block.Right>
			
            {fit?.map((value, ind) => {
              return (
                <Card key={ind}>
                  <img src={value?.img} alt="" />
				    <p> {value?.title}</p>
				     <h3>${value?.price}</h3>
                </Card>
              );
            })}
          </Block.Right>
	  <PaginationAnt current={current} onChange={onChange} total={50} />
        </div>
      </Block>
  <BoxImg>
    <h3>Super Sale</h3>
  <ImgTop src={BootomImg}/>
  </BoxImg>
    </Box>
  );
};

export default FilterBlock;
