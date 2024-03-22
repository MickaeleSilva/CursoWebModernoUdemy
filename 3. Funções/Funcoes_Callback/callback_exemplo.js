function fazAlgoAssincrono(callback) {
    // Simula uma operação assíncrona
    setTimeout(function() {
    console.log("A operação assíncrona foi concluída!");
    // Chama a função de callback após a operação assíncrona ser concluída
    callback();
    }, 2000); // Tempo de espera de 2 segundos
    }
    // Define a função de callback
    function meuCallback() {
    console.log("Callback executado!");
    }
    // Chama a função fazAlgoAssincrono e passa a função callback como argumento
    fazAlgoAssincrono(meuCallback);