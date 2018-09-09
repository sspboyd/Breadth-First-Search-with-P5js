function Node(val){
    this.value = val;
    this.edges = [];
    this.searched = false;
    this.parent = null;
}


Node.prototype.addEdge = function(neighbour){
    this.edges.push(neighbour);
    // edges have to go both ways
    neighbour.edges.push(this);
}
