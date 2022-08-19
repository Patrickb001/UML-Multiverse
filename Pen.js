class Pen {
    #hasInk;
    #colorInk;

    constructor(colorInk){
        this.#hasInk = true;
        this.#colorInk = colorInk;
    }

    getHasInk(){
        return this.#hasInk
    }

    setHasInk(status){
        this.#hasInk = status;
    }

    write(sentence) {
        console.log(sentence)
    }

    sign(name){
        if (this.#hasInk){
            this.write(name)
        } else {
            throw new Error('Pen does not have ink.')
        }
    }
}

// module.exports = Pen

// let pen1 = new Pen('pink')
// pen.write("Hello world")