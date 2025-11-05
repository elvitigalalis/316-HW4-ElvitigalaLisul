require("dotenv").config({ path: __dirname + "/../../.env" });

class DatabaseManager {
  async connect() {
    throw new Error("connect() not implemented");
  }

  async createUser(_data) {
    throw new Error("createUser() not implemented");
  }
  async getUserByEmail(_email) {
    throw new Error("getUserByEmail() not implemented");
  }
  async getUserById(_id) {
    throw new Error("getUserById() not implemented");
  }
  async updateUser(_id, _data) {
    throw new Error("updateUser() not implemented");
  }

  async createPlaylist(_data) {
    throw new Error("createPlaylist() not implemented");
  }
  async getPlaylistById(_id) {
    throw new Error("getPlaylistById() not implemented");
  }
  async getPlaylistByOwnerEmail(_email) {
    throw new Error("getPlaylistByOwnerEmail() not implemented");
  }
  async updatePlaylist(_id, _data) {
    throw new Error("updatePlaylist() not implemented");
  }
  async deletePlaylist(_id) {
    throw new Error("deletePlaylist() not implemented");
  }
  async getAllPlaylists() {
    throw new Error("getAllPlaylists() not implemented");
  }
}

module.exports = DatabaseManager;
