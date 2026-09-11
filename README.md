# VALUEON MAKE v4

구성
- 메인
- WORKS
- ABOUT / PROCESS
- 8개 카테고리 상세페이지
  - package / beauty / food / living / stationery / gift / apparel / pet

이번 버전은 이미지보다 레이아웃 완성도 검수용입니다.
회색 placeholder만 있어도 전체 디자인 리듬이 보이도록 구성했습니다.

로컬 실행:
python -m http.server 8000

현재 실제 독립 이미지 적용:
- PACKAGE
- BEAUTY
- FOOD
- LIVING
- STATIONERY
- GIFT
- APPAREL

PET은 독립 이미지 생성 결과를 받아야 적용 가능하며, 현재는 디자인 placeholder를 유지합니다.

최종 디자인 보정:
- 실제 이미지 카드의 중복 HTML 제목 숨김
- 카드 비율 3:2로 높여 배너 느낌 제거
- 풀블리드 2열 / 모바일 1열
- hover 최소화
