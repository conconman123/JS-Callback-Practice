const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')
function makeBackground(imagePath, left, bottom){
    let object = document.createElement('img');
    object.src = imagePath;
    object.style.position = 'fixed';
    object.style.zIndex = '-1';
    object.style.left = left + 'px';
    object.style.bottom = bottom + 'px';
    document.body.append(object);
   return object
}


function handleDirectionChange(direction){
    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
    }
}

move(character).withArrowKeys(100, 250, handleDirectionChange)


move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)


for(let x = 0; x < (window.innerHeight * .7); x+=100){
    for(let i = 0; i < window.innerWidth; i+=100){
     makeBackground('assets/grass.png', i, x)
    }
}
for(let x = window.innerHeight; x > (window.innerHeight * .7); x-=100){
    for(let i = 0; i < window.innerWidth; i+=100){
     makeBackground('assets/sky.png', i, x)
    }
}