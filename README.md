![project02](https://user-images.githubusercontent.com/110226576/209828018-6590f631-9e68-4e70-9cbc-c43d87a0978c.png)


# NETFLIX (SPA_react)
실시간 인기 / 평점 / 개봉예정 순으로 영화를 나열하고 소개해주는 SPA 사이트
<br/><br/>
## 사이트 주소
- <a href="https://pcy09-netflix.netlify.app/" target="_blank">웹사이트</a>
<br/><br/>
## 프로젝트 설명

### overview
TMDB 실시간 데이터를 가져와서 영화들을 인기순 / 평점순 / 개봉예정 순으로 구분하고 영화를 클릭하면 해당영화의 영화 정보 / 비슷한 영화 / 리뷰 등을 소개해주는 페이지로 이동되도록 하였습니다. 
### 주요 기능 (React)
* router를 이용하여 하나의 페이지에서 렌더링
* redux(@toolkit)를 이용하여 store(configureStore)에 값들을 저장하기
* useSelector를 이용하여 store에 저장한 값들 불러오기
* axios를 이용하여 TMDB 실시간 데이터 가져오기
* Carousel을 이용하여 슬라이드 기능 구현
* useParams를 이용하여 해당 영화 id값 가져오기
* StarRatings를 이용하여 리뷰 평점을 별점으로 구현
* moment를 이용하여 리뷰 날짜 표현방식 설정
* useLocation, useEffect, scrollTo를 이용하여 페이지가 이동할 때마다 스크롤 맨 위로 설정
* YouTube를 이용하여 해당 영화의 공식 트레일러 영상 보여주기







