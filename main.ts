namespace SpriteKind {
    export const fuel = SpriteKind.create()
    export const ghost = SpriteKind.create()
    export const megaprojectile = SpriteKind.create()
    export const first_encounter = SpriteKind.create()
    export const ink_house = SpriteKind.create()
    export const firechampion = SpriteKind.create()
    export const waterchampion = SpriteKind.create()
    export const gacha_machine = SpriteKind.create()
    export const host = SpriteKind.create()
    export const ink_blast = SpriteKind.create()
}
namespace StatusBarKind {
    export const extrahealth = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.splash("respawn point set")
    tiles.placeOnTile(mySprite, tiles.getTileLocation(145, 42))
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    500,
    true
    )
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.loadMap(tiles.createMap(tilemap`level9`))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile34`, function (sprite, location) {
    scene.cameraShake(5, 2000)
    music.powerUp.play()
    game.splash("ink dimension reached")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile32`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level6`))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(186, 27))
    music.spooky.play()
    host_ = sprites.create(img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ...........fffff..............
        ..........f.....f.............
        ..........f.....f.............
        ...........fffff..............
        ..............................
        ......f....fffff..............
        .....fffffffffffffffffffffff..
        .....fff..f2fff2f........f2f..
        .....fff..ff2f2ff........f2f..
        .....fff..fffffff.......f22f..
        .....ffff.fffffff.......f2f...
        ......ffff.fffff.......f2f....
        .......ffff.fff.ff.....ff.....
        ........fffffffffff...........
        .........fffffffffff..........
        ..........ffffffffff..........
        ...........ffffffffff.........
        ..........fffffffffff.........
        .........ffffffffff...........
        .........ffff..ffff...........
        ........ffff....ffff..........
        ........fff......fff..........
        ..............................
        ..............................
        ..............................
        `, SpriteKind.host)
    host_.sayText("I am host king of the ink dimesion", 5000, true)
    animation.runImageAnimation(
    host_,
    [img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ...........fffff..............
        ..........f.....f.............
        ..........f.....f.............
        ...........fffff..............
        ..............................
        ......f....fffff..............
        .....fffffffffffffffffffffff..
        .....fff..f2fff2f........f2f..
        .....fff..ff2f2ff........f2f..
        .....fff..fffffff.......f22f..
        .....ffff.fffffff.......f2f...
        ......ffff.fffff.......f2f....
        .......ffff.fff.ff.....ff.....
        ........fffffffffff....ff.....
        .........fffffffffff...ff.....
        ..........ffffffffff..........
        ...........ffffffffff.........
        ..........fffffffffff.........
        .........ffffffffff...........
        .........ffff..ffff...........
        ........ffff....ffff..........
        ........fff......fff..........
        ..............................
        ..............................
        ..............................
        `,img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ...........fffff..............
        ..........f.....f.............
        ..........f.....f.............
        ...........fffff..............
        ..............................
        ......f....fffff..............
        .....fffffffffffffffffffffff..
        .....fff..f2fff2f........f2f..
        .....fff..ff2f2ff........f2f..
        .....fff..fffffff.......f22f..
        .....ffff.fffffff.......f2f...
        ......ffff.fffff.......f2f....
        .......ffff.fff.ff.....ff.....
        ........fffffffffff...........
        .........fffffffffff...ff.....
        ..........ffffffffff...ff.....
        ...........ffffffffff.........
        ..........fffffffffff.........
        .........ffffffffff...........
        .........ffff..ffff...........
        ........ffff....ffff..........
        ........fff......fff..........
        ..............................
        ..............................
        ..............................
        `,img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ...........fffff..............
        ..........f.....f.............
        ..........f.....f.............
        ...........fffff..............
        ..............................
        ......f....fffff..............
        .....fffffffffffffffffffffff..
        .....fff..f2fff2f........f2f..
        .....fff..ff2f2ff........f2f..
        .....fff..fffffff.......f22f..
        .....ffff.fffffff.......f2f...
        ......ffff.fffff.......f2f....
        .......ffff.fff.ff.....ff.....
        ........fffffffffff...........
        .........fffffffffff..........
        ..........ffffffffff...ff.....
        ...........ffffffffff..ff.....
        ..........fffffffffff.........
        .........ffffffffff...........
        .........ffff..ffff...........
        ........ffff....ffff..........
        ........fff......fff..........
        ..............................
        ..............................
        ..............................
        `,img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ...........fffff..............
        ..........f.....f.............
        ..........f.....f.............
        ...........fffff..............
        ..............................
        ......f....fffff..............
        .....fffffffffffffffffffffff..
        .....fff..f2fff2f........f2f..
        .....fff..ff2f2ff........f2f..
        .....fff..fffffff.......f22f..
        .....ffff.fffffff.......f2f...
        ......ffff.fffff.......f2f....
        .......ffff.fff.ff.....ff.....
        ........fffffffffff...........
        .........fffffffffff..........
        ..........ffffffffff..........
        ...........ffffffffff.........
        ..........fffffffffff..ff.....
        .........ffffffffff....ff.....
        .........ffff..ffff...........
        ........ffff....ffff..........
        ........fff......fff..........
        ..............................
        ..............................
        ..............................
        `,img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ...........fffff..............
        ..........f.....f.............
        ..........f.....f.............
        ...........fffff..............
        ..............................
        ......f....fffff..............
        .....fffffffffffffffffffffff..
        .....fff..f2fff2f........f2f..
        .....fff..ff2f2ff........f2f..
        .....fff..fffffff.......f22f..
        .....ffff.fffffff.......f2f...
        ......ffff.fffff.......f2f....
        .......ffff.fff.ff.....ff.....
        ........fffffffffff...........
        .........fffffffffff..........
        ..........ffffffffff..........
        ...........ffffffffff..ff.....
        ..........fffffffffff..ff.....
        .........ffffffffff...........
        .........ffff..ffff...........
        ........ffff....ffff..........
        ........fff......fff..........
        ..............................
        ..............................
        ..............................
        `,img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ...........fffff..............
        ..........f.....f.............
        ..........f.....f.............
        ...........fffff..............
        ..............................
        ......f....fffff..............
        .....fffffffffffffffffffffff..
        .....fff..f2fff2f........f2f..
        .....fff..ff2f2ff........f2f..
        .....fff..fffffff.......f22f..
        .....ffff.fffffff.......f2f...
        ......ffff.fffff.......f2f....
        .......ffff.fff.ff.....ff.....
        ........fffffffffff...........
        .........fffffffffff..........
        ..........ffffffffff..........
        ...........ffffffffff.........
        ..........fffffffffff.........
        .........ffffffffff....ff.....
        .........ffff..ffff....ff.....
        ........ffff....ffff..........
        ........fff......fff..........
        ..............................
        ..............................
        ..............................
        `,img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ...........fffff..............
        ..........f.....f.............
        ..........f.....f.............
        ...........fffff..............
        ..............................
        ......f....fffff..............
        .....fffffffffffffffffffffff..
        .....fff..f2fff2f........f2f..
        .....fff..ff2f2ff........f2f..
        .....fff..fffffff.......f22f..
        .....ffff.fffffff.......f2f...
        ......ffff.fffff.......f2f....
        .......ffff.fff.ff.....ff.....
        ........fffffffffff...........
        .........fffffffffff..........
        ..........ffffffffff..........
        ...........ffffffffff.........
        ..........fffffffffff.........
        .........ffffffffff...........
        .........ffff..ffff....ff.....
        ........ffff....ffff...ff.....
        ........fff......fff..........
        ..............................
        ..............................
        ..............................
        `,img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ...........fffff..............
        ..........f.....f.............
        ..........f.....f.............
        ...........fffff..............
        ..............................
        ......f....fffff..............
        .....fffffffffffffffffffffff..
        .....fff..f2fff2f........f2f..
        .....fff..ff2f2ff........f2f..
        .....fff..fffffff.......f22f..
        .....ffff.fffffff.......f2f...
        ......ffff.fffff.......f2f....
        .......ffff.fff.ff.....ff.....
        ........fffffffffff...........
        .........fffffffffff..........
        ..........ffffffffff..........
        ...........ffffffffff.........
        ..........fffffffffff.........
        .........ffffffffff...........
        .........ffff..ffff...........
        ........ffff....ffff...ffffff.
        ........fff......fff..ffffffff
        ......................ffffffff
        .......................ffffff.
        ..............................
        `],
    500,
    false
    )
    scaling.scaleByPixels(host_, 5, ScaleDirection.Horizontally, ScaleAnchor.Middle)
    scaling.scaleByPixels(host_, 5, ScaleDirection.Vertically, ScaleAnchor.Middle)
    tiles.placeOnTile(host_, tiles.getTileLocation(189, 27))
    projectile3 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f . . . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . f f f f f f f f f . . . f . 
        . . f f f f f f f f f . f . . . 
        . . f f f f f f f . . . . . . f 
        . . . f f f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, host_, -100, 0)
    projectile3.setKind(SpriteKind.ink_blast)
    animation.runImageAnimation(
    projectile3,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f . . . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . f f f f f f f f f . . . f . 
        . . f f f f f f f f f . f . . . 
        . . f f f f f f f . . . . . . f 
        . . . f f f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f . . . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . f f f f f f f f f . . . . f 
        . . f f f f f f f f f . . f . . 
        . . f f f f f f f . . . . . . . 
        . . . f f f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f . . . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . f f f f f f f f f . . . . . 
        . . f f f f f f f f f . . . f . 
        . . f f f f f f f . . . . . . . 
        . . . f f f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f . . . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . f f f f f f f f f . . . . . 
        . . f f f f f f f f f . . . . f 
        . . f f f f f f f . . . . . . . 
        . . . f f f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f . . . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . f f f f f f f f f . . . . . 
        . . f f f f f f f f f . . . . . 
        . . f f f f f f f . . . . . . . 
        . . . f f f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    game.splash(game.ask("is that blood? ", "what's the black stuff in it?"), "")
    game.setDialogCursor(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(143, 31))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (stausbar2.value > 0) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . 2 3 1 3 2 . . . . . . 
            . . . . . 3 1 1 1 3 . . . . . . 
            . . . . . 3 1 1 1 3 . . . . . . 
            . . . . . 3 1 1 1 3 . . . . . . 
            . . . . . 3 1 1 1 2 . . . . . . 
            . . . . . 2 1 1 1 2 . . . . . . 
            . . . . . 2 3 1 3 2 . . . . . . 
            . . . . . . 3 1 3 . . . . . . . 
            . . . . . . 2 1 2 . . . . . . . 
            . . . . . . 2 1 2 . . . . . . . 
            . . . . . . 2 1 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, -100)
        stausbar2.value += -5
    } else {
        game.splash("no energy refuel")
    }
})
sprites.onOverlap(SpriteKind.ink_blast, SpriteKind.Player, function (sprite, otherSprite) {
    scene.cameraShake(50, 10000)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.gacha_machine, function (sprite, otherSprite) {
	
})
info.onCountdownEnd(function () {
    statusbar.destroy()
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    info.changeLifeBy(-1)
    statusbar3.value = 500
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    500,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    game.splash("WELCOME TO INKTOPIA! ")
    tiles.placeOnTile(mySprite, tiles.getTileLocation(147, 27))
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar3.value += -5
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
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
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
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
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    500,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level5`))
    mySprite4 = sprites.create(img`
        .........................
        ...........f.............
        ..........faf............
        .........faaaf...........
        .......ffaaaaaff.........
        ......faaaaaaaaaf........
        .....faa212aa212af.......
        ....faaa212aa212aaf......
        ....faaaa2aaaa2aaaf......
        ....faaaaaaaaaaaaaf......
        ....faaaaaaaaaaaaaf......
        ....faaaaaaaaaaaaaf......
        ...faaaaaaf1f1faaaaf.....
        ..faaaaaaaaaaaaaaaaaf....
        .faafaaaffaaaffaaafaaf...
        .faf.faf..faf..faf.faf...
        .ff..faf..faf..faf..ff...
        .....faf..faf..faf.......
        ......f...faf...f........
        ...........f.............
        .........................
        .........................
        .........................
        .........................
        .........................
        `, SpriteKind.ghost)
    mySprite6 = sprites.create(img`
        ....................1f1ff1f1....................
        .................fff111ff1f1fff.................
        ..............fff1ff1f1ff111ff1fff..............
        ...........1ff1ff1111f1ff1f1111ff1ff1...........
        ........1111ff1ff1ff1f1ff1f1ff1ff1ff1111........
        .....fff1ff1ff1111ff1f1ff1f1ff1111ff1ff1fff.....
        ...ff1111ff1ff1ff1ff111ff111ff1ff1ff1ff1111ff...
        fccff1ff1ff1111ff1ff1f1ff1f1ff1ff1111ff1ff1ffccf
        6c6111ff1ff1ff1ff1ff1f1ff1f1ff1ff1ff1ff1ff1116c6
        f66ff1ff1111ff1ff1111f1ff1f1111ff1ff1111ff1ff66f
        f66ff1ff1ff1ff1111ff1f1ff1f1ff1111ff1ff1ff1ff66f
        fccff1111ff1ff1ff1ff111ff111ff1ff1ff1ff1111ffccf
        6c6ff1ff1ff1111ff1ff1f1ff1f1ff1ff1111ff1ff1ff6c6
        f66111ff1ff1ff1ff1ff1f1ff1f1ff1ff1ff1ff1ff11166f
        f66ff1ff1111ff1ff1ff1f1ff1f1ff1ff1ff1111ff1ff66f
        fccff1ff1ff1ff1ff1111f1ff1f1111ff1ff1ff1ff1ffccf
        6c6ff1111ff1ff1111ff111ff111ff1111ff1ff1111ff6c6
        f66ff1ff1ff1111ff1ff1f1ff1f1ff1ff1111ff1ff1ff66f
        f66111ff1ff1ff1ff1ff1f1ff1f1ff1ff1ff1ff1ff11166f
        fccff1ff1111ff1ff1ff1f1ff1f1ff1ff1ff1111ff1ffccf
        6c6ff1ff1ff1ff1ff1ff111ff111ff1ff1ff1ff1ff1ff6c6
        f66ff1111ff1ff1ff111cc1111cc111ff1ff1ff1111ff66f
        f66ff1ff1ff1ff111cc1111111111cc111ff1ff1ff1ff66f
        fcc111ff1ff111cc11111cccccc11111cc111ff1ff111ccf
        6c6ff1ff111cc11111cc11111111cc11111cc111ff1ff6c6
        f66ff1ffcc11111cc11111111111111cc11111ccff1ff66f
        f66ffcc1111ccc11111111111111111111ccc1111ccff66f
        fccc1111ccc6444bcc666666666666ccb4446ccc1111cccf
        cccccccc6666666cb11111111111111bc6666666cccccccc
        fffffffffffff6c111111111111111111c6fffffffffffff
        ffcbffffffffffb111111111111111111bffffffffffbcff
        ffffffffffffffd166666666666666661dffffffffffffff
        ffff111111111f11611111111111111611f111111111ffff
        ffffffffffff1f161f1ff1ff1ff1ff1161f1ffffffffffff
        ffffffffffff1f161f1ff1ff1ff1ff1161f1ffffffffffff
        ffffffffffff1f66ff1f1ffffff1ff1166f1ffffffffffff
        ffffffffffff1f66ff1fffffffffff1166f1ffffffffffff
        fffffccfccff1f66ff1ffffffffff11166f1ffccfccfffff
        ffffffffffff1f66ff1111111111111166f1ffffffffffff
        cfffffffffff1f661f1ff1ff1ff1ff1166f1fffffffffffc
        cffffccfccff1f661f1ff1ff1ff1ff1166f1ffccfccffffc
        ccffffffffff1f661f1ff1ff1fff111166f1ffffffffffcc
        .cff111111111f661f1ff1ff1ffffff166f111111111ffc.
        ..cf111111111f66ff1ff1ff1ffffff166f111111111fc..
        ...c111111111f66ff1ff1ff1fffff1166f111111111c...
        ....611111111f66ff1ff1ff1fffff1166f111111116....
        .....61111111f66ff1ff1ff1fffff1166f11111116.....
        ......6ccc666f661f1ff1ff1fffff1166f666ccc6......
        `, SpriteKind.ink_house)
    MYSPRITE7 = sprites.create(img`
        ......6ccc666f661f1ff1ff1fffff1166f666ccc6......
        .....61111111f66ff1ff1ff1fffff1166f11111116.....
        ....611111111f66ff1ff1ff1fffff1166f111111116....
        ...c111111111f66ff1ff1ff1fffff1166f111111111c...
        ..cf111111111f66ff1ff1ff1ffffff166f111111111fc..
        .cff111111111f661f1ff1ff1ffffff166f111111111ffc.
        ccffffffffff1f661f1ff1ff1fff111166f1ffffffffffcc
        cffffccfccff1f661f1ff1ff1ff1ff1166f1ffccfccffffc
        cfffffffffff1f661f1ff1ff1ff1ff1166f1fffffffffffc
        ffffffffffff1f66ff1111111111111166f1ffffffffffff
        fffffccfccff1f66ff1ffffffffff11166f1ffccfccfffff
        ffffffffffff1f66ff1fffffffffff1166f1ffffffffffff
        ffffffffffff1f66ff1f1ffffff1ff1166f1ffffffffffff
        ffffffffffff1f161f1ff1ff1ff1ff1161f1ffffffffffff
        ffffffffffff1f161f1ff1ff1ff1ff1161f1ffffffffffff
        ffff111111111f11611111111111111611f111111111ffff
        ffffffffffffffd166666666666666661dffffffffffffff
        ffcbffffffffffb111111111111111111bffffffffffbcff
        fffffffffffff6c111111111111111111c6fffffffffffff
        cccccccc6666666cb11111111111111bc6666666cccccccc
        fccc1111ccc6444bcc666666666666ccb4446ccc1111cccf
        f66ffcc1111ccc11111111111111111111ccc1111ccff66f
        f66ff1ffcc11111cc11111111111111cc11111ccff1ff66f
        6c6ff1ff111cc11111cc11111111cc11111cc111ff1ff6c6
        fcc111ff1ff111cc11111cccccc11111cc111ff1ff111ccf
        f66ff1ff1ff1ff111cc1111111111cc111ff1ff1ff1ff66f
        f66ff1111ff1ff1ff111cc1111cc111ff1ff1ff1111ff66f
        6c6ff1ff1ff1ff1ff1ff111ff111ff1ff1ff1ff1ff1ff6c6
        fccff1ff1111ff1ff1ff1f1ff1f1ff1ff1ff1111ff1ffccf
        f66111ff1ff1ff1ff1ff1f1ff1f1ff1ff1ff1ff1ff11166f
        f66ff1ff1ff1111ff1ff1f1ff1f1ff1ff1111ff1ff1ff66f
        6c6ff1111ff1ff1111ff111ff111ff1111ff1ff1111ff6c6
        fccff1ff1ff1ff1ff1111f1ff1f1111ff1ff1ff1ff1ffccf
        f66ff1ff1111ff1ff1ff1f1ff1f1ff1ff1ff1111ff1ff66f
        f66111ff1ff1ff1ff1ff1f1ff1f1ff1ff1ff1ff1ff11166f
        6c6ff1ff1ff1111ff1ff1f1ff1f1ff1ff1111ff1ff1ff6c6
        fccff1111ff1ff1ff1ff111ff111ff1ff1ff1ff1111ffccf
        f66ff1ff1ff1ff1111ff1f1ff1f1ff1111ff1ff1ff1ff66f
        f66ff1ff1111ff1ff1111f1ff1f1111ff1ff1111ff1ff66f
        6c6111ff1ff1ff1ff1ff1f1ff1f1ff1ff1ff1ff1ff1116c6
        fccff1ff1ff1111ff1ff1f1ff1f1ff1ff1111ff1ff1ffccf
        ...ff1111ff1ff1ff1ff111ff111ff1ff1ff1ff1111ff...
        .....fff1ff1ff1111ff1f1ff1f1ff1111ff1ff1fff.....
        ........1111ff1ff1ff1f1ff1f1ff1ff1ff1111........
        ...........1ff1ff1111f1ff1f1111ff1ff1...........
        ..............fff1ff1f1ff111ff1fff..............
        .................fff111ff1f1fff.................
        ....................1f1ff1f1....................
        `, SpriteKind.ink_house)
    tiles.placeOnTile(mySprite6, tiles.getTileLocation(148, 21))
    tiles.placeOnTile(MYSPRITE7, tiles.getTileLocation(148, 31))
    animation.runImageAnimation(
    mySprite4,
    [img`
        ..........................
        .............f............
        ............faf...........
        ...........faaaf..........
        ...f.....ffaaaaaff....f...
        ..f.f...faaaaaaaaaf..f.f..
        ...f...faa212aa212af..f...
        .f....faaa212aa212aaf...f.
        f.f...faaaa2aaaa2aaaf..f.f
        .f....faaaaaaaaaaaaaf...f.
        ......faaaaaaaaaaaaaf.....
        ......faaaaaaaaaaaaaf.....
        .....faaaaaaf1f1faaaaf....
        ....faaaaaaaaaaaaaaaaaf...
        ...faafaaaffaaaffaaafaaf..
        ...faf.faf..faf..faf.faf..
        ...ff..faf..faf..faf..ff..
        ..a....faf..faf..faf....a.
        .a.a....f...faf...f....a.a
        ..a..........f..........a.
        ........a.........a.......
        .......a.a...a...a.a......
        ........a...a.a...a.......
        .............a............
        ..........................
        `,img`
        ..........................
        ............f.............
        ...........faf............
        ..........faaaf...........
        ........ffaaaaaff.........
        ...f...faaaaaaaaaf....f...
        ..f.f.faa212aa212af..f.f..
        ...f.faaa212aa212aaf..f...
        .f...faaaa2aaaa2aaaf....f.
        f.f..faaaaaaaaaaaaaf...f.f
        .f...faaaaaaaaaaaaaf....f.
        .....faaaaaaaaaaaaaf......
        ....faaaaaaf1f1faaaaf.....
        ...faaaaaaaaaaaaaaaaaf....
        ..faafaaaffaaaffaaafaaf...
        ..faf.faf..faf..faf.faf...
        ..ff..faf..faf..faf..ff...
        ......faf..faf..faf.......
        .a.....f...faf...f.....a..
        a.a.........f.........a.a.
        .a.....................a..
        .......a.........a........
        ......a.a...a...a.a.......
        .......a...a.a...a........
        ............a.............
        `],
    500,
    true
    )
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(122, 54))
    mySprite4.sayText("I am the ghost squid", 1000, true)
    projectile2 = sprites.createProjectileFromSprite(img`
        . . a a a a a a a a a a . . . . 
        . a f 1 f 1 f 1 f 1 f 1 a . . . 
        . a 1 f f f f f f f f f a . . . 
        . a f f f f f f f f f 1 a . . . 
        . a 1 f f f f f f f f f a . . . 
        . a f f f f f f f f f 1 a . . . 
        . a 1 f f f f f f f f f a . . . 
        . a f f f f f f f f f 1 a . . . 
        . a 1 f f f f f f f f f a . . . 
        . a f 1 f 1 f 1 f 1 f 1 a . . . 
        . . a a a a a a a a a a . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite4, 100, 0)
    projectile2.setKind(SpriteKind.megaprojectile)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(124, 54))
    statusbar = statusbars.create(20, 4, StatusBarKind.extrahealth)
    statusbar.setColor(9, 1)
    statusbar.attachToSprite(mySprite, 4, -4)
    info.startCountdown(30)
})
sprites.onOverlap(SpriteKind.megaprojectile, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -50
    statusbar3.value += -50
    projectile2.destroy(effects.fire, 1000)
    statusbar.destroy(effects.disintegrate, 1000)
    mySprite4.sayText("we will meet again!", 5000, true)
    mySprite4.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchUp, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level4`))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(166, 43))
    game.splash(" a new path opened up")
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`transparency16`, function (sprite, location) {
    mySprite3.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
	
})
scene.onHitWall(SpriteKind.fuel, function (sprite, location) {
    tiles.placeOnRandomTile(stausbar2, sprites.dungeon.darkGroundCenter)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fuel, function (sprite, otherSprite) {
    if (Math.percentChance(50)) {
        stausbar2.value += 50
        mySprite2.destroy()
    } else {
        statusbar3.value += 50
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile35`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level8`))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    game.splash(game.ask("do you want some healing?"), "")
    if (info.score() >= 5) {
        info.changeScoreBy(-5)
        statusbar3.value += 100
        tiles.placeOnTile(mySprite, tiles.getTileLocation(146, 50))
    } else {
        game.splash("sorry not enough coins")
        tiles.placeOnTile(mySprite, tiles.getTileLocation(146, 50))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    game.showLongText("speed training invisibility potions ink clothes effectclear. do you want any of these items ", DialogLayout.Bottom)
    if (game.askForString("", 30) == "speedtraining") {
        if (info.score() >= 10) {
            info.changeScoreBy(-10)
            mySprite.setVelocity(1, 50)
            mySprite.vx += 30
            mySprite.vy += 30
            tiles.placeOnTile(mySprite, tiles.getTileLocation(171, 26))
        } else {
            game.showLongText("you do not have enough coins yet", DialogLayout.Bottom)
        }
        tiles.placeOnTile(mySprite, tiles.getTileLocation(171, 26))
    }
})
let mySprite2: Sprite = null
let mySprite3: Sprite = null
let projectile2: Sprite = null
let MYSPRITE7: Sprite = null
let mySprite6: Sprite = null
let mySprite4: Sprite = null
let statusbar: StatusBarSprite = null
let projectile: Sprite = null
let projectile3: Sprite = null
let host_: Sprite = null
let mySprite: Sprite = null
let stausbar2: StatusBarSprite = null
let statusbar3: StatusBarSprite = null
statusbar3 = statusbars.create(20, 4, StatusBarKind.Health)
stausbar2 = statusbars.create(20, 4, StatusBarKind.Energy)
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
info.setLife(5)
let mySprite8 = game.askForString("", 12)
mySprite.sayText("" + mySprite8)
game.showLongText("" + mySprite8 + " you have been chosen defeat the monsters fight the champions and obliterate the bosses I must go now but we will meet again!" + "", DialogLayout.Bottom)
stausbar2.attachToSprite(mySprite, 0, -2)
statusbar3.max = 500
statusbar3.value = 500
stausbar2.value = 100
statusbar3.attachToSprite(mySprite, 4, -3)
stausbar2.max = 100
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(154, 69))
scene.cameraFollowSprite(mySprite)
game.onUpdateInterval(50000, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 5 5 5 5 5 5 . . . . . 
        . . . . 7 2 5 5 5 5 5 . . . . . 
        . . . . 7 7 2 5 5 5 5 . . . . . 
        . . . . 7 7 7 2 5 5 5 . . . . . 
        . . . . 7 7 7 7 2 5 5 . . . . . 
        . . . . 7 7 7 7 7 2 5 . . . . . 
        . . . . 7 7 7 7 7 7 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.fuel)
    tiles.placeOnRandomTile(mySprite2, sprites.dungeon.darkGroundCenter)
})
forever(function () {
    music.playMelody("C5 C B E A E G E ", 120)
})
game.onUpdateInterval(20000, function () {
    mySprite3 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f1111111df.......
        ......fd1111111ddf......
        ......fd111111dddf......
        ......fd111ddddddf......
        ......fd1dfbddddbf......
        ......fbddfcdbbbcf......
        .......f11111bbcf.......
        .......f1b1fffff........
        .......fbfc111bf........
        ........ff1b1bff........
        .........fbfbfff.f......
        ..........ffffffff......
        ............fffff.......
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    mySprite3.follow(mySprite, 50)
    tiles.placeOnRandomTile(mySprite3, sprites.dungeon.darkGroundCenter)
})
