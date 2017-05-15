'use strict';

/**
 * 	Canvas realization of Dijkstra algorithm
 */

const 	canvas = document.getElementById('canvas'),
		ctx = canvas.getContext('2d'),
		countOfNodes = 9,
		nodes = [],
		connections = [],
		color = '#FF5722',
		nodeColor = '#9C27B0';

const 	INFINITY = 1/0;
const 	FROM = '8';
const	TO = '4';
let 	path;

class Node {
	constructor(x, y, number) {
		this.x = x;
		this.y = y;
		this.number = number;
		this.color = nodeColor;
		this.connections = [];
	}

	setConnection(node, value) {
		const connection = {
			a: this,
			b: node,
			dist: calcDist(this, node),
			value
		}
		connections.push(connection);
	}

	draw() {
		ctx.fillStyle = 'rgba(102,204,0, .7)';
        ctx.strokeStyle = 'rgba(102,204,0, .7)'; 

		//draw position
		ctx.beginPath();
		ctx.arc(this.x, this.y, 10, 0, Math.PI*2, true);
		ctx.font = "20px Georgia";
		ctx.fillText(this.number, this.x - 30, this.y)
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

	}
}

class Connection {
	constructor(a, b, value) {
		this.a = a;
		this.b = b;
		this.value = value;
		this.dist = calcDist(a, b);
	}

	static drawConnections() {
		ctx.lineWidth = 5;

		for(let i = 0; i < connections.length; ++i) {

			
			const firstN = connections[i].a.number;
			const secondN = connections[i].b.number;
			
			for (let j = 0; j < path.length; ++j) {
				
				if ((firstN == path[j] && secondN == path[j-1]) ||
					(firstN == path[j-1] && secondN == path[j])) {
					ctx.strokeStyle = 'red';
					break;
				}
				else
					ctx.strokeStyle = 'rgba(0,153,255, .3)';
			}
			
			ctx.beginPath()
			ctx.moveTo( connections[i].a.x, connections[i].a.y);
			ctx.lineTo( connections[i].b.x, connections[i].b.y);
			//label the connections
			let mid = calcMidPoint(connections[i].a, connections[i].b);

			ctx.fillText(connections[i].value, mid.x, mid.y)
			ctx.stroke();
			ctx.closePath();
		} 
	}
}

class Graph {
	constructor(connections) {
		this.vertices = {};

		//parse connections into such form : {vertexName: {vertexName: value, vertexName: value}}
		for (let i = 0; i < connections.length; ++i) {

			const vertices = {};

			connections.forEach(c => {
				//where 'a' & 'b' are connected nodes
				if (c.a === i.toString()) 
					vertices[c.b] = c.value;

				if (c.b === i.toString())
					vertices[c.a] = c.value
			})

			this.vertices[i] = vertices;
		}
	}

	addVertex(name, edges) {
		this.vertices[name] = edges;
	}

	shortestPath(start, finish) {
		let nodes = new PriorityQueue(),
			distances = {},
			previous = {},
			path = [],
			smallest, vertex, neighbor, alt;

		for (vertex in this.vertices) {
			if (vertex === start) {
				distances[vertex] = 0;
				nodes.enqueue(0, vertex);
			} else {
				distances[vertex] = INFINITY;
				nodes.enqueue(INFINITY, vertex);
			}
			previous[vertex] = null;
		}

		while(!nodes.isEmpty()) {
			smallest = nodes.dequeue();

			if (smallest === finish) {
				path = [];

				while (previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}
				break;
			}
			if (!smallest || distances[smallest] === INFINITY) {
				continue;
			}

			for (neighbor in this.vertices[smallest]) {
				alt = distances[smallest] + this.vertices[smallest][neighbor];

				if (alt < distances[neighbor]) {
					distances[neighbor] = alt;
					previous[neighbor] = smallest;

					nodes.enqueue(alt, neighbor);
				}
			}
		}
		return path;
	}
}

class PriorityQueue {
	constructor() {
		this._nodes = [];
	}

	enqueue(priority, key) {
		this._nodes.push({
			key,
			priority
		})
		this.sort();
	}

	dequeue() {
		return this._nodes.shift().key;
	}

	sort() {
		this._nodes.sort((a, b) => a.priority - b.priority)
	}

	isEmpty() {
		return !this._nodes.length;
	}
}


