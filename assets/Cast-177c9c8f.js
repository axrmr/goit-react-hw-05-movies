import{i as o,r,a as m,j as e}from"./index-6f05ca50.js";import{u as d,M as x}from"./MoviesService-701be55f.js";const l=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 5px;
  padding-bottom: 80px;
  list-style: none;

  img {
    width: 210px;
    height: 280px;
    border-radius: 5px;
  }

  .name {
    margin: 5px 0 5px;
  }

  .character {
    max-width: 210px;
    margin: 0 0 20px;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.01em;
    line-height: 1.5;
  }
`,u=()=>{const[i,n]=r.useState([]),{movieId:a}=m(),[c,h,s]=d(async t=>{const p=await x.fetchCast(t);n(p.data.cast)});return r.useEffect(()=>{c(a)},[a]),e.jsxs(e.Fragment,{children:[s&&e.jsx("h4",{children:s}),h&&e.jsx("h3",{children:"Loading..."}),e.jsx(l,{children:i.slice(0,10).map(t=>e.jsxs("li",{children:[e.jsx("img",{src:t.profile_path?`https://image.tmdb.org/t/p/w500/${t.profile_path}`:"",alt:"",width:"300",height:"340"}),e.jsx("h4",{className:"name",children:t.name}),t.character&&e.jsxs("h4",{className:"character",children:["Character - ",t.character]})]},t.id))})]})};export{u as default};
