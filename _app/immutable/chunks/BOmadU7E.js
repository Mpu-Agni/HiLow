var e=e=>e;function t(e){let t=e-1;return t*t*t+1}function n(t,{delay:n=0,duration:r=400,easing:i=e}={}){let a=+getComputedStyle(t).opacity;return{delay:n,duration:r,easing:i,css:e=>`opacity: ${e*a}`}}function r(e,{delay:n=0,duration:r=400,easing:i=t,start:a=0,opacity:o=0}={}){let s=getComputedStyle(e),c=+s.opacity,l=s.transform===`none`?``:s.transform,u=1-a,d=c*(1-o);return{delay:n,duration:r,easing:i,css:(e,t)=>`
			transform: ${l} scale(${1-u*t});
			opacity: ${c-d*t}
		`}}export{r as n,n as t};