import {RootState} from "../reduxStore";

export const getUsers = (state: RootState) => state.usersPage.users
export const getPage = (state: RootState) => state.usersPage.page
export const getSize = (state: RootState) => state.usersPage.size
export const getTotalCount = (state: RootState) => state.usersPage.totalCount
export const getIsLoading = (state: RootState) => state.usersPage.isLoading
export const getFollowingButtonDisabled = (state: RootState) => state.usersPage.followingButtonDisabled