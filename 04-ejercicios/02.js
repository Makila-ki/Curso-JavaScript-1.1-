function nombreResolucion(ancho, alto){
    if (((7680 <= ancho) && (4320 <=  alto))){
        return '4K';
    }else if (((1280 < ancho < 1920) && (720 < alto < 1080))) {
        return 'HD';
    }else if ((1920 <= ancho < 2560) && (1080 <= alto < 1440)){
        return 'FHD';
    }else if ((2560 <= ancho < 3840) && (1440 <= alto < 2160)){
        return 'WQHD';
    }else if ((3840 <= ancho < 7680) && (2160 <= alto < 4320)){
        return '4K';
    }else if ((7680 <= ancho) && (4320 <=  alto)){
        return '4K';
    }else {
        return false;
    }
}

let nombre = nombreResolucion(1366, 50);

console.log(nombre);