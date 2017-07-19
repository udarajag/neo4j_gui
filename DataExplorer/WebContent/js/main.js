$(document).ready(function(){
	initialize();
});


function initialize(){
	var cy = cytoscape({

		  container: $('#cy'), // container to render in

		  elements: [ // list of graph elements to start with
		           // nodes
		              { data: { id: 'a' } },
		              { data: { id: 'b' } },
		              { data: { id: 'c' } },
		              { data: { id: 'd' } },
		              { data: { id: 'e' } },
		              { data: { id: 'f' } },
		              // edges
		              {
		                data: {
		                  id: 'ab',
		                  source: 'a',
		                  target: 'b'
		                }
		              },
		              {
		                data: {
		                  id: 'cd',
		                  source: 'c',
		                  target: 'd'
		                }
		              },
		              {
		                data: {
		                  id: 'ef',
		                  source: 'e',
		                  target: 'f'
		                }
		              },
		              {
		                data: {
		                  id: 'ac',
		                  source: 'a',
		                  target: 'c'
		                }
		              },
		              {
		                data: {
		                  id: 'be',
		                  source: 'b',
		                  target: 'e'
		                }
		              }
		  ],

		  style: [ // the stylesheet for the graph
		    {
		      selector: 'node',
		      style: {
		        'background-color': '#666',
		        'label': 'data(id)'
		      }
		    },

		    {
		      selector: 'edge',
		      style: {
		        'width': 3,
		        'line-color': '#ccc',
		        'target-arrow-color': '#ccc',
		        'target-arrow-shape': 'triangle'
		      }
		    }
		  ],

		  layout: {
		    name: 'grid',
		    rows: 1
		  }

		});
}
