import{i as l,r,a as m,j as t}from"./index-6f05ca50.js";import{u as d,M as x}from"./MoviesService-701be55f.js";const p=l.ul`
  list-style: none;

  & li:not(:last-child) {
    margin-bottom: 70px;
  }

  .author {
    margin: 0;
    font-weight: normal;
    font-style: italic;
  }

  .text {
    max-width: 500px;
    line-height: 1.7;
  }
`,j=()=>{const[e,o]=r.useState([]),{movieId:a}=m(),[n,h,i]=d(async s=>{const c=await x.fetchReviews(s);o(c.data.results)});return r.useEffect(()=>{n(a)},[a]),t.jsxs(t.Fragment,{children:[h&&t.jsx("h4",{children:"Loading..."}),i&&t.jsx("h4",{children:i}),e.length?t.jsx(p,{children:e.map(s=>t.jsxs("li",{className:"item",children:[t.jsx("img",{src:`https://image.tmdb.org/t/p/w500/${s.author_details.avatar_path}`,alt:s.author,width:"110",height:"110"}),t.jsx("h4",{className:"author",children:s.author}),t.jsx("p",{className:"text",children:s.content})]},s.id))}):t.jsx("p",{children:"There is no reviews for this movie."})]})};export{j as default};
