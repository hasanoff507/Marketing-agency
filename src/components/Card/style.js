import styled from "styled-components";
export const Wrapper =styled.div`
    margin-left: -1rem;
    margin-right: -1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    display: flex;
    flex-direction: column;
    background-color: #0080ff;
    /* width: 40%; */
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    
    padding: 30px;
    &:nth-child(1){
      width: 30%;
    }
    &:nth-child(2){
      width: 30%;
    }
    &:nth-child(3){
      width: 30%;
    }
    @media screen and (max-width: 1200px){
      width: 350px !important;
      margin: 20px 0;
    }
    
    @media screen and (max-width: 600px){
      width: 90% !important;
    }

  .header {
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 2rem;
    line-height: 2.2rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: #fff;
    text-align: center;
  }

  .price {
    font-size: 3.75rem;
    line-height: 1;
    font-weight: 700;
    color: #fff;
    @media only screen and (max-width: 600px) {
      font-size: 40px;
    }
  }

  .desc {
    margin: 10px 0;
    line-height: 1.625;
    color: #fff;
  }

  .lists {
    flex: 1 1 0%;
    color: rgb(232, 232, 232);
    margin: 20px 0;
  }

  .lists .list {
    margin-bottom: 1rem;
    display: flex;
    margin-left: 0.5rem
  }

  .lists .list svg {
    height: 1.5rem;
    width: 1.5rem;
    flex-shrink: 0;
    margin-right: 0.5rem;
    color: #fff;
  }

  .action {
    //background-color: ;
    padding: 11px 30px;
    border: unset;
    border-radius: 20px;
    color: #222;
    z-index: 1;
    background: #fff;
    position: relative;
    font-weight: 600;
    font-size: 17px;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    overflow: hidden;
    display: block;
    margin: 10px auto;
    transition: all 450ms;
    letter-spacing: .5px;
    margin-bottom: 0;
    @media only screen and (max-width: 600px) {
      margin-bottom: 0;
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background: rgb(0, 89, 255);
      //background-color: #222222;
      background-color: #0dc569;
      width: 0;
      border-radius: 15px;
      z-index: -1;
      -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
      box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
      transition: all 450ms;
    }

    &:hover {
      cursor: pointer;
      color: #fff;

    }

    &:hover::before {
      width: 100%;
    }
    

    &:hover {
      background-color: #49CB86;
    }
  }
`;