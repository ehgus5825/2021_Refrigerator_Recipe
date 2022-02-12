# 🙂 냉장고를 부탁해
> 현재 냉장고에 들어있는 식재료를 인식하여 레시피를 추천해주는 어플리케이션입니다.

1. 서비스 설명
2. 냉장고를 부탁해
3. 영수증 인식 및 사물 인식
4. 레시피 추천
![](../header.png)

## 😀 1. 서비스 설명

### 1) 개발 동기
1. 상대적으로 금전적 여유가 적은 자취생들을 위해 냉장고 식재료 관리 및 레시피 추천 서비스 제공
2. 레시피 추천과 식재료 유통기한 관리를 통해 냉장고에 방치되는 식재료 부패 방지

### 2) 시스템 구성
![](https://user-images.githubusercontent.com/78461009/153702809-55db6723-f538-44f0-afbd-67b78b2a79a6.png)

- Youtube : 레시피 추천 시, 사용자가 레시피를 쉽게 이해할 수 있도록 유튜브 API를 통해 해당 레시피 조리 영상을 제공
- Google Cloud Vision API : 영수증 인식 및 사물 인식을 위해 사용되는 API
- Python : 레시피 정보를 저장하기 위해 파이썬 웹크롤링 사용
- Amazon webservices : 서버 구축

### 3) 서비스 화면

![](https://user-images.githubusercontent.com/78461009/153703102-70aff28f-0642-4ce4-879d-9c4aec50fde1.png)
![](https://user-images.githubusercontent.com/78461009/153703121-ddaeebba-24b6-4c5b-ba4c-0e7583d611c4.png)

## 😀 2. 냉장고를 부탁해
![](../header.png)
### 1) 화면 설명
사용자가 앱을 실행하면 가장 먼저 보이는 화면은 로그인 화면입니다. 

```sh
    //로그인 체크 쿼리
    let login_check = {
      qry:
        "SELECT * FROM `member` WHERE user_id = '" +
        userId +
        "' and user_pw = '" +
        userPassword +
        "'",
    };
    let result = await DataSet.overlabCheck(login_check);

    // DB 연결 후 loading 해제
    setLoading(false);
``` 
+ 아이디 및 비밀번호가 있을 시, 최초 로그인 이후에 로그인이 계속 유지되도록 코드를 구성하였습니다. 
+ 서버(DB)에 저장된 아이디와 사용자가 입력한 아이디가 같으면 0을, 다르면 1을 **result** 변수에 저장합니다.

```sh
if (Number(result)) {
      // 로그인 성공
      //global 모듈에 id 등록 -> 냉장고 테이블
      memberID.userID = userId;
      //로컬에 아이디 저장 -> 자동로그인
      await AsyncStorage.setItem('user_id', userId);
      //성공 후 DrawerTab 이동
      navigation.navigate('DrawerTab');
    } else {
      //로그인 실패
      Alert.alert('경고', '아이디 및 비밀번호를 다시 확인해주세요.');
    }
``` 
+ result가 1이면 전역변수 userID에 아이디를 저장합니다. result가 0이면 경고창을 띄웁니다


## 😀 DB 구성

![냉장고 DB ERD](https://user-images.githubusercontent.com/78461009/139594880-cbe2a043-2cc3-4905-8c04-d98724a56326.png)

🙋‍♀️ member(회원) DB

```sh
🟡 user_id : 회원 아이디(ID)
🟡 user_pw : 회원 비밀번호(PW)
🟡 user_name : 회원 실명
🟡 user_nickname: 회원 닉네임
🟡 user_email : 회원 이메일
🟡 user_bookmark : 회원 북마크
```

🙋 refrigerator(개인 냉장고) DB

```sh
🟢 no : 식별 번호 (auto)
🟢 ingredient_name : 재료명
🟢 ingredient_vol : 재료양
🟢 ingredient_buyDate: 구매일자
🟢 ingredient_expiryDate : 유통기한
🟢 ingredient_type : 재료유형 (냉장/냉동/조미료/실온)
🟢 ingredient_delChecked : 삭제여부 (0: 삭제 ❌ / 1: 삭제 ⭕️)
🟢 ingredient_imgPath : 재료 이미지 경로
➡ 외래키 : member 테이블의 userID
``` 

🙋‍♂️ recipe(레시피) DB

```sh
🔵 recipe_id : 레시피 고유번호
🔵 recipe_name : 레시피 이름
🔵 recipe_inbun : 레시피 인분
🔵 recipe_ingredient : 레시피 재료
🔵 recipe_cookStep : 조리방법
🔵 recipe_youtube : 레시피 유튜브 링크
🔵 recipe_developerArea : 레시피 재료 관련 개발자 사용 칼럼
➡ 외래키 : member 테이블의 userID
``` 

🐰 developer_ingredient(개발자 사용 재료 데이터) DB

```sh
⚫️ d_ingredientName : 개발자 지정 재료명
⚫️ d_ingredientUnit : 개발자 지정 재료 단위
``` 





## 😀 업데이트 내용

* 2021.03.01 ~ 2021.12.03
