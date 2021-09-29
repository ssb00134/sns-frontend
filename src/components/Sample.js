import React from 'react';

const Sample = ({ post, users, loadingPost, loadingUsers }) => {
  console.log('loadingPost :', loadingPost);
  return (
    <div>
      <section>
        <h1>포스트1213231{post}</h1>
        {loadingPost && '로딩중...'}
        {!loadingPost && post && (
          <div>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
          </div>
        )}
      </section>
      <hr />
      <section>
        <h1>사용자 목록2</h1>
        {loadingUsers && '로딩중...'}
        {!loadingUsers && users && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.username} ({user.email})
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Sample;