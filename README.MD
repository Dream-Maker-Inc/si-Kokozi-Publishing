## 화면 목록

전체 진행 상황 :

- 전체 화면 개수 `71`
- 완성 화면 개수 `65`

### Pre-login

- A.**~~Pre-login~~**
    - [x] **~~Splash~~** `./src/screens/pre-login/Splash`
    - [x] **~~Tab 1~~** `./src/screens/pre-login/Intro`
    - [x] **~~Tab 6~~** `./src/screens/pre-login/Welcome`

### 코코지 하우스

- A. **~~코코지 하우스~~**
    - [x] **~~하우스가 비어있을 때 / 아띠를 넣었을 때~~** `./src/screens/BottomTabs`
    - [x] **~~반복 재생 / 셔플 재생~~** `./src/screens/kokozi-house/BlankPlaylist`
    - [x] **~~다락방 불빛 도움말~~** `./src/screens/kokozi-house/LighteningHelp`
    - [x] **~~코코지 하우스 설정~~** `./src/screens/kokozi-house/SleepingModeSetting`


- B. **~~코코지 하우스 초기 세팅~~**
    - [x] **~~코코지 하우스 세팅 1~~** `./src/screens/kokozi-house/first-setting/setting/SettingStart`
    - [x] **~~코코지 하우스 세팅 2~~** `./src/screens/kokozi-house/first-setting/setting/SettingChecklist`
    - [x] **~~AP모드 연결~~** `./src/screens/kokozi-house/first-setting/ap-connection/APConnectStart`
    - [x] **~~AP 모두 연결 완료~~** `./src/screens/kokozi-house/first-setting/ap-connection/APConnectFinish`
    - [x] **~~와이파이 연결 1~~** `./src/screens/kokozi-house/first-setting/wifi-connection/ConnectList`
    - [x] **~~와이파이 연결 2~~** `./src/screens/kokozi-house/first-setting/wifi-connection/Information`
    - [x] **~~와이파이 연결 3~~** `./src/screens/kokozi-house/first-setting/wifi-connection/ConnectProcess`
    - [x] **~~와이파이 연결 4~~** `./src/screens/kokozi-house/first-setting/setting/ConnectSuccess`
    - [x] **~~코코지 하우스 등록~~** `./src/screens/kokozi-house/first-setting/setting/ConnectionComplete`
    - [x] **~~이름 등록~~** `./src/screens/kokozi-house/first-setting/name/Name`
    - [x] **~~아이 정보 등록~~** `./src/screens/kokozi-house/first-setting/kids/Kids`
    - [x] **~~세팅 완료~~** `./src/screens/kokozi-house/sub/RegisterComplete`


- C. **~~코코지 하우스 세팅 기타 화면~~**
    - [x] **~~이미 등록된 하우스~~** `./src/screens/kokozi-house/setting-etc/AlreadyRegistered`
    - [x] **~~정품 코코지 하우스가 아닌 경우~~** `./src/screens/kokozi-house/setting-etc/IllegalProduct`

### 아띠

- **~~A. 아띠 탭~~** `./src/screens/BottomTabs`
    - [x] **~~모두~~**
    - [x] **~~아띠~~**
    - [x] **~~매직아띠~~**
    - [x] **~~모두 - 아이템 리스트~~**


- B. **~~매직아띠 등록~~**
    - [x] **~~매직 아띠 등록~~** `./src/screens/Atti/blank/magic-atti/sub/RegisterFirst`
    - [x] **~~매직 아띠 등록 2~~** `./src/screens/Atti/blank/magic-atti/sub/RegisterSecond`
    - [x] **~~이미 등록됨~~** `./src/screens/Atti/blank/magic-atti/sub/error/AlreadyRegistered`
    - [x] **~~등록 완료~~** `./src/screens/Atti/blank/magic-atti/sub/RegisterSuccess`


- C. **~~아띠 삭제~~**
    - [x] **~~매직아띠 삭제 - 상태관리라 제작 필요 없음~~**


- D. **~~아띠 상세페이지~~** `./src/screens/Atti/no-blank/detail/Detail`
    - [x] **~~아띠 상세페이지~~**


- E. **~~매직아띠 프로필 편집~~**
    - [x] **~~플레이리스트 순서 변경~~** `./src/screens/Atti/no-blank/edit/Edit`
    - [x] **~~플레이리스트 교체~~** `./src/screens/Atti/no-blank/playlist/BlankPlaylist`
    - [x] **~~교체 가능한 플레이리스트~~** `./src/screens/Atti/no-blank/playlist/PlaylistChange`
    - [x] **~~플레이리스트가 존재하지 않을 때~~** `./src/screens/Atti/no-blank/playlist/PlaylistEmpty`

