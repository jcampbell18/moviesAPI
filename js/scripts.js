$( document ).ready(function() {
    // console.log('ok');

    // Store the canvas object into a variable
    var $myCanvas = $('#myCanvas');

    var img = document.getElementById("ceb");
    $myCanvas.drawImage({
        source: img,
        x: 300, y: 300,
        scale: 0.8
    });

    // rectangle shape 
    $myCanvas.drawRect({
        fillStyle: 'steelblue',
        strokeStyle: 'steelblue',
        strokeWidth: 1,
        x: 150, y: 400,
        fromCenter: false,
        width: 20,
        height: 10
    });

    $myCanvas.drawText({
        text: '\uf0f4',
        fontFamily: 'FontAwesome',
        fontSize: 13,
        x: 290, y: 450,
        fillStyle: 'black',
        strokeStyle: 'black',
        strokeWidth: 1
      });

      $myCanvas.drawText({
        text: '\uf2e7',
        fontFamily: 'FontAwesome',
        fontSize: 13,
        x: 390, y: 400,
        fillStyle: 'black',
        strokeStyle: 'black',
        strokeWidth: 1
      });

  
});
