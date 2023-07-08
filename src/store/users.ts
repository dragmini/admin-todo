import { defineStore } from 'pinia';
import usersData from '@/data/users.json';
import { Task, User, UpdateProfile } from '@/types/user.interface';

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [] as User[],
  }),
  actions: {
    fetchUsers() {
      this.users = usersData.users;
    },
    changeDoneTask(userId: number, taskId: number) {
      const user = this.users.find((user: User) => user.id === userId);
      const task = user?.tasks.find((task: Task) => task.id === taskId)

      if (task) {
        task.is_ready = !task.is_ready
      }
    },
    updateProfileInfo(data: UpdateProfile) {
      const user = this.users.find((user: User) => user.id === data.id);

      if (user) {
        Object.assign(user, data);
      }
    }
  },
});