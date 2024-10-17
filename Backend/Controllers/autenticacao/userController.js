const express = require("express");
const auth = require("../../middlewares/authentication");
const userService = require("../../services/userService");

const userController = express.Router();

// Rota para criar um novo usuário/cliente sem autenticação
userController.post("/cadastroUsuarioNaoAutenticada", async (req, res) => {
  const { nome, email, senha, confirmacaoSenha } = req.body;

  try {
    if (senha !== confirmacaoSenha) {
      return res.status(400).json({ mensagem: "Senha e confirmação de senha não coincidem!" });
    }

    const usuarioExistente = await userService.userExists({ nome, email });
    if (usuarioExistente) {
      return res.status(400).json({ mensagem: "Nome de usuário ou email já existe!" });
    }

    await userService.createUser({
      nome,
      crm,
      email,
      senha,
      funcao: "MEDICO",
      statusAtual: "INATIVO"
    });

    return res.status(201).json({ mensagem: "Usuário criado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

// Rota autenticada para listar todos os usuários
userController.get("/listarUsuarios", auth, async (req, res) => {
  try {
    const usuarios = await userService.listUsers();
    return res.status(200).json(usuarios);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

// Rota para obter usuários agrupados por função
userController.get("/usuariosPorFuncao", auth, async (req, res) => {
  try {
    const usuariosPorFuncao = await userService.getUsersByRole();
    const totalUsuarios = await userService.countUsers();
    return res.status(200).json({ usuariosPorFuncao, totalUsuarios });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

// Rota para obter um usuário específico pelo email
userController.get("/:email", auth, async (req, res) => {
  try {
    const user = await userService.getUserByEmail(req.params.email);
    if (!user) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

// Rota para deletar um usuário específico pelo ID
userController.delete("/:idUser", auth, async (req, res) => {
  try {
    const user = await userService.deleteUserById(req.params.idUser);
    if (!user) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }
    return res.status(200).json({ mensagem: "Usuário deletado com sucesso" });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

// Rota autenticada para cadastro de usuários
userController.post("/cadastroUsuarioAutenticada", auth, async (req, res) => {
  const { nome, email, senha, confirmacaoSenha, funcao } = req.body;

  try {
    if (senha !== confirmacaoSenha) {
      return res.status(400).json({ mensagem: "Senha e confirmação de senha não coincidem!" });
    }

    if (!["MEDICO", "ADM"].includes(funcao)) {
      return res.status(400).json({ mensagem: "Função inválida! Deve ser 'MEDICO' ou 'ADM'." });
    }

    const usuarioExistente = await userService.userExists({ nome, email });
    if (usuarioExistente) {
      return res.status(400).json({ mensagem: "Nome de usuário ou email já existe!" });
    }

    await userService.createUser({
      nome,
      email,
      crm,
      senha,
      funcao,
      statusAtual: "ATIVO"
    });

    return res.status(201).json({ mensagem: "Usuário criado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

// Rota para editar usuário
userController.put("/editarUsuario/:idUser", auth, async (req, res) => {
  const { nome, email, funcao } = req.body;

  try {
    const user = await userService.updateUser(req.params.idUser, { nome, email, funcao });
    if (!user) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    return res.status(200).json({ mensagem: "Usuário atualizado com sucesso" });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

module.exports = userController;