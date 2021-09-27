import React, { useEffect } from 'react';
import { getPost } from '../modules/sample';
import { connect } from 'react-redux';

function SampleContainer({ post, getPost }) {
  console.log('post', post);
  useEffect(() => {
    // useEffect 에 파라미터로 넣는 함수는 async 로 할 수 없기 때문에
    // 그 내부에서 async 함수를 선언하고 호출해줍니다.
    const fn = async () => {
      try {
        await getPost('/');
      } catch (e) {
        console.log(e); // 에러 조회
      }
    };
    fn();
  }, [getPost]);
  return <div>{post}</div>;
}

export default connect(
  ({ sample, loading }) => ({
    post: sample.post,
  }),
  {
    getPost,
  },
)(SampleContainer);
