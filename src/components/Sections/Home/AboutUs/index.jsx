import React from "react";
import { Box, Container, Row, SvgContainer, Title, Wrapper } from "./style";
import { ReactComponent as TechSvg } from "../../../../assets/serviceItems/technology.svg";
import { ReactComponent as AdoptionSvg } from "../../../../assets/serviceItems/responsive.svg";
import { ReactComponent as DesignSvg } from "../../../../assets/serviceItems/creative.svg";
import { ReactComponent as SettingSvg } from "../../../../assets/serviceItems/web sey.svg";
import { ReactComponent as LoopSvg } from "../../../../assets/serviceItems/loop.svg";
import { ReactComponent as BoxSvg } from "../../../../assets/serviceItems/box.svg";

const AboutUs = () => {
  return (
    <Wrapper id={"AboutUs"}>
      <Container>
        <Title>
          <h1 className="font40 extraBold flexCenter">We are your partner in success.</h1>
          <p className={"subtitle"}>
            Since 2005, we have been providing digital marketing services for
            companies, brands, and products aiming for leadership. Your project
            will be handled by a team of skilled marketers with 17 years of
            experience in online promotion, having completed over 1,000 projects
            across various niches and countries. Join us! Be a leader in your
            niche!
          </p>
        </Title>
        <Row>
          <Box>
            <SvgContainer>
              <TechSvg />
            </SvgContainer>
            <p className={"box-title"}>ИННОВАЦИОННЫЕ ТЕХНОЛОГИИ</p>
            <div className={"box-text"}>
              Используем передовые решения для быстрой и безопасной работы ваших
              сайтов
            </div>
          </Box>
          <Box>
            <SvgContainer>
              <AdoptionSvg />
            </SvgContainer>
            <p className={"box-title"}>ОТЗЫВЧИВАЯ АДАПТАЦИЯ</p>
            <p className={"box-text"}>
              Гарантируем идеальное отображение сайта на любом экране и
              устройстве
            </p>
          </Box>
          <Box>
            <SvgContainer>
              <DesignSvg />
            </SvgContainer>
            <p className={"box-title"}>ДИЗАЙН С УЧЕТОМ ТРЕНДОВ</p>
            <p className={"box-text"}>
              Создаем современные дизайнерские решения, направленные на
              привлечение клиентов
            </p>
          </Box>
        </Row>

        <Row>
          <Box>
            <SvgContainer>
              <SettingSvg />
            </SvgContainer>
            <p className={"box-title"}>КОНТЕНТНОЕ СОПРОВОЖДЕНИЕ</p>
            <div className={"box-text"}>
              Предоставляем комплексное содержание и обновления для вашего сайта
            </div>
          </Box>
          <Box>
            <SvgContainer>
              <LoopSvg />
            </SvgContainer>
            <p className={"box-title"}>ПЕРСОНАЛЬНЫЙ ПОДХОД</p>
            <p className={"box-text"}>
              Для нас каждый проект уникален, и мы уделяем внимание деталям
            </p>
          </Box>
          <Box>
            <SvgContainer>
              <BoxSvg />
            </SvgContainer>
            <p className={"box-title"}>РАСШИРЕННЫЕ ВОЗМОЖНОСТИ</p>
            <p className={"box-text"}>
              Внедряем сложные и уникальные функции, чтобы ваш сайт стоял в
              авангарде рынка
            </p>
          </Box>
        </Row>
      </Container>
    </Wrapper>
  );
};
export default AboutUs;
