import{i as e,j as t,L as a}from"./index-6f05ca50.js";import{P as s}from"./index-c335aa24.js";const o=e.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  gap: 20px;
  margin: 0;
  padding: 0 0 60px;
  list-style: none;

  li {
    border-radius: 5px;
    text-align: left;
    transition: transform 0.2s linear;

    &:hover {
      transform: scale(1.01);
    }
  }

  a {
    &:hover {
      text-decoration: underline;
      color: #fff;
    }
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 5px;
  }

  .title {
    max-width: 220px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin: 0;
    margin-top: 10px;
    padding: 0 10px;
    font-size: 14px;
    color: #fff;
  }
`,p=({movies:r})=>{if(r!==void 0)return t.jsx(t.Fragment,{children:!!r.length&&t.jsx(o,{children:r.map(i=>t.jsx("li",{children:t.jsxs(a,{to:`/movies/${i.id}`,children:[t.jsx("img",{src:i.poster_path?`https://image.tmdb.org/t/p/w342/${i.poster_path}`:"",alt:"",width:"300",height:"340"}),t.jsx("h4",{className:"title",title:i.title,children:i.title})]})},i.id))})})};p.propTypes={movies:s.array};export{p as M};
