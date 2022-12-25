class Boock {
  static boockDB = [
    {
      id: 1,
      NameBoock: "Program",
      NameAfter: "Ivan Petrovich",
      NumOfPages: 100,
      Description:
        "This book will help you understand programming, even if you have never done it before. ",
    },
    {
      id: 2,
      nameBoock: "Test",
      nameAfter: "Test Testenco",
      numOfPages: 120,
      description:
        "This book will help you understand programming, even if you have never done it before. ",
    },
  ];

  static async findAll() {
    if (this.boockDB) {
      return this.boockDB;
    }
    throw new Error();
  }

  static async findOne(boockId) {
    const findBoock = this.boockDB.find(
      (boock) => boock.id === Number(boockId)
    );
    if (findBoock) {
      return findBoock;
    }
    throw new Error();
  }

  static async create(newData) {
    const validateBoock = this.boockDB.find(
      (boock) =>
        boock.NameBoock === newData.NameBoock &&
        boock.NumOfPages === Number(newData.NumOfPages)
    );
    if (validateBoock) {
      throw new Error();
    }
    const newBoock = {
      id: Date.now(),
      ...newData,
    };
    this.boockDB.push(newBoock);
    return newBoock;
  }

  static async update(newData, boockId) {
    const foundBoock = await Boock.findOne(boockId);

    if (foundBoock) {
      Object.assign(foundBoock, newData);
      return foundBoock;
    }
    throw new Error();
  }

  static async delete(boockId) {
    const foundBoock = await Boock.findOne(boockId);
    if (foundBoock) {
      this.boockDB = this.boockDB.filter(
        (boock) => boock.id !== Number(boockId)
      );
      return foundBoock;
    }
    throw new Error();
  }
}

module.exports = Boock;
