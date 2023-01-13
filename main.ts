input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Sad)
    music.ringTone(165)
    basic.pause(1000)
    music.stopMelody(MelodyStopOptions.All)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
    music.ringTone(659)
    basic.pause(1000)
    music.stopMelody(MelodyStopOptions.All)
})
basic.showIcon(IconNames.Asleep)
