import React from 'react';

function LayoutPage(props) {
  return (
    <div>
      <div className="container">
        <div className="profile-wrap">
          <div className="profile">
            {props.user ? (
              <>
                <div className="user-name">
                  '안녕하세요! ' + {props.user.nick} + '님'
                </div>
                <div className="half">
                  <div>팔로잉</div>
                  <div className="count following-count">
                    {props.followingCount}
                  </div>
                </div>
                <div className="half">
                  <div>팔로워</div>
                  <div className="count follower-count">
                    {props.followerCount}
                  </div>
                </div>
                <input id="my-id" type="hidden" value={props.user.id} />
                <a id="my-profile" href="/profile" className="btn">
                  내 프로필
                </a>
                <a id="logout" href="/auth/logout" className="btn">
                  로그아웃
                </a>
              </>
            ) : (
              <form id="login-form" action="/auth/login" method="post">
                <div className="input-group">
                  <label htmlFor="email">이메일</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    autoFocus
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="password">비밀번호</label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    required
                  />
                </div>
                <a id="join" href="/join" className="btn">
                  회원가입
                </a>
                <button id="login" type="submit" className="btn">
                  로그인
                </button>
                <a id="kakao" href="/auth/kakao" className="btn">
                  카카오톡
                </a>
              </form>
            )}
          </div>
          <footer>
            Made by&nbsp;
            <a href="https://www.zerocho.com" target="_blank">
              ZeroCho
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default LayoutPage;
