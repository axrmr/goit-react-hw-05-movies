import{i as x,j as e,r as c}from"./index-6f05ca50.js";import{M as d}from"./MovieList-0058312c.js";import{P as m}from"./index-c335aa24.js";import{u as l,M as u}from"./MoviesService-701be55f.js";const g=x.form`
  display: flex;
  max-width: 400px;
  width: 100%;
  height: 40px;
  margin: 10px 0 40px;

  @media (max-width: 320px) {
    flex-wrap: wrap;
    max-width: 280px;
  }

  input {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    padding: 0 20px;
    font-size: 14px;
    border: 2px solid lightgray;
    border-radius: 5px;

    &:focus {
      border: 2px solid lightgray;
      outline: 2px solid lightgray;
    }
  }

  button {
    width: 100%;

    @media (min-width: 320px) {
      height: 35px;
      width: 120px;
      height: 100%;
      margin-left: 5px;
      padding: 5px 0;
      font-size: 14px;
    }
  }
`,a=({onSubmit:r})=>e.jsxs(g,{onSubmit:r,children:[e.jsx("input",{type:"text",name:"search",placeholder:"Search movie"}),e.jsx("button",{className:"searh-btn",children:"Search"})]});a.propTypes={onSubmit:m.func};const j=()=>{const[r,o]=c.useState([]),[h,n,i]=l(async t=>{const s=await u.search(t);o(s.data.results)}),p=t=>{t.preventDefault();const s=t.target.search.value;h(s),t.target.reset()};return e.jsxs(e.Fragment,{children:[e.jsx(a,{onSubmit:p}),i&&e.jsx("h3",{children:i}),n?e.jsx("h3",{children:"Searching..."}):e.jsx(d,{movies:r})]})};export{j as default};
