import{d as r,ab as l,H as u,M as n,a4 as p,k as m}from"./entry.fgMERMRx.js";import{u as f,f as _,_ as d}from"./MDCSlot.CYfdHEb3.js";const y=()=>({unwrap:f,flatUnwrap:_}),h={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},w=r({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:a=>["primary","info","success","warning","danger"].includes(a)}},setup(a){const o=l(),{flatUnwrap:t,unwrap:s}=y(),c=u(()=>a.icon||h[a.type]);return()=>{const i=t((o.default&&o.default())??[],["ul"]).map(e=>s(e,["li"]));return n("ul",i.map(e=>n("li",[n("span",{class:`list-icon ${a.type}`},n(p,{name:c.value,class:"icon"})),n("span",n(d,{use:()=>e}))])))}}}),k=m(w,[["__scopeId","data-v-10ab1080"]]);export{k as default};