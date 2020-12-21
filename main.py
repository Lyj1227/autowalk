def autoWalk(mySprite: Sprite, xORy: bool, position: number):
    global flag
    if xORy:
        flag = False
        while mySprite.x < position:
            if not (flag):
                mySprite.vx = 20
                flag = True
        mySprite.vx = 0
        mySprite.x = position
    if not (xORy):
        flag = False
        while mySprite.y < position:
            if not (flag):
                mySprite.vy = 20
                flag = True
        mySprite.vy = 0
        mySprite.y = position
    return
flag = False
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
mySprite.x = 10
autoWalk(mySprite, True, 130)
autoWalk(mySprite, False, 20)