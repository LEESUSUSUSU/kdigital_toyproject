
# __K3MiniProject - 부산 요양병원 및 복지관 위치 확인 

## 프로젝트 설명(목적 설명, 개발 기간)
> **부산대학교 k - digital 3기** <br/> **개발기간 : 2023.07 ~ 2023.08.17**


23-07-24 1일차 공공데이터 자료 수집 & 공공데이터 자료 DB 저장 & 깃 협업 시작 <br/>
23-07-25 2일차 공공데이터 추가 자료 수집 & 공공데이터 자료 DB 저장 & 웹 기획<br/>
23-07-26 3일차 공공데이터를 활용한 웹기획의 전반적인 트리결정<br/>
23-07-27 4일차 스프링부트 & 리액트 연결 시험 <br/>
23-07-28 5일차 스프링부트 & 리액트 연결 성공 <br/>
23-07-31 6일차 포지션 변경 <br/>
23-08-01 7일차 로그인 , 회원가입 구현 & 지도 위에 경로당 및 요양원 개별 표시 <br/>
23-08-02 8일차 리뷰 모달창 만들기 & 지도위 마커 클릭시 정보 호출 <br/>
23-08-03 9일차 리뷰 내용 전달 & 리뷰 insert 구현 <br/>
23-08-04 10일차 리뷰 내용 삭제  & 리뷰 delete 구현 <br/>
23-08-07 11일차 리뷰 내용 띄우기 & 리뷰 전체 불러오기 <br/>
23-08-08 12일차 리뷰 내용 수정 &  리뷰 update 문 구현<br/>
23-08-09 13일차 세부 내용 확인 & 오류 수정 하기 <br/>
23-08-10 14일차 꾸미기  <br/>
23-08-11 15일차 내용 정리  <br/>
23-08-11 16일차 발표 정리  <br/>






## 3. 목차 
[프로젝트 소개](#4-프로젝트-소개)  
[시작가이드](#5-시작가이드요구사항설치-및-실행)  
[기술 스택](#6-기술-스택)  
[Front End](#7-화면-구성-개발-화면에-대한-내용---fe)  
[Back End](#8-기능-구현---be)  
[주요기능](#9-주요-기능-📦) 



## 4. 프로젝트 소개

노인이 늘어가는 추세에  노인에게 맞춰진 웹 홈페이지 가 없는 요즘  
노인을 위한 직관적인 웹사이트를 한 번 만들어 보는것이 좋겠다는 생각에 부산을 기준으로 만들어 보았습니다.


## 5. 시작가이드(요구사항,설치 및 실행)

- Spring Boot Version :(v3.1.1)
- React Version:(v18.2.0 )



## 6. 기술 스택

### Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)    

### Stack
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![BootStrap](https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![SpringBoot](https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white)

+ Development Environment: Visual Studio Code, Git, GitHub
+ Development Stack: React, BootStrap, Spring Boot 


## 7. 화면 구성 (개발 화면에 대한 내용) - FE 

## 8. 기능 구현 - BE
- JWT 로그인 기능 (업데이트 중)
- 회원가입 기능
- Review게시판, 수정, 삭제 기능
- 복지관, 요양원 데이터
- 상세 개발 내용 → [바로가기](https://github.com/LEESUSUSUSU/kdigital_toyproject)

## 9. 주요 기능 📦

### ⭐️ 회원가입/로그인 기능 구현
- front에서 user 정보를 Back-End로 전송하면 데이터베이스에 해당 유저 정보를 추가함
- Back-End에서 사용자의 아이디와 비밀번호를 검증, 인증이 성공하면  큐리티의 `PasswordEncoder`를 이용하여 패스워드를 암호화
- 

### ⭐️ 검색 페이지에서 카카오맵 api를 이용해 직관적으로 시설확인 가능
- 카카오맵 api 를 이용해 복지관 및 요양원 마크를 다르게 주어 직관적으로 시설의 종류 확인 가능 

### ⭐️ 시설들의 리뷰 기능
- React - modal을 이용해서 시설들의 리뷰 기능 추가 
-main 창을 벗어나지 않아 노인들이 사용하기에 불편함이 없이 만듬

### ⭐️ 모달창에서 리뷰 작성 기능 구현
- 로그인 된 유저만이 리뷰를 작성하게 기능 함





=======
# 처음해보는 프로젝트 하면서 알게 된 것들
1.TIL <br/>
2.협업을 위한 툴 (excalidraw > 그림 파일 협업 가능)  <br/>


## 3. 팀원 
                       
|                         이수연                              |                           양소윤                 |             
| [GitHub](https://github.com/LEESUSUSUSU?tab=repositories)  | [GitHub](https://github.com/marine-yang-so-yun)  |




## 발표 내용

안녕하세요 이수연 양소윤 팀 입니다.

저희는 부산요양병원 및 복지관 데이터를 가지고  노인을 타겟으로 한  노인을 위한 나라 웹 홈페이지를 제작하게 되었습니다.

노인을 타겟 으로 한 웹사이트는 정보전달에 가장 큰 우선 순위에 두고 누구나 쉽게 직관적으로 정보를 찾아 볼 수 있도록

카카오맵 API 를 사용 하였고 

카카오맵 API 기능 중 

**다른 이미지로 마커 생성하기 를 이용하여  복지회관 과 요양원 차이를 두고 볼 수 있도록 하였습니다.**

이러한 과정에서 자바스프링 부트는 서블릿을 두지 않고 컨트롤러만 이용해서 정보를 불러오는 방식을 사용 하였습니다.

늘어나는 노인 계층으로 복지관 및 요양원들이 늘어나고 있지만 비교적 사회적약층인 노인의 위한 시설 및 서비스는 개선되지 않는 다는 점을 고려 하여

각 시설들이 경각심을 갖고 서비스가 개선되길 바라는 마음으로 리뷰 게시판을 모달창으로 만들어 메인을 벗어나지 않고 간편하고 직관적으로 리뷰를 확인할 수 있게 만들었습니다. 또한 , 무분별한 리뷰를 막기 위해 로그인된 사용자만 리뷰 게시판 작성이 이루어 질 수 있도록 만들게 되었습니다.

이러한 과정에서 자바스프링부트는  리뷰 게시판에서는   요청과 응답 정보를 편리하게 사용할 수 있도록 서블릿을 만들어 정보를 전달에 용의 할 수 있도록 만들었으며

로그인 보안은 스프링 시큐리티의 `PasswordEncoder`를 이용하여 패스워드를 암호화  하여 보안을 구성하였습니다.


감사합니다.

![KakaoTalk_20230816_123656558](https://github.com/LEESUSUSUSU/kdigital_toyproject/assets/129818934/c63def08-33bf-406c-b96d-bd2d162abd15)







 






=======

