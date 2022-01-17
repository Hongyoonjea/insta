import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <body id="insta">
    <div className="insta-border">
      <div className='fixed-top'>
        <div className="top">
          <div className="top__column">
            <span className="top__column-text">2:22</span>
            <i className="fas fa-location-arrow fa-xs"></i>
          </div>
          <div className="top__column">
            <i className="fas fa-signal fa-xs"></i>
            <i className="fas fa-wifi fa-xs"></i>
            <i className="fas fa-battery-three-quarters fa-xs"></i>
          </div>
        </div>

       {/* top */}

        <div className="header">
          <div className="header__column">
            <span className="header__column-text">Instagram</span>
          </div>
          
          <div className="header__icons">
            <div className="header__column">
              <i className="far fa-plus-square fa-lg" ></i>
              <i className="far fa-heart fa-lg"></i>
              <i className="far fa-paper-plane fa-lg"></i>
            </div>
          </div>
        </div>
      </div>

       {/* header */}

     <div className="pictures">
      <div className="user">
        <div className="use__component">
          <img src="sd.jpg"  className="user__component-avatar" />
          <div className="user__component-text">
            <span className="user__component-name">내 스토리</span>
          </div>
        </div>
        <div className="user__component">
          <img src="sdd.jpg" className="user__component-avatar" />
          <div className="user__component-text">
            <span className="user__component-name">j__chobi</span>
          </div>
        </div>

        <div className="use__component">
          <img src="sds.jpg"  className="user__component-avatar" />
          <div className="user__component-text">
            <span className="user__component-name">ys_062</span>
          </div>
        </div>

        <div className="use__component">
          <img src="sdds.jpg"  className="user__component-avatar" />
          <div className="user__component-text">
            <span className="user__component-name">sunny</span>
          </div>
        </div>

        <div className="use__component">
          <img src="sdss.jpg"  className="user__component-avatar" />
          <div className="user__component-text">
            <span className="user__component-name">y.jea_97</span>
          </div>
        </div>

      </div>
     </div>


     <div className="ad">
       <div className="ad_photo">
        <div className='title-wrap'>
          <img src="sdss.jpg" className="ad_img-first"  />
          <div className='title-text-wrap'>
            <div>
              <h5 className="title-text-top" >nomad_coders</h5>
              <h6 className="title-text-bottom">sponsored</h6>
            </div>
          <i className="fas fa-ellipsis-h"></i>
          </div>
        </div>

        <div className="ad_img-photo">
          <img src="nomad.jpg" className="ad_background" />
        </div>
        
        <ul className="ad_list">
          <div className="ad_icons">
            <div className="ad_icons-icon">
              <i className="far fa-heart fa-lg"></i>
              <i className="far fa-comment fa-lg"></i>
              <i className="far fa-paper-plane fa-lg"></i>
            </div>
            <i className="far fa-bookmark fa-lg"></i>
          </div>
        </ul>
        
        <ul className="gume">
          <h5 className="gume_text">좋아요 343개</h5>
          <h6  className="gume_textt">nomad_coders 
            <span className="gume_texttt">저 세상 무료강의로 이세상을 뒤집으러 온 30만 유튜버 니꼬쌤의 
            코딩 강의...</span> 
            <span className="gume_shadow">더보기</span></h6>
            <h6 className="gume_shadow">댓글 7개 모두 보기</h6>
        </ul>

       </div>
    </div>



     <div className="under">
      <div className="under__column">
        <i className="fas fa-home fa-lg"></i>
        <i className="fas fa-search fa-lg"></i>
        <i className="far fa-caret-square-right fa-lg"></i>
        <i className="fas fa-shopping-bag fa-lg"></i>
        <img src="sd.jpg"  className="under__column-avatar" />
        
      </div>
     </div>
    </div>
   </body>
  );
}

export default App;
