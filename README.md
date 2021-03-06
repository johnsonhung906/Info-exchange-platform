# [109-2] Web Programming Final
## (Group62) info-exchange platform
#### Deployed 連結：https://info-x.herokuapp.com
#### Demo 連結：https://www.youtube.com/watch?v=j15GAfmThXY

## 描述這個服務在做什麼
* **資訊交換**：
    * **共享日曆**：在台大，每個人總是有著許多不同的身份與參與著各項的活動，但對於時間方面，在面對散落的資訊與時間時，卻總要自己將一個一個事項紀錄在自己的個人行事曆以掌握每件事情，且忘記時間的問題屢見不鮮。因此，我們希望藉由建立一個**台大資訊交換的日曆，讓同學間可以互相提醒，統合使用者在台大所有的排程**。
    * **即時地圖**：在要去任何一個地方之前，最麻煩的往往就是要事先了解一個地方的使用情形，若沒事先了解，常常會白跑一趟。因此我們建立了**一個可以即時瞭解現在使用情形的系統（球場、圖書館、咖啡廳），讓各位不會再因為白跑一趟而感到麻煩**。
ps.我們有設想在真實的情形要對使用者查找資訊的權限設定（ex.查三次需提供一次資訊等等），與資訊的驗證功能（ex.使用者是否真正在他提供的地方...）與運作，但是考量到demo的形式，我們決定在此次project先不做這種驗證與資訊平衡機制。
* **資訊統整**：
    * **考古題平台**：在網上找散落的考古題絕對是每個台大生都遇過的麻煩，所以我們建立了一個**考古題的交換系統，提供一個平台讓同學可以自行上傳與下載不同課堂的考古題內容**。

## 操作/使用方式
* **Register**：輸入姓名，帳號，密碼
* **Login** : 輸入帳號，密碼
* **Mainpage** 
    * **共享日曆**：
        1. 首先先於Courses,Places,Games,Clubs中加入自己有參加或感興趣的(課程、地方，社團，比賽)
        2. 在上方的ADD SCHEDULE中可加入事件在行事曆上
        3. 將左方想看見活動的該欄打勾，即可在日曆上顯示關於該堂課(地方，社團，比賽)的相關活動(共享，別人加入的也會看到)
        4. 想要修改或刪除該活動的話，則點擊該條bar即可更改
        5. 當一天的schedule多於四件時會產生+...more字樣，點擊可以得到當天的詳細資訊
        6. 在side bar的see my subscription 可以解除綁定
<<<<<<< HEAD
    * **即時地圖**:
        1. 點擊地圖上想去的地方，則會於左方side bar顯示關於該地方的資訊
        2. 在side bar中點擊change即可修改該位置的使用情形，點擊add review即可新增留言
        3. 地圖上的icon顏色是依據使用情形來區別
    * **考古題平台**:
        1. 選擇想要的科目並按搜尋icon，即可看到該堂課的相關考古題，點擊右方的save即可下載該檔案
        2. 點擊右上方的upload file，輸入想上傳的考古題的資訊，並選擇要上傳的pdf檔，按upload，再次點選搜尋鍵，即可看到上傳之文件
    * **Side bar**:
        1. 點選頭像可以更換自己想要的頭貼
        2. 於See my subscription 中可以看到自己訂閱的課程(地方，社團，比賽)且可以解除特定訂閱
        3. 點選Home, Student Calender, NTU Map, Past Exams分別可以到達該頁面
        4. Logout
    * **About us**:
        1. 可以看到3位製作者的資訊
    * **Github**:
        1. 點擊右上方github頭像，即可連接到我們的github repo
## 安裝與測試步驟
* **Frontend**
    * 至**frontend**子目錄下輸入
        ``` 
        yarn 
        yarn start
        ```
* **Backend**
    * **.env**
        ```
        MONGO_URL= //your database url
        ```
    * 至**backend**子目錄下輸入
        ```
        yarn
        yarn server
        ```

## 工作分配
* **陳昶旭** : 
    * 前端設計與實作
    * 影片錄製
* **洪國瀚** : 
    * 前端設計與實作
    * 前後端連接
    * 進度掌握 
    * 報告撰寫
* **方泓傑** : 
    * 後端, 資料庫處理
    * 前後端連接
    * 報告撰寫

## 使用套件
### 前端
* React.js
* React Hooks
* React Router
* react-spinners
* Material UI
* Mapbox
* React big calendar
* moment
### 前後端連接
* Axios
### 後端
* Node.js
* Express.js
* Mongoose
* Bcrypt
* Multer
* nodemon
* cors

### database
* MongoDB

## 專題製作心得

 * **洪國瀚** : 
 這次是我第一次參與的全端project，從一開始就要定義好前後端的溝通、後端的資料儲存架構到最後實際寫前後端，一路上修修改改，遇到了滿多問題，在不斷的查找資料與研究套件下完成了這項專案，在這之中讓我增加對前後端的理解，而其中我體會最深的就是前端設計的「以使用者為本」，使用者體驗是個不能忽視的環節，在做專題的過程中很多我自已為好看的設計，在使用者的眼中卻可能是多餘、麻煩，因此在設計時並非只能以設計者的角度思考，要去切合需求與使用體驗這才是對於前端最重要的。
 * **方泓傑**：
 透過這次的project，讓我能更熟悉前後端之間的溝通，資料庫儲存，並將想法實際應用出來。在實作的過程中，也常常遇到一些意想不到的bug，常常需要大量的查資料來解決問題，但也藉此提升了我查找資料的速度。除此之外，這也算是我第一次參與多人合作的project，也深刻體會到coding style與加註解的重要性，這次的final project真的讓我受用無窮。
 * **陳昶旭**：
這次專題讓我更深入的了解課堂所學習到的，不管是前端還是後端還是資料庫更讓我實際應用。做專題前我還是對所有前端後端各種軟件很陌生，多虧了兩位很厲害的組員讓我在討論過程中學習到很多更累積我得經驗。 

