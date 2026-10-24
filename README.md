# 모의 면접

내가 등록한 질문으로 혼자 면접을 연습하는 모바일 앱입니다.
질문 리스트에서 무작위로 10문항을 뽑아, 준비 시간과 답변 시간 타이머와 함께 실전처럼 답변해 볼 수 있습니다.

- **개발 전담**: 개발부터 빌드, 스토어 배포까지 혼자 진행 (디자인은 별도)
- **iOS App Store 출시** (v1.0.2). 현재는 업데이트가 중단되어 스토어에서 내려간 상태입니다.
- **Android**: 프로덕션 출시 전 비공개 테스트 요건(테스터 모집)으로 출시하지 않음

<!-- 스크린샷: 홈 / 질문 리스트 / 면접 진행 / 면접 완료 화면 -->

## 주요 기능

| 화면 | 기능 |
| --- | --- |
| 홈 | 면접 시작, 질문 리스트 이동. 등록된 질문이 없으면 안내 모달 표시 |
| 질문 리스트 | 질문 추가, 수정, 삭제 (최대 100개). 기기 로컬 저장소에 보관 |
| 면접 진행 | 등록된 질문 중 무작위 10문항 출제, 이전/다음 이동, 중단 시 확인 모달 |
| 타이머 | 준비 5초 후 답변 60초 타이머가 자동 시작. 일시정지/재개 가능, 시간 초과 시 초과 시간을 붉은색으로 표시하고 10분을 넘기면 다음 질문으로 이동 |
| 면접 완료 | 새 문항으로 재시작, 질문 리스트 또는 홈으로 이동 |

## 기술 스택

- **Expo SDK 52**, React Native 0.76, TypeScript
- **상태 관리**: Zustand
- **스타일**: NativeWind (Tailwind CSS)
- **내비게이션**: React Navigation (native-stack)
- **저장소**: AsyncStorage
- **빌드/배포**: EAS Build

## 폴더 구조

```
├── App.tsx              # 폰트 로딩, 스플래시, 내비게이션
├── screens/             # home, questions, interview
├── components/
│   ├── base/            # 공통 UI 컴포넌트 (Button, Input, Modal, Text)
│   ├── common/
│   ├── home/
│   ├── question/
│   └── interview/
├── stores/              # Zustand 스토어
├── service/question/    # 질문 CRUD
├── libs/                # AsyncStorage 래퍼, 무작위 출제 유틸
├── hooks/
├── constants/
└── types/
```

## 실행

```bash
pnpm install
pnpm start        # Expo 개발 서버
pnpm ios          # iOS 시뮬레이터
pnpm android      # Android 에뮬레이터
```
