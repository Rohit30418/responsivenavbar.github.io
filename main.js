      //toggle header shadow
      let header=document.querySelector("header");
      window.onscroll=()=>{
          if (window.scrollY>100) {
              header.classList.add("addshadow");
          }else{
              header.classList.remove("addshadow");
          }
      }

      //toggle navbar
      let bar=document.querySelector(".bar")
      let menu=document.querySelector(".menu")
      function togglenav() {
          menu.classList.toggle("show");
          bar.classList.toggle("show");
      }