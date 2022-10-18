import { defineStore } from "pinia";

interface ContactItem {
  id: number;
  name: string;
  email: string;
  phone: string;
  msg: string;
}

export const contactStore = defineStore("contactList", {
  state: () => ({
    contactList: [] as ContactItem[],
    id: 0,
  }),
  actions: {
    addForm(name: string, email: string, phone: string, msg: string,) {
      this.contactList.push({ name, email, phone, msg, id: this.id++ });
      console.log(this.contactList);
    },
  },
});

// https://blog.deepgram.com/build-a-todo-list-with-pinia-and-vue-3/
