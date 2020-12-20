---
title: 심플한 쇼핑몰, "SIMSINSA"
tags: ['Java', 'JSP', 'Oracle', 'JS']
category: Web Application
image: './icon.png'
date: "2020-01-28T22:12:03.284Z"
description: "SIMSINSA는 심플함을 추구하는 쇼핑몰입니다. MUSINSA를 Clone하면서도 심플함을 노력했습니다."
---
# Introduction
--------------------------

## 게시글을 작성하여 팀 소통하고, 경기일정을 조율하여 지역랭킹 1등을 달성하세요!

## Concept


<br/>

# 프론트 엔드
--------------------------
첫 `React` 프로젝트입니다. `Next`프레임워크를 활용하여 SSR을 통한 자연스러운 사용자 경험을 제공하였습니다. 사이트의 규모가 큰 만큼 `Redux`를 사용하여 상태관리를 하였습니다. 또한 `Redux-saga`를 통해 사이드이펙트를 효과적으로 처리하였습니다. `styled-component`를 통해 CSS in JS를 구현하였고, 단점을 기존의 `Sass`로 보완하며 스타일을 처리하였습니다.

# 백 엔드
--------------------------
`Node` 런타임을 활용하여 `Express`로 서버를 구현하였습니다. `Passport`를 인증 미들웨어로 사용하여 로그인기능울 구현하였습니다. 특히 기존의 세션방식에서 `JWT`를 사용한 토큰방식으로 더 규모가 큰 웹사이트에 맞는 방식을 택하였습니다. DB에는 `Sequelize`를 통해 데이터 CRUD를 처리하였습니다.

