function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }
    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;
        let x = left;
        let y = bottom;
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        function moveCharacter(){
            if(direction === 'west' && x > 0){
                x-=1
            }
            if(direction === 'north' && y < ((window.innerHeight * .7) - 30)){
                y+=1
            }
            if(direction === 'east' && x < (window.innerWidth - 55))[
                x+=1
            ]
            if(direction === 'south' && y > 100){
                y-=1
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }
        setInterval(moveCharacter, 1)

        document.addEventListener('keydown', function(e){
            if(e.repeat) return;

            if(e.key === 'a'){
            direction = 'west'
            }
            if(e.key === 'd'){
            direction = 'east'
            }
            if(e.key === 'w'){
            direction = 'north'
            }
            if(e.key === 's'){
            direction = 'south'
            }
            callback(direction)
        })
        document.addEventListener('keyup', function(e){
            direction = null
            callback(direction)
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}