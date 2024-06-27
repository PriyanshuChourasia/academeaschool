import{u as o,j as s}from"./index-Z5ZnsGRE.js";import{G as i}from"./GalleryGithubData-lLpzQgno.js";const a=()=>{let{imageId:l}=o();return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"py-16",children:[s.jsx("div",{className:"pb-16",children:s.jsx("h1",{className:"text-center font-semibold underline underline-offset-2 text-6xl",children:i.filter(e=>e.id==l).map(e=>e.name)})}),s.jsx("div",{className:`flex justify-center  gap-10 flex-wrap  overflow-hidden mobile-xs:flex mobile-xs:flex-col
             mobile-xs:justify-center mobile-xs:items-center mobile-xs:gap-4
            mobile-sm:flex-col mobile-sm:justify-center mobile-sm:items-center mobile-sm:gap-4
             mobile-md:flex-wrap mobile-md:gap-6  mobile-md:justify-center mobile-md:items-center
            desktop-xs:flex-wrap desktop-xs:gap-6 desktop-xs:justify-center desktop-xs:items-center`,children:i.filter(e=>e.parentId==l||e.id==l).map((e,m)=>s.jsx("div",{className:`h-64 cursor-pointer shadow-lg hover:shadow-2xl  duration-300 ease-out w-96 mobile-xs:h-40 rounded-2xl
                        px-1 py-1 bg-[#e7b749]
                         mobile-xs:w-80
                           mobile-sm:h-44 mobile-sm:w-80 mobile-md:h-56 mobile-md:w-96 desktop-xs:h-60 desktop-xs:w-96 border
                            overflow-hidden border-black`,children:s.jsx("img",{src:e.image,alt:"",className:"h-full w-full rounded-xl"})},m))})]})})};export{a as default};
