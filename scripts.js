    
   
    var currentParagraph = 2
    var bigBox = document.querySelectorAll(".text, .button-container, #smallScreen");
    var smallBox = document.getElementById("smallScreen");
    var box; 

    function makeDecision(){
        document.getElementById("clicker").style.opacity = 0;
        var button1 = document.getElementById("yes");
        var button2 = document.getElementById("no");
        button1.style.opacity = 1;
        button2.style.opacity = 1;
        box = document.getElementById("no").getBoundingClientRect();
    }

    function showParagraph(){
        if (window.getComputedStyle(smallBox).display == 'none'){
            var paragraph = document.getElementById("p" + currentParagraph);
            paragraph.style.display = 'block';
            paragraph.offsetHeight;
            paragraph.style.opacity = 1;
        } else {
            var oldParagraph = document.getElementById("ps" + (currentParagraph - 1));
            oldParagraph.style.opacity = 0;
            oldParagraph.offsetHeight;
            oldParagraph.style.display = 'none';
            var newParagraph = document.getElementById("ps" + currentParagraph);
            newParagraph.style.display = 'block';
            newParagraph.offsetHeight;
            newParagraph.style.opacity = 1;
        }

        ++currentParagraph;

        if (currentParagraph === 7){
            makeDecision();
        }
    }

    function goAway(button){

        var randX, randY;
        var minX = 0 - box.left + 20;
        var maxX = window.innerWidth - box.right - 20;

        var minY = 0 - box.top + 20;
        var maxY = window.innerHeight - box.bottom - 8;
        console.log("H: " + window.innerHeight);
        console.log("B: " + button.getBoundingClientRect().bottom);

        do{
            randX = Math.random() * (maxX - minX) + minX;
            randY = Math.random() * (maxY - minY) + minY;
        } while ((Math.abs(randX) < 100 && window.innerWidth > 500) || Math.abs(randX) < 10);
        
        if (button.style.opacity == 1){
            button.style.transform = "translate(" + randX + "px, " + randY + "px)";
        }

    }

    function agreed(){
        var giphs = document.getElementById("container");
        giphs.style.display = 'flex';
        bigBox.forEach(function(element){
            element.style.display = 'none';
        });
    }