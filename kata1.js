const fooBarQuix = number => {
    let response = '';
    let array = number.toString().split('');

    if(number % 3 === 0) response += 'Foo';
    if(number % 5 === 0) response += 'Bar';
    if(number % 7 === 0) response += 'Quix';

    array.forEach(function(character) {
        switch (character) {
            case '3':
                response += 'Foo';
                break;
            case '5':
                response += 'Bar';
                break;
            case '7':
                response += 'Quix';
                break;
        }
    });

    if (response === '') response = number;
    
    return response;
}

const end = process.argv.splice(2);

if ( (!isNaN(end)) && end > 0 && end < 101 ) {
    for (let index = 1; index <= end; index++) {
        const spaces = (index < 10) ? '  ' : (index > 9 && index < 100) ? ' ' : '';
        console.log(`* ${index}${spaces}-> ${fooBarQuix(index)}`);
    }
} 
else 
    console.log('Introduzca un número entre 1 y 100');