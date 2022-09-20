radio.onReceivedNumber(function (receivedNumber) {
    let receiveString = 0
    if (receiveString == Number2) {
        basic.showNumber(Number2)
    }
})
input.onButtonPressed(Button.A, function () {
    Number2 += 1
    basic.showNumber(Number2)
})
input.onButtonPressed(Button.B, function () {
    Number2 += -1
    basic.showNumber(Number2)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("" + (Number2))
    basic.showNumber(Number2)
})
let Number2 = 0
Number2 = randint(0, 10)
radio.setGroup(77)
