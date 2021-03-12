def SendAlert(msg: str):
    radio.send_string(msg)

def on_sound_loud():
    SendAlert("Sound")
input.on_sound(DetectedSound.LOUD, on_sound_loud)

z = 0
y = 0
x = 0
light2 = 0
base_x = input.acceleration(Dimension.X)
base_y = input.acceleration(Dimension.Y)
base_z = input.acceleration(Dimension.Z)
basic.clear_screen()
old_light = led.point_brightness(0, 0)
input.set_sound_threshold(SoundThreshold.LOUD, 128)

def on_forever():
    global light2, old_light, x, y, z
    while True:
        light2 = led.point_brightness(0, 0)
        if light2 > old_light:
            SendAlert("Light")
        old_light = light2
        x = input.acceleration(Dimension.X)
        y = input.acceleration(Dimension.Y)
        z = input.acceleration(Dimension.Z)
        if abs(x - base_x) > 10:
            SendAlert("move")
        elif abs(y - base_y) > 10:
            SendAlert("move")
        elif abs(z - base_z) > 10:
            SendAlert("move")
basic.forever(on_forever)