//to calc dist beetwin two nodes
function calcDist(n1, n2) {
	const x1 = n1.x;
	const x2 = n2.x;
	const y1 = n1.y;
	const y2 = n2.y;

	return Math.sqrt(Math.pow( x2 - x1, 2) + Math.pow( y2 - y1, 2));
}

//to calc center point beetwin two nodes to put text there
function calcMidPoint(n1, n2) {
	const x1 = Number(n1.x);
	const x2 = Number(n2.x);
	const y1 = Number(n1.y);
	const y2 = Number(n2.y);

	const mid = {x: (x1 + x2) / 2, y: (y1 + y2) / 2 };

	return mid;
}

//parse data from xml
function parseFromXml() {	

	const parsedConnection = [];

	const parser = new DOMParser();
	const xmlDoc = parser.parseFromString(xml, 'text/xml');
	
	//read nodes
	const vertices = xmlDoc.getElementsByTagName("Vertex");

	for (let i = 0; i < vertices.length; ++i) {
		const node = xmlDoc.getElementsByTagName('Vertex')[i];
		nodes.push(new Node( node.getAttribute('x'), node.getAttribute('y'), node.getAttribute('id') ))
	}

	//read connections
	const edges = xmlDoc.getElementsByTagName("Edge");

	for (let i = 0; i < edges.length; ++i) {
		const connection = xmlDoc.getElementsByTagName('Edge')[i];
		parsedConnection.push(new Connection( 
			connection.getAttribute('from'), 
			connection.getAttribute('to'), 
			connection.getAttribute('weight') ))
	}

	return parsedConnection;


}

//here everything start
function init() {

	//parse data
	const parsedConnection = parseFromXml();
	
	//draw nodes
	nodes.forEach(n => n.draw());

	//init connections
	parsedConnection.forEach((c, i) => {		
		const firstNode = nodes[Number(c.a) - 1];
		const secondNode = nodes[Number(c.b) - 1];
		
		//create new connection beetwin 2 nodes.
		firstNode.setConnection(secondNode, c.value);
	})

	//create graph
	const graph = new Graph(parsedConnection);

	//shortest path
	path = graph.shortestPath(FROM, TO).concat(FROM).reverse();

	//draw connections
	Connection.drawConnections();


	console.log(path);
}



window.onload = () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	init();
}


const xml = `<?xml version="1.0" encoding="utf-8"?>

<Graph>
    <Vertices>
        <Vertex id = "1" x = "40"  y = "272"/>
        <Vertex id = "2" x = "140" y = "132"/>
        <Vertex id = "3" x = "410" y = "62" />
        <Vertex id = "4" x = "720" y = "152"/>
        <Vertex id = "5" x = "510" y = "222"/>
        <Vertex id = "6" x = "320" y = "292"/>
        <Vertex id = "7" x = "680" y = "382"/>
        <Vertex id = "8" x = "310" y = "492"/>
        <Vertex id = "9" x = "540" y = "482"/>
    </Vertices>
    <Edges>
        <Edge id = "0"  weight = "58" from = "1" to = "2"/>
        <Edge id = "1"  weight = "3"  from = "2" to = "3"/>
        <Edge id = "2"  weight = "26" from = "3" to = "4"/>
        <Edge id = "3"  weight = "8"  from = "2" to = "5"/>
        <Edge id = "4"  weight = "31" from = "5" to = "4"/>
        <Edge id = "5"  weight = "13" from = "2" to = "6"/>
        <Edge id = "6"  weight = "39" from = "6" to = "5"/>
        <Edge id = "7"  weight = "39" from = "1" to = "6"/>
        <Edge id = "8"  weight = "43" from = "1" to = "8"/>
        <Edge id = "9"  weight = "31" from = "6" to = "8"/>
        <Edge id = "10" weight = "11"  from = "6" to = "9"/>
        <Edge id = "11" weight = "24" from = "6" to = "7"/>
        <Edge id = "12" weight = "32" from = "5" to = "7"/>
        <Edge id = "13" weight = "14" from = "4" to = "7"/>
        <Edge id = "14" weight = "11" from = "7" to = "9"/>
        <Edge id = "15" weight = "64" from = "9" to = "8"/>
        <Edge id = "16" weight = "3"  from = "3" to = "5"/>
    </Edges>
</Graph>
`