namespace SpriteKind {
    export const cat = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTilemap(tiles.createTilemap(hex`10001000555666676656575f5f5f5f5f5f5f5f5f545e59682c59585f5f5f5f5f5f5f5f5f54594a494859585f5f5f5f5f5f5f5f5f54594b474c59585f5f5f5f5f5f5f5f5f54594b474c59585f5f5f5f5f5f5f5f5f54594d4e4f59585f5f5f5f5f5f5f5f5f545959595959585f5f5f5f5f5f5f5f5f515252525252535f5f5f5f5f5f5f5f5f555664596356575f5f5f5f5f5f5f5f5f545959595959585f5f5f5f5f5f5f5f5f545959595959585f5f6a5f5f5f5f5f5f545959595959585f5f5f5f5f5f5f5f5f545959595959585f5f5f5f5f5f5f5f5f515252525252535f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f`, img`
            2 2 2 2 2 2 2 . . . . . . . . . 
            2 . . . . . 2 . . . . . . . . . 
            2 . . . . . 2 . . . . . . . . . 
            2 . . . . . 2 . . . . . . . . . 
            2 . . . . . 2 . . . . . . . . . 
            2 . . . . . 2 . . . . . . . . . 
            2 . . . . . 2 . . . . . . . . . 
            2 2 2 2 2 2 2 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, [myTiles.tile0,sprites.castle.tilePath5,sprites.castle.tilePath8,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass1,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tileDarkGrass2,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass3,sprites.castle.tilePath3,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath1,sprites.castle.tilePath2,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile22,myTiles.tile23,myTiles.tile24,myTiles.tile25,myTiles.tile26,myTiles.tile27,myTiles.tile28,myTiles.tile29,myTiles.tile30,myTiles.tile31,myTiles.tile32,myTiles.tile33,myTiles.tile34,myTiles.tile35,myTiles.tile36,myTiles.tile37,myTiles.tile38,myTiles.tile39,myTiles.tile40,myTiles.tile41,myTiles.tile42,myTiles.tile43,myTiles.tile44,myTiles.tile45,myTiles.tile46,myTiles.tile47,myTiles.tile48,myTiles.tile49,myTiles.tile50,myTiles.tile51,myTiles.tile52,myTiles.tile53,myTiles.tile54,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.floorLight2,sprites.dungeon.floorDark2,sprites.dungeon.stairLadder,sprites.dungeon.stairLarge,sprites.dungeon.stairEast,sprites.dungeon.buttonOrangeDepressed,myTiles.tile55,myTiles.tile56,myTiles.tile57,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenSwitchUp,sprites.dungeon.floorLight5,myTiles.tile58,sprites.builtin.forestTiles10,sprites.builtin.forestTiles7], TileScale.Sixteen))
        mySprite2.setFlag(SpriteFlag.Invisible, true)
        mySprite3 = sprites.create(myTiles.tile57, SpriteKind.cat)
        game.showLongText("Press A and go up...", DialogLayout.Bottom)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (point == 0) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . a a a . . . . . . . 
            . . . . . a a a a a . . . . . . 
            . . . . . a a a a a . . . . . . 
            . . . . . a a a a a . . . . . . 
            . . . . . . a a a . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, -50)
    } else {
        if (point == 1) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . a a a . . . . . . . 
                . . . . . a a a a a . . . . . . 
                . . . . . a a a a a . . . . . . 
                . . . . . a a a a a . . . . . . 
                . . . . . . a a a . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, 50)
        } else {
            if (point == 2) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . a a a . . . . . . . 
                    . . . . . a a a a a . . . . . . 
                    . . . . . a a a a a . . . . . . 
                    . . . . . a a a a a . . . . . . 
                    . . . . . . a a a . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, -50, 0)
            } else {
                if (point == 3) {
                    projectile = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . a a a . . . . . . . 
                        . . . . . a a a a a . . . . . . 
                        . . . . . a a a a a . . . . . . 
                        . . . . . a a a a a . . . . . . 
                        . . . . . . a a a . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, mySprite, 50, 0)
                }
            }
        }
    }
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    if (projectile.tileKindAt(TileDirection.Center, sprites.dungeon.floorLight5)) {
        tiles.setTilemap(tiles.createTilemap(hex`100010005556666b6656575f5f5f5f5f5f5f5f5f545e59595959585f5f5f5f5f5f5f5f5f54594a4948596366566656575f5f5f5f54594b474c59593d6e5959655f5f5f5f54594b474c595959595959585f5f5f5f54594d4e4f596259595959655f5f5f5f5459595959595859595959585f5f5f5f51526a596252536d526d52535f5f5f5f555664596356575f5f5f5f5f5f5f5f5f545959595959585f5f5f5f5f5f5f5f5f545959595959585f5f5f5f5f5f5f5f5f545959595959585f5f5f5f5f5f5f5f5f545959595959585f5f5f5f5f5f5f5f5f515252525252535f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f`, img`
            2 2 2 2 2 2 2 . . . . . . . . . 
            2 . . . . . 2 . . . . . . . . . 
            2 . . . . . 2 2 2 2 2 2 . . . . 
            2 . . . . . . . . 2 2 2 . . . . 
            2 . . . . . . . . . . 2 . . . . 
            2 . . . . . 2 . . . . 2 . . . . 
            2 . . . . . 2 . . . . 2 . . . . 
            2 2 2 . 2 2 2 2 2 2 2 2 . . . . 
            2 2 2 . 2 2 2 . . . . . . . . . 
            2 . . . . . 2 . . . . . . . . . 
            2 . . . . . 2 . . . . . . . . . 
            2 . . . . . 2 . . . . . . . . . 
            2 . . . . . 2 . . . . . . . . . 
            2 2 2 2 2 2 2 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, [myTiles.tile0,sprites.castle.tilePath5,sprites.castle.tilePath8,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass1,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tileDarkGrass2,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass3,sprites.castle.tilePath3,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath1,sprites.castle.tilePath2,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile22,myTiles.tile23,myTiles.tile24,myTiles.tile25,myTiles.tile26,myTiles.tile27,myTiles.tile28,myTiles.tile29,myTiles.tile30,myTiles.tile31,myTiles.tile32,myTiles.tile33,myTiles.tile34,myTiles.tile35,myTiles.tile36,myTiles.tile37,myTiles.tile38,myTiles.tile39,myTiles.tile40,myTiles.tile41,myTiles.tile42,myTiles.tile43,myTiles.tile44,myTiles.tile45,myTiles.tile46,myTiles.tile47,myTiles.tile48,myTiles.tile49,myTiles.tile50,myTiles.tile51,myTiles.tile52,myTiles.tile53,myTiles.tile54,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.floorLight2,sprites.dungeon.floorDark2,sprites.dungeon.stairLadder,sprites.dungeon.stairLarge,sprites.dungeon.stairEast,sprites.dungeon.buttonOrangeDepressed,myTiles.tile55,myTiles.tile56,myTiles.tile57,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenSwitchUp,sprites.dungeon.floorLight5,sprites.builtin.oceanSand12,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenSwitchDown,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterSouth2,myTiles.tile58], TileScale.Sixteen))
        mySprite4 = sprites.create(img`
            . c c c c c c c c c c c c c c c c c c c c c c . 
            c b d d d d d d d d d d d d d d d d d d d d b c 
            c d d d d d d d d d d d d d d d d d d d d d d c 
            c d d d d d d d d d d d d d d d d d d d d d d c 
            c d d d d d d d d d d d d d d d d d d d d d d c 
            c d d d d d d d d d d d d d d d d d d d d d d c 
            c d d d d d d d d d d d d d d d d d d d d d d c 
            c b d d d d d d d d d d d d d d d d d d d d b c 
            c c b b b b b b b b b b b b b b b b b b b b c c 
            c c f f f f f f f f f f f f f f f f f f f f c c 
            c b c c 3 3 c 6 c 4 4 c 3 c 7 c 6 6 c 3 c c b c 
            c b c c 3 3 c 6 c 4 4 c 3 c 7 c 6 6 c 3 c c b c 
            f b c c 3 3 c 6 c 4 4 c c c 7 c 6 6 c 3 c c b f 
            f d c c c c c c c c c c c c c c c c c c c c d f 
            f d c b b d d d d d d d d d d d d d d b b c d f 
            f d f f f f f f f f f f f f f f f f f f f f d f 
            f d c c c 6 c 3 3 c 4 c 6 c 4 4 c 3 c 7 c c d f 
            f d c c c 6 c 3 3 c 4 c 6 c 4 4 c 3 c 7 c c d f 
            f d c c c 6 c 3 3 c c c 6 c 4 4 c c c 7 c c d f 
            f d c c c c c c c c c c c c c c c c c c c c d f 
            f d c b b d d d d d d d d d d d d d d b b c d f 
            f d c b b d d d d d d d d d d d d d d b b c d f 
            f d f f f f f f f f f f f f f f f f f f f f d f 
            f f f f f f f f f f f f f f f f f f f f f f f f 
            `, SpriteKind.Player)
        tiles.placeOnTile(mySprite4, tiles.getTileLocation(9, 3))
        mySprite4.x += 10
        mySprite4.y += -5
    }
})
let mySprite4: Sprite = null
let projectile: Sprite = null
let point = 0
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f . . . f . . . . . . . . . 
    . . f f . f f . . . . . . . . . 
    . . f f f f f . . . . . . . . . 
    . . 1 5 f 5 1 . . . . . . . . . 
    . . f f f f f . . . . . . f . . 
    . . . f f f . . . . . . f . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f . f . . f . f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tiles.createTilemap(hex`100010001d1a12430131303a3c37322f191c2b2a0b0b0b140b0b0b0b1e0b0b0b0b0b0b0b17171717171716131717171717171717171717171717171717171717171717171717171717171717171717171717171717171717171717171717171717171717171717171717171717171717171717170b0b03030b0b0b0b0b0b0b0b0b0b0b0b0b0b0311120b0b0b080b0b0b0b080b0b0b0b03030b0b0b0b0b0b030b0b0b0b0b0b0b03030b080b0b0b0b03030b0b190b0b0b0303030b0b0b0b0b03030b0b0b0b0b0b0308030b0b0b0b0b0b0b1a1b0b0b0b0b0303030b0b0b0b0b0b080b0b0b0b0b0b03030b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b1c1f0b0b0b0b0b0b0b`, img`
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
    `, [myTiles.tile0,sprites.castle.tilePath5,sprites.castle.tilePath8,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass1,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tileDarkGrass2,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass3,sprites.castle.tilePath3,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath1,sprites.castle.tilePath2,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile22,myTiles.tile23,myTiles.tile24,myTiles.tile25,myTiles.tile26,myTiles.tile27,myTiles.tile28,myTiles.tile29,myTiles.tile30,myTiles.tile31,myTiles.tile32,myTiles.tile33,myTiles.tile34,myTiles.tile35,myTiles.tile36,myTiles.tile37,myTiles.tile38,myTiles.tile39,myTiles.tile40,myTiles.tile41,myTiles.tile42,myTiles.tile43,myTiles.tile44,myTiles.tile45,myTiles.tile46,myTiles.tile47,myTiles.tile48,myTiles.tile49,myTiles.tile50,myTiles.tile51,myTiles.tile52,myTiles.tile53,myTiles.tile54,myTiles.tile55,myTiles.tile56,myTiles.tile57,myTiles.tile58], TileScale.Sixteen))
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . 9 . . . 9 . . . . . . . . . 
    . . . . . . 9 9 . 9 9 . . . . . . . . . 
    . . . . . . 9 9 9 9 9 . . . . . . . . . 
    . . . . . . 1 8 9 8 1 . . . . . . . . . 
    . . . . . . 9 9 3 9 9 . . . . . . . . . 
    . . . . . . 9 9 9 9 9 . . . . . . . . . 
    . . . . . . 9 9 9 9 9 . . . . . . . . . 
    . . . . . . . 9 8 9 . . . . . . . . . . 
    . . . . . . . . 8 . . . . . . . . . . . 
    . . . . . . . 8 8 8 . . . . . . . . . . 
    . . . . . . . . 9 . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(13)
