let mouseX, mouseY;

// 마우스 따라다니는 텍스트 설정 / group
document.addEventListener("mousemove", function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
  
    const group = document.getElementById("group");
    group.style.left = mouseX - (200 / 2) + "px";
    group.style.top = mouseY - (200 / 2) + "px";


  // 괜찮아요
  var text1 = document.getElementById("text1");
  text1.style.left = mouseX - 200 + "px";
  text1.style.top = mouseY + "px";

  // 괜찮아
  const text2 = document.getElementById("text2");
  text2.style.left = mouseX - 300 + "px";
  text2.style.top = mouseY - 180 + "px";

  // 괜찮긴한데
  const text3 = document.getElementById("text3");
  text3.style.left = mouseX - 580 + "px";
  text3.style.top = mouseY + 9 + "px";

  // 긍정적이게
  const text4 = document.getElementById("text4");
  text4.style.left = mouseX + 180 + "px";
  text4.style.top = mouseY - 80 + "px";
});


// movingText1
let x1 = Math.random() * (window.innerWidth - 500);
let y1 = Math.random() * (window.innerHeight - 300);
let velx1 = -5;
let vely1 = -5;

const movingText1 = document.querySelector("#movingText1");
movingText1.style.left = x1 + "px";
movingText1.style.top = y1 + "px";

// movingText2
let x2 = Math.random() * (window.innerWidth - 500);
let y2 = Math.random() * (window.innerHeight - 300);
let velx2 = -5;
let vely2 = -5;

const movingText2 = document.querySelector("#movingText2");
movingText2.style.left = x2 + "px";
movingText2.style.top = y2 + "px";

// movingText3
let x3 = Math.random() * (window.innerWidth - 500);
let y3 = Math.random() * (window.innerHeight - 300);
let velx3 = -3;
let vely3 = -3;

const movingText3 = document.querySelector("#movingText3");
movingText3.style.left = x3 + "px";
movingText3.style.top = y3 + "px";

// movingText4
let x4 = Math.random() * (window.innerWidth - 500);
let y4 = Math.random() * (window.innerHeight - 300);
let velx4 = -4;
let vely4 = -4;

const movingText4 = document.querySelector("#movingText4");
movingText4.style.left = x4 + "px";
movingText4.style.top = y4 + "px";

// movingText5
let x5 = Math.random() * (window.innerWidth - 500);
let y5 = Math.random() * (window.innerHeight - 300);
let velx5 = -5;
let vely5 = -5;

const movingText5 = document.querySelector("#movingText5");
movingText5.style.left = x5 + "px";
movingText5.style.top = y5 + "px";

// movingText6
let x6 = Math.random() * (window.innerWidth - 500);
let y6 = Math.random() * (window.innerHeight - 300);
let velx6 = -6;
let vely6 = -6;

const movingText6 = document.querySelector("#movingText6");
movingText6.style.left = x6 + "px";
movingText6.style.top = y6 + "px";

// movingText7
let x7 = Math.random() * (window.innerWidth - 500);
let y7 = Math.random() * (window.innerHeight - 300);
let velx7 = -7;
let vely7 = -7;

const movingText7 = document.querySelector("#movingText7");
movingText7.style.left = x7 + "px";
movingText7.style.top = y7 + "px";


// 애니메이션 루프

let isMovingText1Entered = false;
let isMovingText2Entered = false;
let isMovingText3Entered = false;
let isMovingText4Entered = false;
let isMovingText5Entered = false;
let isMovingText6Entered = false;
let isMovingText7Entered = false;