### 이야기

- A. **~~이야기 탭~~**
    - [x] **~~이야기 탭~~** `./src/screens/story/no-blank/StoryTopTabs`
        - (`BottomTabs` 에서 사용하는 컴포넌트이므올 실행은 `BottomTabs` 에서 하셔야 합니다)
    - [x] **~~전체보기 - 내 이야기~~** `./src/screens/story/no-blank/story/MyStory`
    - [x] **~~전체보기 - 게스트 이야기~~** `./src/screens/story/no-blank/story/GuestStory`


- B. **~~이야기 삭제~~**
    - [x] **~~이야기 삭제~~** `./src/screens/story/no-blank/story/RemoveStory`


- D. **~~플레이리스트에 담기~~**
    - [x] **~~플레이리스트에 담기~~** `./src/screens/story/no-blank/story/AddToPlaylist`


- E. **~~이야기 상세페이지~~**
    - [x] **~~사용자가 직접 녹음한 경우~~**
        - 데이터 없음 : `./src/screens/story/no-blank/story/detail/blank/MyStoryDetail`
        - 데이터 있음 : `./src/screens/story/no-blank/story/detail/no-blank/MyStoryDetail`


- F. **~~이야기 공유~~**
    - [x] **~~플레이리스트에 담기~~** `./src/screens/story/no-blank/story/share/RecordFinish`
    - [x] **~~호스트 선택하기~~** `./src/screens/story/no-blank/story/share/SelectHost`
    - [x] **~~이야기 공유하기~~** `./src/screens/story/no-blank/story/share/Checklist`
    - [x] **~~이야기 상세~~** `./src/screens/story/no-blank/story/share/StoryDetail`
    - [x] **~~이야기 공유~~** `./src/screens/story/no-blank/story/share/SelectStory`


- G. **~~이야기 녹음~~**
    - [x] **~~녹음 시작~~** `./src/screens/story/record/RecordStart`
    - [x] **~~녹음 카운트다운 - 3~~** `./src/screens/story/record/RecordCountDown`
    - [x] **~~녹음 중~~** `./src/screens/story/record/Recording`
    - [x] **~~확인하기~~** `./src/screens/story/record/RecordCheck`
    - [x] **~~이야기 저장~~** `./src/screens/story/record/RecordSave`
    - [x] **~~축하해요~~** `./src/screens/story/record/Congratulations`


- H. **~~플레이리스트 탭~~**
    - [x] **~~플레이리스트~~** `./src/screens/BottomTabs`


- I. 플레이리스트 만들기
    - [ ] 이야기 불러오기
    - [ ] 모든 항목을 채웠을 때


- J. 플레이리스트 삭제
    - [ ] 플레이리스트 삭제


- L. 플레이리스트 편집
    - [ ] 플레이리스트
    - [ ] 플레이리스트 편집

### 마이페이지

- **~~A. 마이페이지~~** `./src/screens/mypage/MyPage`
    - [x] **~~로그인 상태일 때~~**


- B. **~~프로필 변경~~**
    - [x] **~~프로필 변경~~** `./src/screens/mypage/profile-edit/ProfileEdit`


- C. **~~설정~~**
    - [x] **~~이벤트 / 혜택 알림 설정~~** `./src/screens/mypage/setting/NotificationSetting`
    - [x] **~~코코지 하우스 정보~~**  `./src/screens/mypage/information/HouseVersion`


- D. **~~사용자 설정~~**
    - [x] **~~초대한 게스트가 없을 때~~** `./src/screens/mypage/user/NoGuests`
    - [x] **~~게스트 관리~~** `./src/screens/mypage/user/Guests`
    - [x] **~~게스트 프로필~~** `./src/screens/mypage/user/GuestProfile`


- E. 기타
    - [ ] 도움말 - 디자인 보류 `./src/screens/mypage/information/Help`
    - [x] **~~버전 정보~~** `./src/screens/mypage/information/AppVersion`

### 기타

- A. 알림
    - [x] **~~알림 - N/A~~** `./src/screens/mypage/notification/SettingsBlankTopTabs`
    - [x] **~~알림~~** `./src/screens/mypage/notification/SettingsTopTabs`
    - [x] **~~공지사항 - N/A~~** `./src/screens/mypage/notification/SettingsBlankTopTabs`
    - [x] **~~공지사항~~** `./src/screens/mypage/notification/SettingsTopTabs`