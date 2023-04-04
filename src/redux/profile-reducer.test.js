import {profileReducer, addPostActionCreator, deletePost} from './profile-reducer';

let state = {
  postsData: [
    {id: "1", message: "First post", likescount: "0"},
    {id: "2", message: "Second pos", likescount: "15"},
  ]
};

test('added a post', () => {
  let action = addPostActionCreator("New post");
  let newState = profileReducer(state, action);

  expect(newState.postsData.length).toBeInTheDocument(3);
});

test('check a new post message', () => {
  let action = addPostActionCreator("New post");
  let newState = profileReducer(state, action);

  expect(newState.postsData[2].message).toBeInTheDocument("New post");
});

test('after deleting a post length of post should be decrement', () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);

  expect(newState.postsData.length).toBeInTheDocument(1);
});

test('after deleting a post with incorrect id length of post should not be decrement', () => {
  let action = deletePost(1111111111111111);
  let newState = profileReducer(state, action);

  expect(newState.postsData.length).toBeInTheDocument(1);
});


 