loop();
function loop() {

    movingText1
    x1 += velx1;
    y1 += vely1;

    if( x1 <= 0 || x1 >= window.innerWidth - 200 ) {
        velx1 = velx1 * (-1);
    }

    if( y1 <= 0 || y1 >= window.innerHeight - 200 ) {
        vely1 = vely1 * (-1);
    }

    movingText1.style.left = x1 + "px";
    movingText1.style.top = y1 + "px";

    const dx1 = (mouseX - (200 / 2)) - x1;
    const dy1 = (mouseY - (200 / 2)) - y1;
    const distance = Math.sqrt((dx1 * dx1) + (dy1 * dy1));

    movingText2
    x2 += velx2;
    y2 += vely2;

    if( x2 <= 0 || x2 >= window.innerWidth - 200 ) {
        velx2 = velx2 * (-1);
    }

    if( y2 <= 0 || y2 >= window.innerHeight - 200 ) {
        vely2 = vely2 * (-1);
    }

    movingText2.style.left = x2 + "px";
    movingText2.style.top = y2 + "px";
    const dx2 = (mouseX - (200 / 2)) - x2;
    const dy2 = (mouseY - (200 / 2)) - y2;
    const distance2 = Math.sqrt((dx2 * dx2) + (dy2 * dy2));

    movingText3
    x3 += velx3;
    y3 += vely3;

    if( x3 <= 0 || x3 >= window.innerWidth - 200 ) {
        velx3 = velx3 * (-1);
    }

    if( y3 <= 0 || y3 >= window.innerHeight - 200 ) {
        vely3 = vely3 * (-1);
    }

    movingText3.style.left = x3 + "px";
    movingText3.style.top = y3 + "px";
    const dx3 = (mouseX - (200 / 2)) - x3;
    const dy3 = (mouseY - (200 / 2)) - y3;
    const distance3 = Math.sqrt((dx3 * dx3) + (dy3 * dy3));

    movingText4
    x4 += velx4;
    y4 += vely4;

    if( x4 <= 0 || x4 >= window.innerWidth - 200 ) {
        velx4 = velx4 * (-1);
    }

    if( y4 <= 0 || y4 >= window.innerHeight - 200 ) {
        vely4 = vely4 * (-1);
    }

    movingText4.style.left = x4 + "px";
    movingText4.style.top = y4 + "px";
    const dx4 = (mouseX - (200 / 2)) - x4;
    const dy4 = (mouseY - (200 / 2)) - y4;
    const distance4 = Math.sqrt((dx4 * dx4) + (dy4 * dy4));

    movingText5
    x5 += velx5;
    y5 += vely5;

    if( x5 <= 0 || x5 >= window.innerWidth - 200 ) {
        velx5 = velx5 * (-1);
    }

    if( y5 <= 0 || y5 >= window.innerHeight - 200 ) {
        vely5 = vely5 * (-1);
    }

    movingText5.style.left = x5 + "px";
    movingText5.style.top = y5 + "px";
    const dx5 = (mouseX - (200 / 2)) - x5;
    const dy5 = (mouseY - (200 / 2)) - y5;
    const distance5 = Math.sqrt((dx5 * dx5) + (dy5 * dy5));

    movingText6
    x6 += velx6;
    y6 += vely6;

    if( x6 <= 0 || x6 >= window.innerWidth - 200 ) {
        velx6 = velx6 * (-1);
    }

    if( y6 <= 0 || y6 >= window.innerHeight - 200 ) {
        vely6 = vely6 * (-1);
    }

    movingText6.style.left = x6 + "px";
    movingText6.style.top = y6 + "px";
    const dx6 = (mouseX - (200 / 2)) - x6;
    const dy6 = (mouseY - (200 / 2)) - y6;
    const distance6 = Math.sqrt((dx6 * dx6) + (dy6 * dy6));

    movingText7
    x7 += velx7;
    y7 += vely7;

    if( x7 <= 0 || x7 >= window.innerWidth - 200 ) {
        velx7 = velx7 * (-1);
    }

    if( y7 <= 0 || y7 >= window.innerHeight - 200 ) {
        vely7 = vely7 * (-1);
    }

    movingText7.style.left = x7 + "px";
    movingText7.style.top = y7 + "px";
    const dx7 = (mouseX - (200 / 2)) - x7;
    const dy7 = (mouseY - (200 / 2)) - y7;
    const distance7 = Math.sqrt((dx7 * dx7) + (dy7 * dy7));


    if( distance <= 300 ) { 
        if( isMovingText1Entered === false ) { 
            velx1 = velx1 * (-1);
            vely1 = vely1 * (-1);

            isMovingText1Entered = true; 

            setTimeout(function() { 
                isMovingText1Entered = false;
            }, 1000);
        }
    }

    if( distance <= 300 ) { 
        if( isMovingText2Entered === false ) { 
            velx2 = velx2 * (-1);
            vely2 = vely2 * (-1);

            isMovingText2Entered = true; 

            setTimeout(function() { 
                isMovingText2Entered = false;
            }, 1000);
        }
    }

    if( distance <= 300 ) { 
        if( isMovingText3Entered === false ) { 
            velx3 = velx3 * (-1);
            vely3 = vely3 * (-1);

            isMovingText3Entered = true; 

            setTimeout(function() { 
                isMovingText3Entered = false;
            }, 1000);
        }
    }

    if( distance <= 300 ) { 
        if( isMovingText4Entered === false ) { 
            velx4 = velx4 * (-1);
            vely4 = vely4 * (-1);

            isMovingText4Entered = true; 

            setTimeout(function() { 
                isMovingText4Entered = false;
            }, 1000);
        }
    }

    if( distance <= 300 ) { 
        if( isMovingText5Entered === false ) { 
            velx5 = velx5 * (-1);
            vely5 = vely5 * (-1);

            isMovingText5Entered = true; 

            setTimeout(function() { 
                isMovingText5Entered = false;
            }, 1000);
        }
    }

    if( distance <= 300 ) { 
        if( isMovingText6Entered === false ) { 
            velx6 = velx6 * (-1);
            vely6 = vely6 * (-1);

            isMovingText6Entered = true; 

            setTimeout(function() { 
                isMovingText6Entered = false;
            }, 1000);
        }
    }

    if( distance <= 300 ) { 
        if( isMovingText7Entered === false ) { 
            velx7 = velx7 * (-1);
            vely7 = vely7 * (-1);

            isMovingText7Entered = true; 

            setTimeout(function() { 
                isMovingText7Entered = false;
            }, 1000);
        }
    }
    
    requestAnimationFrame(loop);
}