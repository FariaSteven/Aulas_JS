var minhaPromise = function(idade){
    return new Promise(function(resolve, reject){
            if(idade > 18){
                resolve('certo')
            }else{
                reject('Erro')
        }

    })
}


minhaPromise(20)
    .then(function(response){
        setTimeout(() => console.log('Maior que 18'), 2000)
    })
    .catch(function(error){
        setTimeout(() => console.warn('Menor que 18'), 2000)
    })

