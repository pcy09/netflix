![project02](https://user-images.githubusercontent.com/110226576/209828018-6590f631-9e68-4e70-9cbc-c43d87a0978c.png)


# NETFLIX (SPA_react)
실시간 인기 / 평점 / 개봉예정 순으로 영화를 나열하고 소개해주는 SPA 사이트
<br/><br/>
## 사이트 주소
- <a href="https://pcy09-netflix.netlify.app/" target="_blank">웹사이트</a>
<br/><br/>
## 프로젝트 설명

### overview
TMDB 실시간 데이터를 가져와서 인기순 / 평점순 / 개봉예정 순으로 구분하고 영화를 클릭하면 해당영화의 영화 정보/비슷한 영화/리뷰 등이 보여지도록 하였습니다. 
### 주요 기능 (React)
*router를 이용하여 하나의 페이지에서 렌더링
*redux(@toolkit)를 이용하여 store(configureStore)에 값들을 저장하기
*useSelector를 이용하여 store에 저장한 값들 불러오기
*axios를 이용하여 TMDB 실시간 데이터 가져오기
*Carousel을 이용하여 슬라이드 기능 구현
*useParams를 이용하여 해당 영화 id값 가져오기
*










## 주요 기능 (React)
* 실시간 영화 순위 불러오기
  - 인기순 / 평점순 / 개봉예정순
* 영화 정보 가져오기
  - 제목, 장르, 줄거리, 평점, 조회수 등
  - 영상정보 가져오기
* 공식 트레일러 영상 틀기
  - 공식 트레일러 영상 있는 경우 해당 영상 재생, 없는 경우 1번째 영상 재생

