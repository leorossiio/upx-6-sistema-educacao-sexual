const bcryptjs = require("bcryptjs");
const UserModel = require("../models/userModel");
const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");

class UserService {
  constructor() {
    this.dataAtual = new Date();
    const offsetBrasil = -3;
    this.dataAtualBrasil = new Date(this.dataAtual.getTime() - offsetBrasil * 60 * 60 * 1000);
  }

  generateId() {
    const uuid = uuidv4();
    const hash = crypto.createHash('sha256' ).update(uuid).digest('hex');
    return hash.slice(0, 24);
  }

  async createUser({ nome,crm, email, senha, funcao, statusAtual }) {
    const senhaEncrypt = await bcryptjs.hash(senha, 10);
    const idUser = this.generateId();
    const user = {
      idUser,
      nome,
      crm,
      email,
      senha: senhaEncrypt,
      funcao,
      dataCriacao: this.dataAtualBrasil,
      statusAtual
    };
    return UserModel.create(user);
  }

  async userExists({ nome, email }) {
    return UserModel.findOne({ $or: [{ nome }, { email }] });
  }

  async listUsers() {
    return UserModel.find();
  }

  async getUsersByRole() {
    return UserModel.aggregate([
      {
        $group: {
          _id: "$funcao",
          total: { $sum: 1 },
        },
      },
    ]);
  }

  async countUsers() {
    return UserModel.countDocuments();
  }

  async getUserByEmail(email) {
    return UserModel.findOne({ email });
  }

  async deleteUserById(idUser) {
    return UserModel.findOneAndDelete({ idUser });
  }

  async updateUser(idUser, updates) {
    const user = await UserModel.findOne({ idUser });
    if (user) {
      Object.assign(user, updates);
      await user.save();
    }
    return user;
  }
}

module.exports = new UserService();