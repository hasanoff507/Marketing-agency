import React, {useState} from "react";
// Components
import {Container, HeaderInfo, Wrapper} from "./styles";
import Card from "../../../Card";
import PopUp from "../../../popUp";
import {data} from "../../../../data"

const Pricing = () => {
    const [popUp, setPopUp] = useState(false);
  return (
    <Wrapper id="pricing">
        {popUp ? <PopUp popUp={popUp} setPopUp={setPopUp} /> : ""}

        <HeaderInfo>
            <h1 className="font40 extraBold">Explore Our Pricing</h1>
            <p className={"subtitle"}>
            Discover flexible pricing plans tailored to your business needs. From budget-friendly packages to comprehensive solutions, we offer transparent pricing with no hidden fees. Find the perfect plan to maximize your ROI and drive your business forward.
            </p>
        </HeaderInfo>
        <Container>
            {
                data.price.map(({id,title,subtitle,price,texts})=>{
                    return(
                        <Card
                            key={id}
                            title={title}
                            price={price}
                            subtitle={subtitle}
                            texts={texts}
                            click={()=> setPopUp(true)}
                        />
                    )
                })
            }
        </Container>

    </Wrapper>
  );
}
export default Pricing






