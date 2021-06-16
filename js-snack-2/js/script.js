var triangoloRettangolo = {
    base: 30,
    altezza: 50
}

var ipotenusa = Math.sqrt(Math.pow(triangoloRettangolo.base,2) + Math.pow(triangoloRettangolo.altezza,2));
console.log(ipotenusa)

var perimetro = ipotenusa + triangoloRettangolo.base + triangoloRettangolo.altezza;
console.log(perimetro)

var area = (triangoloRettangolo.base * triangoloRettangolo.altezza) / 2
console.log(area)




