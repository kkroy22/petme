input.onPinPressed(TouchPin.P1, function () {
    if (health < 10) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        health += 1
    }
})
let health = 0
health = 10
basic.forever(function () {
    if (health > 6) {
        basic.showIcon(IconNames.Happy)
    }
    if (health <= 6 && health > 3) {
        basic.showIcon(IconNames.Confused)
        if (health <= 3 && health > 0) {
            basic.showIcon(IconNames.Sad)
        }
        if (health <= 0) {
            basic.showIcon(IconNames.Skull)
        }
    }
})
basic.forever(function () {
    if (health > 0) {
        basic.pause(10000)
        health += -1
    }
})
