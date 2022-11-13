/** @format */

import { Pagination } from "antd";
import React, { useEffect, useReducer, useState } from "react";
import { Block, Card, CenterText, Text } from "./style";

const FilterBlock = () => {
  const [data, setData] = useState();
  const [fit, fitSet]=useState();
  const [current, setCurrent] = useState(3);
  useEffect(() => {
    fetch("https://greenshophorizontteam.herokuapp.com/product")
      .then((res) => res.json())
      .then((res) => {

        setData(res);
      });
  }, []);

  const HousePlants = () => {
    let res = data.filter((item) => { 
      return item.type === "houseplants";
    });
    fitSet(res);
	setActive("houseplants");
  };


  const Potterplants = () => {
    let res = data.filter((item) => { 
      return item.type === "potterplants";
    });
    fitSet(res);
	setActive("potterplants");

  };
  const Son = () => {
    let res= data.filter((item) => { 
      return item.type === "bigplants";
    });
    fitSet(res);
	setActive("bigplants");
  };
  const Smallplants = () => {
    let res = data.filter((item) => { 
      return item.type === "smallplants";
    });
    fitSet(res);
	setActive("smallplants");
  };
  const Bigplants = () => {
    let res = data.filter((item) => { 
      return item.type === "bigplants" ;
    });
    fitSet(res);
	setActive("bigplants");
  };

  const Gardening = () => {
    let res = data.filter((item) => { 
      return item.type === "gardening";
    });
    fitSet(res);
	setActive("gardening");
  };
  const onChange = (page) => {
       setCurrent(page===1 && HousePlants() ) || setCurrent(page===2 && Potterplants() )|| setCurrent(page===3 && Smallplants() )|| setCurrent(page===4 && Gardening() )||setCurrent(page===5 && Bigplants() );
  };
console.log(active,'sdfs');
  return (
    <>
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
            House Plants
          </Text>
          <Text 
		  onClick={Potterplants}
            size="15px"
            lineHeight="40px"
            fontWeight="700"
            color="#3D3D3D"
            margin="10px 13px"
          >
            Potter Plants
          </Text>
          <Text 
		    onClick={Son}
            size="15px"
            lineHeight="40px"
            fontWeight="700"
            color="#3D3D3D"
            margin="10px 13px"
          >
            Seeds
          </Text>
          <Text 
		    onClick={Smallplants}
            size="15px"
            lineHeight="40px"
            fontWeight="700"
            color="#3D3D3D"
            margin="10px 13px"
          >
            Small Plants
          </Text>
          <Text 
		    onClick={Bigplants}
            size="15px"
            lineHeight="40px"
            fontWeight="700"
            color="#3D3D3D"
            margin="10px 13px"
          >
            Big Plants
          </Text>
          <Text 
		    onClick={Gardening}
            size="15px"
            lineHeight="40px"
            fontWeight="700"
            color="#3D3D3D"
            margin="10px 13px"
          >
            Gardening
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
	  <Pagination current={current} onChange={onChange} total={50} />
        </div>
      </Block>
    </>
  );
};

export default FilterBlock;
