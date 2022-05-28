import React from 'react';
import css from './style.css';
import Slider from "./Components/slick";

function App() {
  return (
    <div className="container">
      <style>{'body { background-color: #071711;}'}</style>
      
      <nav className="top-menu">
        <a className="navbar-logo" href="rectangle"><img alt="" src="logo.png"/></a>
        <ul className="menu-main">
          <li><a href="#features">Features</a></li>
          <li><a href="#roadmap">RoadMap</a></li>
          <li><a href="#business">Business model</a></li>
          <li><a href="#partners">Partners</a></li> 
        </ul>
      </nav>
      <div id="rectangle"></div>
      <h1 className="text1">VALUE CREATION<br/>
      THOUGH <span className="color" >META-NFT</span><br/>
      ECOSYSTEM</h1>
      <h4 className="text2">Be a part of a democratized metaverse economy<br/>
      Unlock financial opportunities with one-of-a-kind marketplace<br/>
      model.</h4>
      <img className="img1" alt="0" src="images/img1.png"/>
      <a className="a1"  href="https://www.google.ru/">JOIN DISCORD</a>
      <img className="img2" alt="1" src="images/img2.png"/>
      <img className="img3" alt="2" src="images/img3.png"/>
      <img className="img4" alt="3" src="images/img4.png"/>
      <img className="img5" alt="4" src="images/img5.png"/>
      <img className="img6" alt="5" src="images/img6.png"/><p/>
      <img className="img7" alt="6" src="images/img7.png"/>
      <img className="img8" alt="7" src="images/Arrow.png"/>
      <h1 className="text3" id='features'>Features</h1>
      <div className="iconblock1">
        <div className="icon">
          <img src="images/icon1.png" alt="8" />          
        </div>
      <h3>COMMUNITY-<br/>DRIVEN</h3>
      <p className="p">INSTEAD JF THE TYPICAL<br/>
      BUYER-SELLER DRIVEN<br/>
      MARKET, META-N<br/>
      ALLOWS ALL STAKEHOLDERS<br/>
      TO PARTICIPATE<br/>
      THE VALUE<br/>
      CHAIN IN THE<br/>
      METAVERSE SPACE</p>
      </div>
      <div className="iconblock2">
        <div className="icon">
          <img src="images/icon2.png" alt="9" />
        </div>
        <h3>FAIR PRICE<br/>
        DISCOVERY</h3>
        <p className="p1">A FAIR AND TRANSPARENT<br/>
        PRICING FOR NFTs THAT IS<br/>
        DRIVEN BY THE COMMUNITY<br/> 
        PRESENT IN THE<br/>
        METAVERSE SPACE</p>
      </div>
      <div className="iconblock3">
        <div className="icon">
          <img src="images/icon3.png" alt="11" />
  
        </div>
        <h3>LOW<br/>
        BARRIERS</h3>
        <p className="p1">BUILT ON LAYER2 SOLITION<br/>
        WHICH ENABLES LOW<br/>
        GAS FEESAND<br/>
        ISENVIRONMENTALLY<br/>
        SUSTAINABLE</p>
      </div>
      <div className="iconblock4">
        <div className="icon">
          <img src="images/icon4.png" alt="12" />
  
        </div>
        <h3>ENHANCING<br/>
        METAVERSE<br/>
        EXPERIENCE</h3>
        <p className="p2">CREARORS AND BIDDERS<br/>
        COME FACE TO FACE<br/>
        IN THE<br/>
        SURREAL WORLD FOR THE<br/>
        VALUE CREATION</p>
      </div>
      <div className="iconblock5">
        <div className="icon">
          <img src="images/icon5.png" alt="13" />
  
        </div>
        <h3>REVERSE<br/>
        BIDDING</h3>
        <p className="p1">METAVERSE PARTICIPANTS<br/>
        WOULD PUT THE REQUEST<br/>
        FOR THE UTILITIES WHICH<br/>
        WILL BE DRIVEN BY<br/>
        THE NFTs</p>
      </div>
      <div className='icons'>
        <h1 className="text4"><span className="color" >META-N</span> VALUE PROPOSITION</h1>
        <div className="iconblock6">
          <div className="icon">
            <img src="images/Bidder.png" alt="14" />          
          </div>
        <h3>BIDDER</h3>
        <p className="ntext">Fair price discovery of the ART determined<br/>
        collectively by the community. The entire<br/>
        process is transparent in all aspects<br/></p>
        </div>
        <div className="iconblock6">
          <div className="icon1">
            <img src="images/IPFS.png" alt="15" />          
          </div>
        <h3 className="h31">IPFS</h3>
        <p className="ntext1">Storing digital collectables on-chain<br/>
        using IPFS (or the InterPlanetary File System)</p>
        </div>
        <div className="iconblock6">
          <div className="icon">
            <img src="images/NFTrentals.png" alt="16" />          
          </div>
        <h3>NFT RENTALS</h3>
        <p className="ntext">Rent digital collectibles in the secondary<br/>
        marketplace to earn passive income</p>
        </div>
        <div className="iconblock6">
          <div className="icon1">
            <img src="images/Bragging.png" alt="17" />          
          </div>
        <h3 className="h31">BRAGGING RIGHTS</h3>
        <p className="ntext1">Receives the bragging rights for ownership<br/>
        of NFTs</p>
        </div>
        <div className="iconblock6">
          <div className="icon">
            <img src="images/Borrowing.png" alt="18" />          
          </div>
        <h3>BORROWING ON NWTs</h3>
        <p className="ntext">Use NFTs as collateral along with crypto<br/>
        assets to borrow loans</p>
        </div>
        <h1 className="text5" id="business"><span className="color" >ALL-INCLUSIVE</span> BUSINESS MODEL</h1>
        <div className="textblock">
          <h2>Meta-N business model is based on driving value for all stakeholdersby creating<br/> 
          an incremental NFT-metaverse ecosystem</h2>
        </div>
        <div className="business1">
          <div className="icon">
            <img src="images/Creator.png" alt="19" />          
          </div>
        <h3>Creator lists ART<br/>
        on Meta-N marketplace<br/>
        and defines a bidding period</h3>
        </div>
        <div className="business2">
          <div className="icon">
            <img src="images/Bidders.png" alt="20" />          
          </div>
        <h3>Bidders can bid on the NFT<br/>
        during the bidding period<br/><br/></h3>
        </div>
        <div className="business3">
          <div className="icon">
            <img src="images/Highest.png" alt="21" />  
            <h3>Highest Bidder collects the NFT</h3>        
          </div>
        </div>
        <div className="business4">
          <div className="icon">
            <img src="images/Creator2.png" alt="22" />  
            <h3>Creator receives a fair value</h3>        
          </div>
        </div>
        <div className="business5">
          <div className="icon">
            <img src="images/NFTcollector.png" alt="23" />          
          </div>
          <h3>NFT collector would use the NFT<br/>
          in the metaverse experience<br/>
          and derive value from it</h3>
        </div>
        <div className="business6">
          <div className="icon">
            <img src="images/Creator3.png" alt="24" />          
          </div>
          <h3>Creator gets a royalty upto 4%<br/> 
          each time the art is re-sold</h3>
        </div>
      </div>
      <div>
      <h1 className="text7" id='roadmap'>ROADMAP</h1>
        
      </div>
      <div>
      <h1 className="text7" id='partners'>PFRTNERS</h1>
        
      </div>
      <div className='futer'>
        <div className="btn-group">
            <a className="s" href="https://www.youtube.com/watch?v=CF1Ht5ahhB0">
              <img src="images/tg.png" alt="25"/>
              <h3>Telegram</h3>
            </a>
            <a className="s1" href="https://www.google.ru/">
              <img src="images/tw.png" alt="25"/>
              <h3>Twitter</h3>
            </a>
            <a className="s2" href="https://www.google.ru/">
              <img src="images/yt.png" alt="25"/>
              <h3>Youtube</h3>
            </a>
            <a className="s3" href="https://www.google.ru/">
              <img src="images/inst.png" alt="25"/>
              <h3>Instagram</h3>
            </a>
            <a className="s4" href="https://www.google.ru/">
              <img src="images/linkedin.png" alt="25"/>
              <h3>LinkedIn</h3>
            </a>
            <a className="s5" href="https://www.google.ru/">
              <img src="images/ds.png" alt="25"/>
              <h3>Discord</h3>
            </a>
        </div>
        <h3 className="futt">Meta-N | 2022</h3>
      </div>
    </div>
  );
}

export default App;