game.splash("i am your helper", "Blue cat")
forever(function () {
    if (controller.up.isPressed()) {
        point = 0
    } else {
        if (controller.down.isPressed()) {
            point = 1
        } else {
            if (controller.left.isPressed()) {
                point = 2
            } else {
                if (controller.right.isPressed()) {
                    point = 3
                }
            }
        }
    }
})
forever(function () {
    music.playMelody("C C5 C C5 C C5 C C5 ", 381)
    music.playMelody("D B D B D B D B ", 381)
    music.playMelody("E A E A E A E A ", 381)
    music.playMelody("F G F G F G F G ", 381)
    music.playMelody("A E A E A E A E ", 381)
    music.playMelody("B D B D B D B D ", 381)
    music.playMelody("A B A B F G F G ", 474)
    music.playMelody("E F G F F G F E ", 460)
    music.playMelody("G A G F G F E C ", 500)
    music.playMelody("E F E F F E F E ", 380)
    music.playMelody("C D C D D C D C ", 250)
    music.playMelody("B C5 B C5 C5 B C5 B ", 260)
    music.playMelody("A B A B B A B A ", 260)
    music.playMelody("G F E D D E F G ", 500)
    music.playMelody("C D E F F E D C ", 210)
    music.playMelody("G A G A A G A G ", 250)
    music.playMelody("E F E F F E F E ", 230)
    music.playMelody("F G F G G F G F ", 120)
    music.playMelody("G A G A A G A G ", 250)
    music.playMelody("B C5 B C5 C5 B C5 B ", 220)
})
