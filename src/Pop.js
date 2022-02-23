import EventEmitter from './EventEmitter';


const Pop = function(){


    const pop = this;
    pop.params = Pop.perseParams(arguments);
    Pop.mergeDefaultParams(pop);

    pop.modules = [...pop.__modules__];

    pop.modules.forEach( (moduleFunc)=>{
        moduleFunc({

        });
    });

    Pop.mergeDefaultParams(pop);

    return pop;
}

// インスタンス生成時の引数を、並列の名前付き配列にして返す
Pop.perseParams = function(args){
    let params = [];
    for(var _len = args.length, newArgs = new Array(_len),_key = 0; _key < _len; _key++){
        newArgs[_key] = args[_key];
    }

    Object.entries(newArgs).forEach( m => {
        Object.entries(m[1]).forEach( (n) => {
            params[n[0]] = n[1];
        })
    })
    return params;
};

// デフォルト引数をセットする
Pop.mergeDefaultParams = function(target){
    Object.assign(target, {
        top:0,
        left:0,
        right:0,
        bottom:0
    });
}


Pop.setModule = function(module){
    if(typeof Pop.prototype.__modules__ === 'undefined'){
        Pop.prototype.__modules__ = [];
    }

    const modules =  Pop.prototype.__modules__;

    if(typeof module === 'function' && modules.indexOf(module) < 0 ){
        modules.push(module);
    }
}

Pop.use = function(modules){
    if(Array.isArray(modules)){
        modules.forEach( m => Pop.setModule(m) );
        return false;
    }

    Object.entries(modules).forEach( (m) => {
        Pop.setModule(m[1]);
    });
};

function ok(){
    console.log('ok');
}

function ng(){
    console.log('ok');
}



Pop.use([ok,ng]);

Pop.use(EventEmitter);

window.Pop = Pop;


