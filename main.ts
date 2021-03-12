function SendAlert (msg: string) {
    radio.sendString(msg)
}
input.onSound(DetectedSound.Loud, function () {
    SendAlert("sound")
})
let z = 0
let y = 0
let x = 0
let light2 = 0
let base_x = input.acceleration(Dimension.X)
let base_y = input.acceleration(Dimension.Y)
let base_z = input.acceleration(Dimension.Z)
basic.clearScreen()
let old_light = led.pointBrightness(0, 0)
input.setSoundThreshold(SoundThreshold.Loud, 128)
basic.forever(function () {
    while (true) {
        light2 = led.pointBrightness(0, 0)
        if (light2 > old_light) {
            SendAlert("Light")
        }
        old_light = light2
        x = input.acceleration(Dimension.X)
        y = input.acceleration(Dimension.Y)
        z = input.acceleration(Dimension.Z)
        if (Math.abs(x - base_x) > 10) {
            SendAlert("move")
        } else if (Math.abs(y - base_y) > 10) {
            SendAlert("move")
        } else if (Math.abs(z - base_z) > 10) {
            SendAlert("move")
        }
    }
})
