import {
  NavLink, useParams,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom"

const posts = [
  { id: 1, title: 'React', content: 'React Tutorial' },
  { id: 2, title: 'Vue', content: 'Vue.js Tutorial' },
  { id: 3, title: 'Laravel', content: 'Laravel Tutorail' },
]


function Posts ( props ) {

  // propsで受け取れる内容は、useXXXで取得可能
  console.log( useRouteMatch() );
  console.log( useLocation() );
  console.log( useHistory() );

  const { id } = useParams() // string型でparamsが返る
  //const id = Number( props.match.params.id )
  const post = posts.find( ( post ) => post.id === Number( id ) ) // find 条件に一致する内容を返す
  return (
    <div>
      <h1>
        Posts page { props.match.params.id }</h1>
      <ul>
        { posts.map( ( { id, title } ) => ( // {か(をよく間違えるので注意する
          < li key={ id } >
            <NavLink to={ `/posts/${ id }` } >{ title }</NavLink>
          </li>
        ) ) }
      </ul>

      <p>
        { post.id }
        { post.title }
        { post.content }
      </p>
    </div >
  );
}

export default Posts;
