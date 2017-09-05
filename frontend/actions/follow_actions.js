import * as FollowingAPIUtil from '../util/following_api_util';
import { receiveSingleUser } from './user_actions';
//thunk actions
export const startFollowing = (follower) => dispatch => {
  return FollowingAPIUtil.createFollowing(follower)
     .then(follower => dispatch(receiveSingleUser(follower)))
}

export const endFollowing = (follower) => dispatch  => {
  return FollowingAPIUtil.deleteFollowing(follower)
    .then(follower => dispatch(receiveSingleUser(follower)))
}
