import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{u as j}from"./index.CMJGZib5.js";import{r as b}from"./index.DMVOjPfi.js";import{a as w,$ as y}from"./tocStore.C80rUTY_.js";import{g as N}from"./urlUtils.Cxs70Fgc.js";import{I as v}from"./Image.Br-wCOpR.js";function D({title:l,published_at:s,page_type:t,image_id:n,imageSchema:i,slug:x,bg_page_type:m,text_page_type:p,index:a=0}){let r=null;if(s instanceof Date)r=new Date(s);else if(typeof s=="number"||typeof s=="bigint")r=new Date(s);else if(typeof s=="string"){const u=new Date(s);isNaN(u.getTime())||(r=u)}const c=r?r.toLocaleDateString():null;let d=!1;r&&(d=(new Date().getTime()-r.getTime())/(1e3*60*60*24)<=3);const o=n&&i?.images?i.images[n]:null,f=N().replaceAll("/",""),h=f?`${f}/${t}/${x}`:`${t}/${x}`;return e.jsxs("a",{href:h,className:`
            flex flex-col bg-white rounded-xl border-[1.25px] border-neutral-200
            overflow-hidden justify-between shadow-s3
            cursor-pointer
            min-[800px]:max-[1024px]:w-[348px]
            min-[800px]:max-[1024px]:h-[420px]
            lg:w-[301px] lg:h-[306px]
            min-[640px]:max-[800px]:w-[254px]
            min-[640px]:max-[800px]:h-[300px]
            hover:border-brand-primary/50
      `,children:[e.jsxs("div",{className:`
          relative overflow-hidden
          flex items-center justify-center
          rounded-xl
          my-1 mx-1 h-[300px] lg:h-[192px] lg:w-[292px]
          min-[500px]:h-[310px]
          min-[640px]:max-[800px]:w-[244px] min-[640px]:max-[800px]:h-[180px]
        `,children:[o||t==="blog"&&n?e.jsx(v,{urls:t==="blog"?{}:o.urls,src:t==="blog"?n:"",alt:o?.alt_text||l,loading:a<2?"eager":"lazy",decoding:a<2?"sync":"async",fetchPriority:a<2?"high":"auto",className:"absolute inset-0 block w-full h-full object-cover border border-neutral-200 rounded-xl"}):e.jsx("div",{className:"w-full h-full flex items-center justify-center text-xs text-neutral-400",children:"No image"}),d&&e.jsx("div",{className:`
              absolute left-3 bottom-3
              rounded-full border
              bg-neutral-700/40 border-neutral-400/60 backdrop-blur
              text-white text-sm font-light
              px-2 py-1
              flex items-center justify-center
            `,children:"Recently Published"})]}),e.jsxs("div",{className:"flex flex-col p-2 sm:p-3 gap-3",children:[e.jsx("h2",{className:"font-family-body text-base font-medium text-neutral-900 leading-snug line-clamp-2",children:l}),e.jsxs("div",{className:"flex flex-wrap gap-1 text-xs",children:[c&&e.jsx("span",{className:"rounded-md px-2 py-1 text-neutral-900 bg-neutral-100",children:c}),e.jsx("span",{className:`
              rounded-md px-2 py-1 text-xs
              ${m[t]??""}
              ${p[t]??""}
            `,children:t.charAt(0).toUpperCase()+t.slice(1)})]})]})]})}function I({allPages:l,imageSchema:s}){const[t,n]=b.useState(!1),i={blog:"text-green-600",service:"text-pink-800",category:"text-blue-800"},x={blog:"bg-green-100",service:"bg-pink-100",category:"bg-blue-100"};b.useEffect(()=>{n(!0),w(l)},[]);const{filteredPages:m}=j(y),p=t?m:l;return e.jsx("section",{className:"w-full flex items-center justify-center",children:e.jsx("div",{className:"grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:p.map(({title:a,published_at:r,page_type:c,image_id:d,slug:o,id:g},f)=>e.jsx(D,{title:a,published_at:r,page_type:c,image_id:d,imageSchema:s,slug:o,bg_page_type:x,text_page_type:i,index:f},g))})})}export{I as default};
