import React, { useRef, useState } from 'react';
import axios from 'axios';

function MainPage(props) {
  return (
    <div className="timeline">
      {props.user ? (
        <div>
          <form
            id="twit-form"
            action="/post"
            method="post"
            enctype="multipart/form-data"
          >
            <div className="input-group">
              <textarea id="twit" name="content" maxlength="140"></textarea>
            </div>
            <div className="img-preview">
              <img
                id="img-preview"
                src=""
                style={{ display: 'none' }}
                width="250"
                alt="미리보기"
              />
              <input id="img-url" type="hidden" name="url" />
            </div>
            <div>
              <label id="img-label" for="img">
                사진 업로드
              </label>
              <input id="img" type="file" accept="image/*" />
              <button id="twit-btn" type="submit" className="btn">
                짹짹
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="twits">
          <form id="hashtag-form" action="/hashtag">
            <input type="text" name="hashtag" placeholder="태그 검색" />
            <button className="btn">검색</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default MainPage;
