import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{u as w}from"./index.CMJGZib5.js";import{r as u}from"./index.DMVOjPfi.js";import{a as y,$ as j}from"./tocStore.C80rUTY_.js";import{g as v,I as N}from"./Image.--SyLauW.js";import{g as D}from"./urlUtils.fyQNH268.js";import"./common.B7jq_3A0.js";function $({title:s,published_at:t,page_type:r,page_type_label:x,image_id:a,slug:i,bg_page_type:m,text_page_type:f,index:l=0}){let n=null;if(t instanceof Date)n=new Date(t);else if(typeof t=="number"||typeof t=="bigint")n=new Date(t);else if(typeof t=="string"){const p=new Date(t);isNaN(p.getTime())||(n=p)}const o=n?n.toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}):null;let d=!1;n&&(d=(new Date().getTime()-n.getTime())/(1e3*60*60*24)<=3);const g=v(a),c=D().replaceAll("/",""),h=c?`${c}/${r}/${i}`:`${r}/${i}`;return e.jsxs("a",{href:h,className:`
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
        `,children:[e.jsx(N,{urls:r==="blog"?{}:g?.urls,src:r==="blog"?a??"":"",alt:s,imageId:r!=="blog"?a??void 0:void 0,imageEditable:!0,defaultSrc:"shared/vendor/fallbacks/placeholder-3-2.png",loading:l<2?"eager":"lazy",decoding:l<2?"sync":"async",fetchPriority:l<2?"high":"auto",className:"absolute inset-0 block w-full h-full object-cover border border-brand-neutral-200 rounded-xl"}),d&&e.jsx("div",{className:`
              absolute left-3 bottom-3
              rounded-full border
              bg-brand-neutral-700/40 border-brand-neutral-400/60 backdrop-blur
              text-brand-white text-sm font-light
              px-2 py-1
              flex items-center justify-center
            `,children:"Recently Published"})]}),e.jsxs("div",{className:"flex flex-col p-2 sm:p-3 gap-3",children:[e.jsx("h2",{className:"font-heading text-base font-medium text-brand-neutral-900 leading-snug line-clamp-2",children:s}),e.jsxs("div",{className:"flex flex-wrap gap-1 text-xs",children:[o&&e.jsx("span",{className:"rounded-md px-2 py-1 text-brand-neutral-900 bg-brand-neutral-100",children:o}),e.jsx("span",{className:`
              rounded-md px-2 py-1 text-xs
              ${m[r]??""}
              ${f[r]??""}
            `,children:x??r.charAt(0).toUpperCase()+r.slice(1)})]})]})]})}function R({allPages:s,label_config:t}){const[r,x]=u.useState(!1),a={blog:"text-brand-success",service:"text-brand-error-dark",category:"text-brand-info-dark"},i={blog:"bg-brand-success-tint",service:"bg-brand-error-tint",category:"bg-brand-info-tint"};u.useEffect(()=>{x(!0),y(s)},[]);const{filteredPages:m}=w(j),f=r?m:s;return e.jsx("section",{className:"w-full flex items-center justify-center",children:e.jsx("div",{className:"grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:f.map(({title:l,published_at:n,page_type:o,image_id:d,slug:g,id:b},c)=>e.jsx($,{title:l,published_at:n,page_type:o,page_type_label:t?.[o]?.page_type_label,image_id:d,slug:g,bg_page_type:i,text_page_type:a,index:c},b))})})}export{R as default};
