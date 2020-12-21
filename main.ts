// 按下 A 鍵  Demo
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    autoWalk(mySprite, true, 130)
    autoWalk(mySprite, false, 20)
})
function doSomething (mySprite: Sprite, bool: boolean, num: number) {
    if (bool) {
        range = num - mySprite.y
        direction = Math.sin(-1000)
        // 確認方向
        direction2 = Math.sin(1000)
        for (let index = 0; index < Math.abs(range); index++) {
            mySprite.y += direction
            mySprite.x += direction2
            pause(10)
        }
    }
    if (!(bool)) {
        range = num - mySprite.y
        direction = Math.sin(1000)
        // 確認方向
        direction2 = Math.sin(1000)
        for (let index = 0; index < Math.abs(range); index++) {
            mySprite.y += direction
            mySprite.x += direction2
            pause(10)
        }
    }
    return
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    doSomething(mySprite, true, 60)
    doSomething(mySprite, false, 40)
})
function autoWalk (mySprite: Sprite, xORy: boolean, position: number) {
    // 當 xORy 為 True時，是指 x 軸方向移動
    if (xORy) {
        // 確定距離
        range = position - mySprite.x
        // 確認方向
        direction = Math.sin(-500)
        // 移動一定次數
        for (let index = 0; index < Math.abs(range); index++) {
            mySprite.x += direction
            pause(20)
        }
        // 保險起見，不要超過位置
        mySprite.x = position
    }
    // xORy 為 False時，則為 y 方向移動
    if (!(xORy)) {
        range = position - mySprite.y
        direction = Math.sin(500)
        for (let index = 0; index < Math.abs(range); index++) {
            mySprite.y += direction
            pause(20)
        }
        mySprite.y = position
    }
    return
}
let direction2 = 0
let direction = 0
let range = 0
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010101010101010000000000000000000000000000010100010001000100010001000100000101000000000000000000000000000001010001000100010001000100010000010100000000000000000000000000000101000001000100010001000100010001010000000000000000000000000000010100000100010001000100010001000101000000000000000000000000000001010001000100010001000100010000010100000000000000000000000000000101000100010001000100010001000001010000000000000000000000000000010100000000000000000000000000000101010101010101010101010101010101`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.builtin.forestTiles0], TileScale.Sixteen))
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
mySprite.x = 10
controller.moveSprite(mySprite, 100, 0)
mySprite.setFlag(SpriteFlag.ShowPhysics, true)
scene.cameraFollowSprite(mySprite)
