namespace SpriteKind {
    export const StatusBar = SpriteKind.create()
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile35`, function (sprite, location) {
	
})
