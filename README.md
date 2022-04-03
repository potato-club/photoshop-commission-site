# 애완동물 여행추천 커뮤니티 사이트

### 디렉토리 설명

assets - 이미지, 폰트 등을 저장

components - 2개이상의 페이지에 사용되는 '공용' 컴포넌트를 저장

constants - color, size 같은 값을 저장

containers - pages에 들어갈 View 컨테이너를 저장
containers/TestPage/components - TestPages에만 사용될 컴포넌트를 저장

pages - 라우팅 될 페이지를 저장, Page의 로직파트가 들어감 , containers 폴더에서 View 파일만 import만 함

<br/>

### 브랜치 설명

main :배포 브랜치

develop :main브랜치에 넘어가기 전단계, 모든 브랜치는 develop에서 생성되어야 합니다.

Ex)
feat/login :로그인개발 브랜치 (main -> develop -> feat/login)

<br/>

### commit 설명

feat: 신 기능 개발 브랜치

fix: 버그 fix

style: 스타일 변경

chore: 간단한 이미지 교체, 스타일 변경 등 위 type들에 해당하지 않는 잡무, 만일 커밋이 두 개 이상의 타입에 해당하는 경우, 커밋을 타입 단위로 쪼개어 커밋합니다.
