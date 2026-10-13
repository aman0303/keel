import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{u as p}from"./index.CMJGZib5.js";import{r as u}from"./index.DMVOjPfi.js";import{a as h,$ as y}from"./tocStore.C80rUTY_.js";import{g as j,I as w}from"./Image.TpwaFwHk.js";import{b as v}from"./urlUtils.7kVlak2r.js";function N({title:n,published_at:t,page_type:r,page_type_label:c,image_id:a,slug:f,bg_page_type:m,text_page_type:x,index:o=0}){let s=null;if(t instanceof Date)s=new Date(t);else if(typeof t=="number"||typeof t=="bigint")s=new Date(t);else if(typeof t=="string"){const d=new Date(t);isNaN(d.getTime())||(s=d)}const l=s?s.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):null;let i=!1;s&&(i=(new Date().getTime()-s.getTime())/(1e3*60*60*24)<=3);const g=j(a),b=v(`${r}/${f}`);return e.jsxs("a",{href:b,className:`
            flex flex-col bg-brand-white rounded-xl border-[1.25px] border-brand-neutral-200
            overflow-hidden justify-between shadow-s3
            cursor-pointer
            min-[800px]:max-[1024px]:w-[348px]
            lg:w-[301px]
            min-[640px]:max-[800px]:w-[254px]
            hover:border-brand-primary/50
      `,children:[e.jsxs("div",{className:`
          relative overflow-hidden
          flex items-center justify-center
          rounded-xl
          my-1 mx-1 aspect-[3/2]
        `,children:[e.jsx(w,{urls:r==="blog"?{}:g?.urls,src:r==="blog"?a??"":"",alt:n,imageId:r!=="blog"?a??void 0:void 0,imageEditable:!0,defaultSrc:"shared/vendor/fallbacks/placeholder-3-2.png",loading:o<2?"eager":"lazy",decoding:o<2?"sync":"async",fetchPriority:o<2?"high":"auto",className:"absolute inset-0 block w-full h-full object-cover border border-brand-neutral-200 rounded-xl"}),i&&e.jsx("div",{className:`
              absolute left-3 bottom-3
              rounded-full border
              bg-brand-neutral-700/40 border-brand-neutral-400/60 backdrop-blur
              text-brand-white text-sm font-light
              px-2 py-1
              flex items-center justify-center
            `,children:"Recently Published"})]}),e.jsxs("div",{className:"flex flex-col p-2 sm:p-3 gap-3",children:[e.jsx("h2",{className:"font-heading text-base font-medium text-brand-neutral-900 leading-snug line-clamp-2",children:n}),e.jsxs("div",{className:"flex flex-wrap gap-1 text-xs",children:[l&&e.jsx("span",{className:"rounded-md px-2 py-1 text-brand-neutral-900 bg-brand-neutral-100",children:l}),e.jsx("span",{className:`
              rounded-md px-2 py-1 text-xs
              ${m[r]??""}
              ${x[r]??""}
            `,children:c??r.charAt(0).toUpperCase()+r.slice(1)})]})]})]})}function E({allPages:n,label_config:t}){const[r,c]=u.useState(!1),a={blog:"text-brand-success",service:"text-brand-error-dark",category:"text-brand-info-dark"},f={blog:"bg-brand-success-tint",service:"bg-brand-error-tint",category:"bg-brand-info-tint"};u.useEffect(()=>{c(!0),h(n)},[]);const{filteredPages:m}=p(y),x=r?m:n;return e.jsx("section",{className:"w-full flex items-center justify-center",children:e.jsx("div",{className:"grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:x.map(({title:o,published_at:s,page_type:l,image_id:i,slug:g,id:b},d)=>e.jsx(N,{title:o,published_at:s,page_type:l,page_type_label:t?.[l]?.page_type_label,image_id:i,slug:g,bg_page_type:f,text_page_type:a,index:d},b))})})}export{E as default};
