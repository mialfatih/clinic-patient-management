const STORAGE_KEY = "clinic_patient_data";

const initialUsers = [
  {
    id: 1,
    nama: "Putri",
    usia: 17,
    jenis_kelamin: "P",
    alamat: "Bandung",
    deskripsi: "Sakit kepala"
  },
  {
    id: 2,
    nama: "Bayu",
    usia: 21,
    jenis_kelamin: "L",
    alamat: "Cimahi",
    deskripsi: "Demam"
  },
  {
    id: 3,
    nama: "Bunga",
    usia: 20,
    jenis_kelamin: "P",
    alamat: "Bandung",
    deskripsi: "Sakit mata"
  }
];

class UserService {
  getStoredUsers() {
    const storedUsers = localStorage.getItem(STORAGE_KEY);

    if (!storedUsers) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(initialUsers)
      );

      return initialUsers;
    }

    return JSON.parse(storedUsers);
  }

  saveUsers(users) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(users)
    );
  }

  getUsers() {
    const users = this.getStoredUsers();

    return Promise.resolve({
      data: users
    });
  }

  createUser(user) {
    const users = this.getStoredUsers();

    const nextId =
      users.length > 0
        ? Math.max(...users.map((item) => Number(item.id))) + 1
        : 1;

    const newUser = {
      ...user,
      id: nextId
    };

    const updatedUsers = [
      ...users,
      newUser
    ];

    this.saveUsers(updatedUsers);

    return Promise.resolve({
      data: newUser
    });
  }

  getUserById(userId) {
    const users = this.getStoredUsers();

    const user = users.find(
      (item) => String(item.id) === String(userId)
    );

    return Promise.resolve({
      data: user
    });
  }

  updateUser(user, userId) {
    const users = this.getStoredUsers();

    const updatedUsers = users.map((item) =>
      String(item.id) === String(userId)
        ? {
            ...user,
            id: item.id
          }
        : item
    );

    this.saveUsers(updatedUsers);

    const updatedUser = updatedUsers.find(
      (item) => String(item.id) === String(userId)
    );

    return Promise.resolve({
      data: updatedUser
    });
  }

  deleteUser(userId) {
    const users = this.getStoredUsers();

    const updatedUsers = users.filter(
      (item) => String(item.id) !== String(userId)
    );

    this.saveUsers(updatedUsers);

    return Promise.resolve({
      data: true
    });
  }

  searchUsers(nama) {
    const users = this.getStoredUsers();

    const query = String(nama || "")
      .trim()
      .toLowerCase();

    const filteredUsers = query
      ? users.filter((user) =>
          user.nama
            .toLowerCase()
            .includes(query)
        )
      : users;

    return Promise.resolve({
      data: filteredUsers
    });
  }
}

const userService = new UserService();

export default userService;
