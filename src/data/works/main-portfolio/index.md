---
title: 풋살 SNS, "FUTCHALL"
tags: ['React', 'Next', 'Express', 'Redux']
category: Web Application
image: './icon.png'
date: "2020-11-28T22:12:03.284Z"
description: "Futchall은 풋살을 위한 커뮤니티 및 순위랭킹 어플리케이션입니다. Pokémon GO에서 영감을 얻어 점령 시스템을 구현하였습니다. 구장을 점령하며 점령된 팀을 지도상에 표시하도록 만들었습니다."
---
# Introduction
--------------------------
[Futchall](https://futchall.com)
## 게시글을 작성하여 팀 소통하고, 경기일정을 조율하여 지역랭킹 1등을 달성하세요!

## Concept

1. Pokémon GO의 체육관 점령을 모티브로 하여 풋살구장 점령을 구현하였습니다.
2. 자신의 팀을 등록하여 유저가입을 승인하고 타 팀과 매칭을 잡을 수 있습니다.
3. 본인이 참석할 수 있는 날짜를 선택하여 팀 리더의 경기일정 조율을 도울 수 있습니다.
4. 팀과 구장에 게시글을 등록하여 타 유저와 소통할 수 있습니다.
5. 알고있는 구장을 등록하고 해당구장을 점령할 수 있습니다.
6. 구장을 점령하여 전체 팀 랭킹을 올릴 수 있습니다.
7. 사용자의 ID를 제외한 모든 정보를 수정&변경할 수 있습니다.

<br/>

# 프론트 엔드
--------------------------
첫 `React` 프로젝트입니다. `Next`프레임워크를 활용하여 SSR을 통한 자연스러운 사용자 경험을 제공하였습니다. 사이트의 규모가 큰 만큼 `Redux`를 사용하여 상태관리를 하였습니다. 또한 `Redux-saga`를 통해 사이드이펙트를 효과적으로 처리하였습니다. `styled-component`를 통해 CSS in JS를 구현하였고, 단점을 기존의 `Sass`로 보완하며 스타일을 처리하였습니다.

# 백 엔드
--------------------------
`Node` 런타임을 활용하여 `Express`로 서버를 구현하였습니다. `Passport`를 인증 미들웨어로 사용하여 로그인기능울 구현하였습니다. 특히 기존의 세션방식에서 `JWT`를 사용한 토큰방식으로 더 규모가 큰 웹사이트에 맞는 방식을 택하였습니다. DB에는 `Sequelize`를 통해 데이터 CRUD를 처리하였습니다.

# 배포
--------------------------
`AWS`를 적극활용하였습니다. `EC2 인스턴스` 2개를 활용하여 각각 프론트와 백엔드의 서버로 사용하였습니다. 또한 게시글에 포함된 사진 등 이미지파일을 `S3`로 저장하였습니다. 특히 `lambda`를 이용하여 이미지 저장시 이미지를 resizing하여 썸네일 사진으로 사용하였습니다. 또한 `lambda`와 `CloudWatch`를 사용하여 서버를 자동으로 켜고 끄도록 만들어 서버 이용요금을 30% 절약하였습니다. 또한 vscode에서 git으로 push하면 `Travis CI`를 통해 `Jest` Test 후 자동배포하도록 구축하였습니다. 특히 `docker`와 `AWS`, `Nginx`를 통해 무중단배포를 구축하였습니다.
