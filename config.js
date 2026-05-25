const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '8845234602:AAHBj2FZppzFugiTkhFfwOB8lgPhd5-NV3c',
  id: isNaN(parsedId) ? 6595438828 : parsedId // replace 12345.. with your telegram chat id
};
