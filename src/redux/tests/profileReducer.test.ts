import {
    addPost,
    deletePost,
    initialProfileInfo,
    PostType,
    profileReducer,
    ProfileResponceType
} from "../profileReducer";


const startState = {
    postsData: [
        {id: 1, text: 'My first post!', button: 'like'},
        {id: 2, text: 'My second post!', button: 'dislike'},
    ] as PostType[],
    profileInfo: initialProfileInfo as ProfileResponceType,
    status: ''
}
test('new post should be added', () => {

    const action = addPost('hello')

    let newState = profileReducer(startState, action)

    expect(newState.postsData.length).toBe(3)

})
test('new message should be correct', () => {

    const action = addPost('hello')

    let newState = profileReducer(startState, action)

    expect(newState.postsData[0].text).toBe('hello')

})

test('length after deleting should be decremented', () => {

    const action = deletePost(1)

    let newState = profileReducer(startState, action)

    expect(newState.postsData.length).toBe(1)

})