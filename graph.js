function Graph() {
    this.nodes = [];
    this.graph = {};

}

Graph.prototype.addNode = function(n) {
    // node into an array
    this.nodes.push(n);
    var title = n.value;
    // node into a 'hash'
    this.graph[title] = n;

};


Graph.prototype.getNode = function(actor){
    var n = this.graph[actor];
    return n;
}
