const { PrismaClient } = require("@prisma/client");

/**
 * DB로부터 모든 pint를 가져온다.
 */
const getAllPints = async () => {
  const prisma = new PrismaClient();

  return await prisma.pint.findMany();
};

/**
 * DB에 새 pint를 추가한다.
 */
const addNewPint = async (pint) => {
  const prisma = new PrismaClient();

  try {
    const newPint = await prisma.pint.create({
      data: {
        name: pint.name,
        rule: pint.rule,
        url: pint.url,
        createdAt: new Date(),
      },
    });
    return newPint;
  } catch (e) {
    console.error(e);
    return null;
  }
};

/**
 * DB에서 name을 가지는 pint를 삭제한다.
 */
const deletePint = async (name) => {
  const prisma = new PrismaClient();

  try {
    const deleted = await prisma.pint.delete({
      where: {
        name: name,
      },
    });

    return deleted;
  } catch (e) {
    console.error(e);
    return null;
  }
};

module.exports = {
  getAllPints,
  addNewPint,
  deletePint,
};
