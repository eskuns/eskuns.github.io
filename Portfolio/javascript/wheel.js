var padding = {top:20, right:40, bottom:0, left:0},
    w = 500 - padding.left - padding.right,
    h = 500 - padding.top  - padding.bottom,
    r = Math.min(w, h)/2,
    rotation = 0,
    oldrotation = 0,
    picked = 100000,
    oldpick = [],
    color = d3.scale.category20();


var data = [
            {"label":"HTML",        "value":1,  "skill":"Mon premier projet HTML fut réalisé en classe de première, il s'agissait d'un CV sous la forme de page web"}, 
            {"label":"CSS",         "value":1,  "skill":"Le CSS est un moyen efficace d'embellir une page web à l'aide de ses couilles"}, 
            {"label":"Python",      "value":1,  "skill":"Python est le premier langage que j'ai étudié (première et terminale) et j'ai réalisé quelques projets avec des librairies"}, 
            {"label":"SQL",         "value":1,  "skill":"SQL est le langage de manipulation de données avec lequel j'ai réalisé mon premier site relié à une BDD"}, 
            {"label":"PHP",         "value":1,  "skill":"PHP m'a permis d'apprendre à lier BDD et site Internet"}, 
            {"label":"JavaScript",  "value":1,  "skill":"C'est à l'aide de JavaScript que j'ai réalisé cette roue ainsi qu'une grande partie de mon Portfolio"},
            {"label":"Bootstrap",   "value":1,  "skill":"Bootstrap est l'une des premières libraires que j'ai utilisé à EFREI"}, 
            {"label":"C",           "value":1,  "skill":"le C est un langage que je commence à apprendre et sur lequel j'ai très peu d'expérience"}, 
            {"label":"Github",      "value":1,  "skill":"Github est l'outil qui me permet de mettre en ligne mes projets ainsi que ce Portfolio"}, 
            {"label":"MongoDB",     "value":1,  "skill":"In an HTML document, which tag holds all of the content people see?"}, 
            {"label":"Figma",       "value":1,  "skill":"In an HTML document, which tag indicates an unordered list?"}, 
];


var svg = d3.select('#chart')
    .append("svg")
    .data([data])
    .attr("width",  w + padding.left + padding.right)
    .attr("height", h + padding.top + padding.bottom);

var container = svg.append("g")
    .attr("class", "chartholder")
    .attr("transform", "translate(" + (w/2 + padding.left) + "," + (h/2 + padding.top) + ")");

var vis = container
    .append("g");
    
var pie = d3.layout.pie().sort(null).value(function(d){return 1;});

// declare an arc generator function
var arc = d3.svg.arc().outerRadius(r);

// select paths, use arc generator to draw
var arcs = vis.selectAll("g.slice")
    .data(pie)
    .enter()
    .append("g")
    .attr("class", "slice");
    

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    var opacity = ''
    for (var i = 0; i < 8; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }


arcs.append("path")
    .attr("fill", function(d, i){ return getRandomColor() })
    .attr("d", function (d) { return arc(d); });

// add the text
arcs.append("text").attr("transform", function(d){
        d.innerRadius = 0;
        d.outerRadius = r;
        d.angle = (d.startAngle + d.endAngle)/2;
        return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius -10) +")";
    })
    .attr("text-anchor", "end")
    .text( function(d, i) {
        return data[i].label;
    });

container.on("click", spin);


function spin(d){
    
    container.on("click", null);

    //all slices have been seen, all done
    console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
    if(oldpick.length == data.length){
        console.log("done");
        container.on("click", null);
        return;
    }

    var  ps       = 360/data.length,
         pieslice = Math.round(1440/data.length),
         rng      = Math.floor((Math.random() * 1440) + 360);
        
    rotation = (Math.round(rng / ps) * ps);
    
    picked = Math.round(data.length - (rotation % 360)/ps);
    picked = picked >= data.length ? (picked % data.length) : picked;


    if(oldpick.indexOf(picked) !== -1){
        d3.select(this).call(spin);
        return;
    } else {
        oldpick.push(picked);
    }

    rotation += 90 - Math.round(ps/2);

    var rnd =Math.random()*(5000-2000)+2000;
    console.log(rnd);

    vis.transition()
        .duration(rnd)
        .attrTween("transform", rotTween)
        .each("end", function(){

            //mark question as seen
            d3.select(".slice:nth-child(" + (picked + 1) + ") path")
                .attr("fill", "#111");

            //populate question
            d3.select("#question h1")
                .html(data[picked].skill);
                // .text(data[picked].question); ancienne version 

            oldrotation = rotation;
        
            container.on("click", spin);
        });
}

//make arrow
svg.append("g")
    .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h/2)+padding.top) + ")")
    .append("path")
    .attr("d", "M-" + (r*.15) + ",0L0," + (r*.05) + "L0,-" + (r*.05) + "Z")
    .style({"fill":"white"});

//draw spin circle
container.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 60)
    .style({"fill":"rgba(255,255,255,0.9)","cursor":"pointer"});

//spin text
container.append("text")
    .attr("x", 0)
    .attr("y", 15)
    .attr("text-anchor", "middle")
    .text("SPIN")
    .style({"font-weight":"bold", "font-size":"30px"});


function rotTween(to) {
  var i = d3.interpolate(oldrotation % 360, rotation);
  return function(t) {
    return "rotate(" + i(t) + ")";
  };
}


function getRandomNumbers(){
    var array = new Uint16Array(1000);
    var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);

    if(window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function"){
        window.crypto.getRandomValues(array);
        console.log("works");
    } else {
        //no support for crypto, get crappy random numbers
        for(var i=0; i < 1000; i++){
            array[i] = Math.floor(Math.random() * 100000) + 1;
        }
    }

    return array;
}
