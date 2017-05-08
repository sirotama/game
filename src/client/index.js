var socket = io('http://localhost:3000');
(function main(){
    var map;
    var charaData;
    var charaX;
    var charaY;
    socket.on('init', function (data) {
        console.log(data);
        map = data.map;
        charaX = data.chara.x;
        charaY = data.chara.y;
        drawMap();
        drawChara();
    });
    socket.on('updateMap', function (map_) {
        map = map_;
        drawMap();
    });
    socket.on('characterPositionUpdate', function (charaData) {
        charaX = charaData.x;
        charaY = charaData.y;
        drawChara();
    });
    document.onkeydown = function (e){
        if (e.which == 87) {
            socket.emit('characterMove', {'x': -1, 'y': 0});
        } else if (e.which == 65) {
            socket.emit('characterMove', {'x': 0, 'y': -1});
        } else if (e.which == 83) {
            socket.emit('characterMove', {'x': 1, 'y': 0});
        } else if (e.which == 68) {
            socket.emit('characterMove', {'x': 0, 'y': 1});
        }
        console.log(e);
    };  

    function drawMap() {
        var counterRow = 0;
        $.each(map, function(index, row){
            var counterCol = 0;
            $.each(row, function(index, cell){
                if(index == 0){
                    if(cell == 0){
                        $(".map").append('<a x='+counterRow+' y='+counterCol+'><img src="./tile.png"></img></a>');
                    } else if(cell == 1){
                        $(".map").append('<a x='+counterRow+' y='+counterCol+'>■</img></a>');
                    }
                } else {
                    if(cell == 0){
                        $(".map").append('<a x='+counterRow+' y='+counterCol+'><img src="./tile.png"></img></a>');
                    } else if(cell == 1){
                        $(".map").append('<a x='+counterRow+' y='+counterCol+'>■</img></a>');
                    }
                }
                counterCol++;
            });
            $(".map").append('</br>');
            counterRow++;
        });
        return true;
    }

    function drawChara() {
        $('.map img.chara').remove();
        position = $('.map a[x="'+charaX+'"][y="'+charaY+'"]').get(0);
        rect = position.getBoundingClientRect();
        rectTop = rect.top;
        rectLeft = rect.left;
        rectRight = rect.right;
        rectBottom = rect.height;

        charaHTML = `
            <img class="chara" src="./chara.png">
        `
        charaStyle = {
            position: "absolute",
            top: rectTop,
            left: rectLeft,
            right: rectRight,
            bottom: rectBottom,
            "z-index": "1"
        }
        $('.map').append(charaHTML);
        $('.map img.chara').css(charaStyle);
    }

})();