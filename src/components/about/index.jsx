import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle, WhatIDoSection} from './style';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {SectionIntro, ContainerLayout} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
              <SubTitle> Front End Developer</SubTitle>
            </div> 
            <div>
              <Title> 개발자 <b className="text-primary lined-link">정재욱</b>입니다. </Title>
              <Text>수학과외로 비용을 충당하며 점철해온 수능을 끝내고 저는 인도에 갔습니다. 자신을 돌아보려는 떠난 인도는 저에게 개발자의 꿈을 다시금 확신하게 했습니다.</Text>
              <Text>인도에서 만난 Oyo rooms 개발자는 막연히 세상에 도움이 되겠다는 불투명한 개발자의 꿈을 지닌 저에게, 개발을 통한 이익창출과 사회로의 환원에 대한 현실적인 조언을 들려주었습니다.</Text>
              <Text>그러나 그 무엇보다도 구상한 무엇이든 만들어 낼 수 있다는 '가능성'이 저를 불타오르게 만들었습니다. 이러한 경험을 가지고 남들보다 조금 늦지만 하루하루를 불태우며 공부하고 있습니다.</Text>
              <Text>이력서 표면의 형식을 지금은 다채롭게 채워 넣지 못합니다. 그러나 이러한 부분은 앞으로 계속된 자기발전을 통해 채워나갈 것입니다. 끊임없이 개선점을 찾아 발전을 이루고 성장하겠습니다.</Text>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Title>저는 지금 <b className="text-primary lined-link">OO</b>을</Title>
              <Title>할 수 있습니다</Title>
            </div>
            <WhatIDoSection>
              <CircularProgressbar value={70} text="JS" styles={{ path: {stroke :'#e8d976'}, text: {fill: '#e8d976'} }} />
              <Text>ES6, ES11를 활용한 풀스택 개발을 했습니다. Node js를 활용하여 Express서버를 구성하여 운영중입니다.</Text>
              <CircularProgressbar value={80} text="React" styles={{ path: {stroke :'#D0b990'}, text: {fill: '#D0b990'} }} />
              <Text>Next로 프로젝트를 구현하였고, gatsby로 github페이지를 만들었습니다. 또한 styled-component를 사용하여 React에 css를 입혔습니다. Jest와 Enzyme을 통해 테스트 하였으며 현재 cypress를 통한 e2e test를 진행중입니다.</Text>
              <CircularProgressbar value={65} text="Java" styles={{ path: {stroke :'#b1876b'}, text: {fill: '#b1876b'} }}/>
              <Text>Spring프레임워크로 서버개발을 하였습니다. Mybatis를 이용하여 DB(Oracle)연결 및 CRUD처리를 하였습니다.</Text>
              <CircularProgressbar value={40} text="AWS" styles={{ path: {stroke :'#92574b'}, text: {fill: '#92574b'} }}/>
              <Text>AWS EC2로 프론트서버와 백엔드서버를 운영하였습니다. Nginx와 Docker, Travis CI를 활용하여 배포자동화 및 무중단배포를 구축하였습니다. 또한 다양한 시도(ex. 원하는 시간에 서버 켜고 끄기)와 활용을 하였고 이를 블로그에 기록으로 남겼습니다. </Text>
              <CircularProgressbar value={40} text="Docker" styles={{ path: {stroke :'#733136'}, text: {fill: '#733136'} }}/>
              <Text>개발한 웹 애플리케이션을 Dockerizing하여 EC2와 CodeDeploy를 사용하여 배포하였습니다.</Text>
              <CircularProgressbar value={70} text="RDBMS" styles={{ path: {stroke :'#541c2d'}, text: {fill: '#541c2d'} }}/>
              <Text>Mysql, Oracle을 활용하여 데이터 CRUD를 작업하였습니다. node에서는 Squelize를 활용하여 처리한 경험도 있습니다.</Text>
              <CircularProgressbar value={60} text="Git" styles={{ path: {stroke :'#350d23'}, text: {fill: '#350d23'} }}/>
              <Text>Git으로 소스코드를 관리하고 협업을 진행하였습니다. 또한 GithubPage를 통해 포트폴리오 사이트를 작업하였습니다.</Text>
            </WhatIDoSection>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
