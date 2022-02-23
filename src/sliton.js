(function(root, factory){
    console.log('onon');
    window['Sliton'] = factory();
})(this, function(){

    var VERSION = '1.0';


    var Sliton = function(args){
        this.dom = args.dom;
        this.count = args.count ? args.count : '';
        this.speed = args.speed ? args.speed : '';
    }

    Sliton.prototype.start = function(){
        this.container = document.getElementById('#' + this.dom);
        console.log(this.container);
        return 111;
    }

    return {
        'version': function(){
            return VERSION;
        },
        init: function(args){
            var sliton = new Sliton(args);
            sliton.start();
            return sliton;
        }
    }
})

console.log('onon');