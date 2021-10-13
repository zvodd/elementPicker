debugDraw = ((docEl)=>{
const svgid = "uhoqwkjhajkshda2189758793201097";

function debugDraw(x,y){
    bounds = docEl.getBoundingClientRect()
    var innerSVG = `
    <rect x="0" y="0" width="${bounds.width}" height="${bounds.height}" fill="transparent"/>
    <circle cx="${x}" cy="${y}" r="20"  stroke-width="5" stroke="orange" fill="#044B94" fill-opacity="0.4" />
    `
    var svgel = docEl.querySelector(`#${svgid}`)
    if (svgel !== null && typeof svgel !== "undefined" ){
        console.log("svgel", svgel)
        docEl.removeChild(svgel)
    }

    svgdoc = makeSvg(innerSVG)
    docEl.appendChild(document.importNode(svgdoc, true))
}

function makeSvg(innerSVG){
    var {width, height} = docEl.getBoundingClientRect()
    var svgdoc = new DOMParser().parseFromString(
   `<svg xmlns="http://www.w3.org/2000/svg" id="${svgid}"
        style="position: absolute; top: 0; left: 0; z-index: 99999;"
        viewbox="0 0 ${width} ${height}"
        width="${width}"
        height="${height}">
            ${innerSVG}
    </svg>`,
   'application/xml');

    console.log('made svg:', svgdoc)
    return svgdoc.documentElement
}

return debugDraw
})(document.documentElement)

debugDraw(500, 500)