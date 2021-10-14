debugDraw = ((docEl)=> {
    let svgid = "qowujdo8whqd"
    function renderSVG(x,y,w,h){
        let svgel = docEl.querySelector(`#${svgid}`)
        if (svgel !== null){
            docEl.removeChild(svgel)
        }else{
            console.log("wtf", svgel)
        }

        let bounds = document.body.getBoundingClientRect()//docEl.getBoundingClientRect()

        let innerSVG = `
        <!-- <rect x="0" y="0" width="${bounds.width}" height="${bounds.height}" fill="transparent"/> -->
        
        <rect x="${x + window.scrollX}" y="${y + window.scrollY}" width="${w}" height="${h}" stroke-width="5" stroke="orange" fill="#044B94" fill-opacity="0.4" />
        `
        // <rect x="${x}" y="${y}" width="${w}" height="${h}" stroke-width="5" stroke="orange" fill="#044B94" fill-opacity="0.4" />
        let svgdoc = makeSvg(innerSVG, bounds.width, bounds.height)
        docEl.appendChild(document.importNode(svgdoc, true))
    }

    function makeSvg(innerSVG, width, height){
        let svgdoc = new DOMParser().parseFromString(
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

    function debugDraw(target){
        let {x, y, width, height} = target.getBoundingClientRect()
        console.log(x, y, width, height)
        renderSVG(x, y, width, height)
    }

    return debugDraw
})(document.documentElement)

debugDraw($0)
