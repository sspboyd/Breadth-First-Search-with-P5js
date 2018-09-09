function Graph() {
    this.nodes = [];
    this.graph = {};
    this.end = null;
    this.start = null;

}

Graph.prototype.addNode = function(n) {
    // node into an array
    this.nodes.push(n);
    var title = n.value;
    // node into a 'hash'
    this.graph[title] = n;

};

Graph.prototype.getNode = function(actor) {
    var n = this.graph[actor];
    return n;
}

Graph.prototype.setStart = function(actor) {
    this.start = this.graph[actor];
    return this.start;

}
Graph.prototype.setEnd = function(actor) {
    this.end = this.graph[actor];
    return this.end;
}

Graph.prototype.reset = function(){
    for(var i=0; i<this.nodes.length;i++){
        this.nodes[i].searched = false;
        this.nodes[i].parent = null;
    }
}
