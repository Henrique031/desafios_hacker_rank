
let s = '10:01:00am'

function timeConversion(s) {
    let getHora = s.substring(0, 2)

    let horaConvertida = ''

    
    let pegarAm = s.indexOf('AM')
    let pegarPm = s.toUpperCase().indexOf('PM')

    if (pegarPm >= 0) {


        switch (getHora) {
            case '01':
                horaConvertida = '13' + s.substring(2, 8)
            break;

            case '02':
                horaConvertida = '14' + s.substring(2, 8)
            break;
            
            case '03':
                horaConvertida = '15' + s.substring(2, 8)
            break;
            
            case '04':
                horaConvertida = '16' + s.substring(2, 8)
            break;

            case '05':
                horaConvertida = '17' + s.substring(2, 8)
            break;
            
            case '06':
                horaConvertida = '18' + s.substring(2, 8)
            break;
            
            case '07':
                horaConvertida = '19' + s.substring(2, 8)
            break;
            
            case '08':
                horaConvertida = '20' + s.substring(2, 8)
            break;
            
            case '09':
                horaConvertida = '21' + s.substring(2, 8)
            break;
            
            case '10':
                horaConvertida = '22' + s.substring(2, 8)
            break;
            
            case '11':
                horaConvertida = '23' + s.substring(2, 8)
            break;
            
            case '12':
                horaConvertida = '12' + s.substring(2, 8)
            break;
                
                default:
                break;
        }

    } else {
    switch (getHora) {
        case '12':
            horaConvertida = '00' + s.substring(2, 8)
            break;
    
        default:
            horaConvertida = s.substring(0, 8)
            break;
    }
    }
    console.log(horaConvertida)
    return horaConvertida
}

timeConversion(s)