import{L as m,H as p,d as c,ac as i,r as u,M as e,k as l}from"./entry.3ZwGVE3T.js";import{u as d}from"./asyncData.BlDZWwMF.js";import f from"./Ellipsis.XoulU4MR.js";import y from"./ComponentPlaygroundData.UUZeFHYC.js";import"./TabsHeader.zi_XkHyr.js";import"./ComponentPlaygroundProps.fQaUqunb.js";import"./ProseH4.C-KBk-jv.js";import"./ProseCodeInline.ecSx8wej.js";import"./Badge.7zXwoGuF.js";import"./MDCSlot.8L8umZ5T.js";import"./slot.fitz_R4c.js";import"./ProseP.8wzuYgzT.js";import"./index.cIpIdqzC.js";import"./ComponentPlaygroundSlots.vue._6ryLl-7.js";import"./ComponentPlaygroundTokens.vue.csDJ8ylY.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=u({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),E=l(h,[["__scopeId","data-v-b38c4719"]]);export{E as default};