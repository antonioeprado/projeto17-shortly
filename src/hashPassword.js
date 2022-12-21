import bcrypt from "bcrypt";

export const Hash = {
	encrypt: (password) => bcrypt.hashSync(password, 10),
	decrypt: (password, hash) => bcrypt.compareSync(password, hash),
};
