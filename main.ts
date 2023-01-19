input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.TiltLeft, function () {
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            # . . . #
            # # . # #
            . . # . .
            # # . # #
            # . . . #
            `)
        music.playMelody("G G G G A A A C ", 340)
    }
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.Yes)
        music.playMelody("G G G G A A A C ", 340)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallHeart)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # # . .
        # . . # .
        . . # . .
        . . . . .
        . . # . .
        `)
})
basic.showString("Hello!")
basic.forever(function () {
	
})
