import{i as t,j as e,N as m,u as h,r as s,a as f,O as v}from"./index-6f05ca50.js";import{P as j}from"./index-c335aa24.js";import{u,M as b}from"./MoviesService-701be55f.js";const w=t.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 15px 0 10px;
  color: #fff;
  background-color: #1a1a1a;
`;function l({children:i,...a}){return e.jsxs(w,{...a,children:["← ",i]})}l.propTypes={children:j.any};const r=t(m)`
  display: inline-block;
  margin-bottom: 40px;
  font-size: 22px;

  & + & {
    margin-left: 20px;
  }

  &.active {
    font-size: 25px;
    color: orange;
  }
`,k=t.div`
  display: flex;
  gap: 30px;
  margin-bottom: 60px;

  .img {
    border-radius: 5px;
  }

  .info-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .title {
    display: inline-block;
    padding: 2px 15px;
    margin: 0 0 30px;
    border: 2px solid #fff;
    border-radius: 12px;
  }

  .overview-title {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 10px;
  }

  .overview-text {
    margin: 0 0 40px;
    width: 600px;
    line-height: 1.7;
  }

  .release-date,
  .rating,
  .lang {
    margin-top: 0;
    font-weight: 700;

    span {
      margin-left: 5px;
      font-weight: normal;
    }
  }

  .release-date {
    font-size: 18px;

    span {
      font-size: 16px;
    }
  }

  .rating {
    display: inline-block;
    margin-bottom: 15px;
  }

  .lang {
  }
`,L=()=>{const i=h(),[a,o]=s.useState({}),{movieId:p}=f(),[c,d,n]=u(async()=>{const g=await b.fetchDetails(p);o(g.data)}),x=()=>{i(-1)};return s.useEffect(()=>{c()},[]),e.jsxs(e.Fragment,{children:[n&&e.jsx("h4",{children:n}),d&&e.jsx("h4",{children:"Loading..."}),e.jsx(l,{onClick:x,children:"Go back"}),e.jsxs(k,{children:[e.jsx("img",{className:"img",src:a.poster_path?`https://image.tmdb.org/t/p/w500/${a.poster_path}`:"",alt:a.title,width:"320",height:"430"}),e.jsxs("div",{className:"info-wrapper",children:[e.jsx("h2",{className:"title",children:a.title}),e.jsx("h3",{className:"overview-title",children:"Overview"}),e.jsx("p",{className:"overview-text",children:a.overview}),e.jsxs("p",{className:"release-date",children:["Release date:",e.jsxs("span",{children:[" ",a.release_date]})]}),e.jsxs("p",{className:"rating",children:["Rating: ",e.jsx("span",{children:`${a.vote_average}`.slice(0,3)})]}),e.jsxs("p",{className:"lang",children:["Original language: ",e.jsx("span",{children:a.original_language})]})]})]}),e.jsx(r,{to:"cast",children:"Cast"}),e.jsx(r,{to:"reviews",children:"Reviews"}),e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"...Loading"}),children:e.jsx(v,{})})]})};export{L as default};
