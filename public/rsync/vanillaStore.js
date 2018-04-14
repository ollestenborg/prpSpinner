var subscribers = [];
var middlewares;

function Store(mid) {
    middlewares = mid || [];

    this.prevState = {};
    this.state = {};
    this.state.streams = []
    this.state.criterias = []
    this.state.currentStream = []

    this.state = this.reduce(this.state, {});

    if (middlewares.length > 0) {
        this.dispatch = this._combineMiddlewares();
    }
}

Store.prototype.getState = function() {
    return this.state;
};

Store.prototype.getPrevState = function() {
    return this.prevState;
};
Store.prototype.dispatch = function(action) {
    this.prevState = this.state;
    this.state = this.reduce(this.state, action);

    this.notifySubscribers();

    return action;
};
Store.prototype.dispatchPromise = function(actionPromise) {
    var that = this
    actionPromise.then(function(action) {
        that.prevState = that.state;
        that.state = that.reduce(that.state, action);

        that.notifySubscribers();

    })

    return 1;

};
Store.prototype._combineMiddlewares = function() {
    var self = this;
    var dispatch = this.dispatch;

    var middlewareAPI = {
        getState: this.getState.bind(this),
        dispatch: function(action) {
            return dispatch.call(self, action);
        }
    };

    // Inject store "proxy" into all middleware
    var chain = middlewares.map(function(middleware) {
        return middleware(middlewareAPI);
    });

    // Init reduceRight with middlewareAPI.dispatch as initial value
    dispatch = chain.reduceRight(function(composed, fn) {
        return fn(composed);
    }, dispatch.bind(this));

    return dispatch;
};

Store.prototype.reduce = function(state, action) {
    return {
        streams: createStream(state, action),
        searchPhrase: sendForm(state, action),

        //turn: updateTurn(state.turn, action),
        //score: updateScore(state.score, action),
        //winnerSequence: updateWinnerSequence(state.winnerSequence, action),
        //turnCounter: updateCounter(state.turnCounter, action),
        //player: updatePlayer(state.player, action)
    };
};

Store.prototype.subscribe = function(fn) {
    subscribers.push(fn);
};

Store.prototype.notifySubscribers = function() {
    subscribers.forEach(function(subscriber) {
        subscriber(this.prevState, this.state);
    }.bind(this));
};

function sendForm(state, action) {
    switch (action.type) {
        case 'sendForm':
            return action.body
            break;
        default:
            return state.searchPhrase
            break;
    }
}

function createStream(state, action) {
    switch (action.type) {
        case 'createStream':
            fs.db.collection("event").add(action.body[0])
            debugger
            return [...state.streams, ...action.body]
            break;
        default:
            return state.streams
            break;
    }
}
const persistToFs = (col, doc) => {
    fs.db.collection(col).add(doc)
}

window.persistToFs = persistToFs
const send = (q, fs) => {
    var action = fs.db.collection("event")
    q.map((crit) => {
        action = action.where(crit["field"], crit["op"], crit["value"])
    })
    action.get().then(function(docs) {
        docs.forEach((doc) => {
            console.log(doc.data());
        })
    })
}
window.send = send

function createStreamw(cell, action) {
    switch (action.type) {
        case 'SET_X':
            return 'x';
        case 'SET_O':
            return 'o';
        case 'RESTART_GAME':
            return '';
        default:
            return cell;
    }
}

//reducer


export default Store;