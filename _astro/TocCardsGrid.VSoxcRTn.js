import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{u as j}from"./index.CMJGZib5.js";import{r as g}from"./index.DMVOjPfi.js";import{a as w,$ as y}from"./tocStore.C80rUTY_.js";import{g as N}from"./urlUtils.BFzPLRD1.js";import{I as v}from"./Image.Br-wCOpR.js";import"./common.CsduWhJT.js";function D({title:a,published_at:t,page_type:r,image_id:n,imageSchema:i,slug:c,bg_page_type:m,text_page_type:b,index:l=0}){let s=null;if(t instanceof Date)s=new Date(t);else if(typeof t=="number"||typeof t=="bigint")s=new Date(t);else if(typeof t=="string"){const p=new Date(t);isNaN(p.getTime())||(s=p)}const d=s?s.toLocaleDateString():null;let x=!1;s&&(x=(new Date().getTime()-s.getTime())/(1e3*60*60*24)<=3);const o=n&&i?.images?i.images[n]:null,f=N().replaceAll("/",""),h=f?`${f}/${r}/${c}`:`${r}/${c}`;return e.jsxs("a",{href:h,className:`
            flex flex-col bg-brand-white rounded-xl border-[1.25px] border-brand-neutral-200
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
        `,children:[o||r==="blog"&&n?e.jsx(v,{urls:r==="blog"?{}:o.urls,src:r==="blog"?n:"",alt:o?.alt_text||a,loading:l<2?"eager":"lazy",decoding:l<2?"sync":"async",fetchPriority:l<2?"high":"auto",className:"absolute inset-0 block w-full h-full object-cover border border-brand-neutral-200 rounded-xl"}):e.jsx("div",{className:"w-full h-full flex items-center justify-center text-xs text-brand-neutral-400",children:"No image"}),x&&e.jsx("div",{className:`
              absolute left-3 bottom-3
              rounded-full border
              bg-brand-neutral-700/40 border-brand-neutral-400/60 backdrop-blur
              text-brand-white text-sm font-light
              px-2 py-1
              flex items-center justify-center
            `,children:"Recently Published"})]}),e.jsxs("div",{className:"flex flex-col p-2 sm:p-3 gap-3",children:[e.jsx("h2",{className:"font-family-body text-base font-medium text-brand-neutral-900 leading-snug line-clamp-2",children:a}),e.jsxs("div",{className:"flex flex-wrap gap-1 text-xs",children:[d&&e.jsx("span",{className:"rounded-md px-2 py-1 text-brand-neutral-900 bg-brand-neutral-100",children:d}),e.jsx("span",{className:`
              rounded-md px-2 py-1 text-xs
              ${m[r]??""}
              ${b[r]??""}
            `,children:r.charAt(0).toUpperCase()+r.slice(1)})]})]})]})}function R({allPages:a,imageSchema:t}){const[r,n]=g.useState(!1),i={blog:"text-brand-success",service:"text-brand-error-dark",category:"text-brand-info-dark"},c={blog:"bg-brand-success-tint",service:"bg-brand-error-tint",category:"bg-brand-info-tint"};g.useEffect(()=>{n(!0),w(a)},[]);const{filteredPages:m}=j(y),b=r?m:a;return e.jsx("section",{className:"w-full flex items-center justify-center",children:e.jsx("div",{className:"grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:b.map(({title:l,published_at:s,page_type:d,image_id:x,slug:o,id:u},f)=>e.jsx(D,{title:l,published_at:s,page_type:d,image_id:x,imageSchema:t,slug:o,bg_page_type:c,text_page_type:i,index:f},u))})})}export{R as default};
