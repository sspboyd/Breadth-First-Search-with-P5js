var data;
var graph;
var dropdown;

function preload() {
    data = loadJSON('kevinbacon.json');
}

function setup() {
    graph = new Graph();
    dropdown = createSelect();
    dropdown.changed(bfs);

    noCanvas();
    // console.log(data);

    var movies = data.movies;

    for (var i = 0; i < movies.length; i++) {
        var movie = movies[i].title;
        var cast = movies[i].cast;
        var movieNode = new Node(movie);
        graph.addNode(movieNode);

        for (var j = 0; j < cast.length; j++) {
            var actor = cast[j];
            var actorNode = graph.getNode(actor);

            if (actorNode == undefined) {
                actorNode = new Node(actor);
                graph.addNode(actorNode);
                dropdown.option(actor);
            }
            // console.log(actor);
            movieNode.addEdge(actorNode)
        }
    }
}

// The breadth first search function
function bfs() {
    graph.reset();
    var start = graph.setStart(dropdown.value());
    var end = graph.setEnd("Kevin Bacon");
    console.log(graph);

    var queue = [];

    start.searched = true;
    queue.push(start);

    while (queue.length > 0) {
        var current = queue.shift();
        // console.log(current.value)
        if (current == end) {
            console.log("Found! " + current.value);
            break;
        }
        var edges = current.edges;
        for (var i = 0; i < edges.length; i++) {
            var neighbour = edges[i];
            if (!neighbour.searched) {
                neighbour.searched = true;
                neighbour.parent = current;
                queue.push(neighbour);
            }

        }
    }
    var path = [];
    path.push(end);
    var next = end.parent;
    while (next != null) {
        path.push(next);
        next = next.parent;
    }
    var txt = "";
    for (var i = path.length - 1; i >= 0; i--) {
        var n = path[i];
        txt += n.value;
        if (i > 0) {
            txt += " --> ";
        }
    }
    createP(txt);
}

// #6degreesofkevinbaconbreadthfirstsearchwhatever
