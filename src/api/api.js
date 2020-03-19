import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "26f8766b-034d-4092-b8b3-79a879ee6969"
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

export const userAPI = {
  getUsers({ currentPage, pageSize }) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  },

  follow(userId) {
    return instance.post(`follow/${userId}`, {});
  },

  unfollow(userId) {
    return instance.delete(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    );
  },
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  }
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  }
};
