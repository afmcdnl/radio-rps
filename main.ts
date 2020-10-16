radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == image) {
        basic.showString("Tied")
    } else if (receivedNumber == 2 && image == 0) {
        basic.showString("Winner")
    } else {
    	
    }
})
input.onGesture(Gesture.Shake, function () {
    image = randint(0, 2)
    if (image == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # # # # #
            # . . . .
            # . . . .
            `)
    } else if (image == 1) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # # # .
            # . . # .
            # # # # .
            # . # . .
            # . . # .
            `)
    }
    radio.sendNumber(image)
})
let image = 0
radio.setGroup(1)
