<div class = "d-flex justify-content-center">



/*메뉴 CSS*/
  li{list-style:none;
      text-align: center;}
      a{text-decoration:none;}
  
  #menu {
    position: relative;
    margin-top: 100px;
    width: 70%;
    z-index:1;}

  .menubar {
    margin-top: 100px;
      margin-bottom:80px;}
  
      .menu_w {
          overflow: hidden;
          padding: 0px;
          width: 89%;
          position: absolute;
        }
        
      .menu_w > li {
        width: 20%;
        float: left;
        line-height: 40px;
        background-color: #BE8EBF;
        border: 0.01rem solid #eeebeb27;
        
        }
        
      .menu_w a {
      color: #fff;
        }
        
      .submenu_w > li {
          /* line-height: 50px; */
        height: 40px;
        background-color: #c6a4c7;  
        border: 0.01rem solid #eeebeb27;
        }
      
        .submenu_w {
          height: 0;
          overflow: hidden;
          padding: 0;
        }
      
        .menu_w > li:hover {
          background-color: #BE8EBF;
          transition-duration: 0.5s;
          opacity: 90%;
          position: relative;
        }
        
        .menu_w > li:hover .submenu_w {
          height: 120px; /*서브메뉴 li한개의 높이 50*5*/
          transition-duration: 1s;
          position: relative;}




