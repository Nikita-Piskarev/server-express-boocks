const yup = require("yup");

const BOOCK_CREATION_SHEMA = yup.object({
  NameBoock: yup.string().min(2).required(),
  NameAfter: yup.string().min(3).required(),
  NumOfPages: yup.number().min(2).required(),
  Description: yup.string().min(20).required(),
});

const BOOCK_UPDATE_SHEMA = yup.object({
  NameBoock: yup.string().min(3),
  NameAfter: yup.string().min(3),
  NumOfPages: yup.number().min(1),
  Description: yup.string().min(20),
});

module.exports.BOOCK_CREATION_SHEMA = BOOCK_CREATION_SHEMA;
module.exports.BOOCK_UPDATE_SHEMA = BOOCK_UPDATE_SHEMA;
