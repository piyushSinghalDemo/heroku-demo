import svgPanZoom from "svg-pan-zoom/src/svg-pan-zoom.js"

export function getPanandZoomComponent(paper,currentScale,syncComponent){
	return svgPanZoom(paper.svg,{
        zoomEnabled: false,
        zoomScaleSensitivity: 0.1,
        panEnabled: false,
        controlIconsEnabled: false,
        dblClickZoomEnabled:false,
        fit: false,
        center: false,
        scroll:true,
        onZoom: function (scale) {
        currentScale = scale;
        },
        beforePan: function (oldpan, newpan) {
        },
        onPan: function(){
        	// syncComponent.pan(point)
        }
    });
}

<<<<<<< HEAD
export function performZoomActions(that,action,paper_container,lens){
		var current_scall = that.main_paper.scale()
		if(!paper_container)
			var paper_container = document.getElementById('paper')
		if(!lens)
			var lens = document.getElementById('lens')
=======
export function performZoomActions(that,action){
		debugger;
		var current_scall = that.main_paper.scale()
		var paper_container = document.getElementById('paper')
		var lens = document.getElementById('lens')
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
		if(action==='zoom_in')
				zoom_in(that,paper_container,lens)
		else if(action==='zoom_out')
			zoom_out(that,paper_container,lens)

		else
			zoom_reset(that,paper_container,lens)
	}

function zoom_in(that,paper_container,lens){
		that.main_paper_scale +=0.1
		that.lens_scale -=0.06
		if(that.main_paper_scale <= 1.8){
			paper_container.style.transform = "scale("+that.main_paper_scale+")"
			lens.style.transform = "scale("+that.lens_scale+")"
		}
	}

function zoom_out(that,paper_container,lens){
		that.main_paper_scale -=0.1
		that.lens_scale +=0.06
		if(that.main_paper_scale >= 0.2){
			paper_container.style.transform = "scale("+that.main_paper_scale+")"
			lens.style.transform = "scale("+that.lens_scale+")"
		}
	}


function zoom_reset(that,paper_container,lens){
		paper_container.style.transform = "scale(1)"
		lens.style.transform = "scale(1)"
		that.main_paper_scale = 1
		that.lens_scale =1
	}


export function performPanningActions(panzoompaperlist,action){
		for (var i = 0;i<panzoompaperlist.length;i++) {
			if(action ===  'enable')
				panzoompaperlist[i].enablePan();
			else if (action === 'disable')
				panzoompaperlist[i].disablePan()
			else
				panzoompaperlist[i].resetPan()
		}
	}