import { userSignUpModel } from "./models/userSignUp.model.js";
import { connection } from "./database/db.js";

export default class ValidateModel {
	_connection = connection;
	constructor(obj, model) {
		this.obj = obj;
		this.model = model;
		this._connection = connection;
		this.init = this.setModel();
	}

	get isUsed() {
		return this.checkIfUsed();
	}

	setModel() {
		switch (this.model) {
			case "users":
				this.model = userSignUpModel;
				this.validation();
				break;
			default:
				break;
		}
	}

	validation() {
		const { error } = this.model.validate(this.obj);
		if (error) {
			const errors = error.details.map((detail) => detail.message);
			this.errors = errors;
			return (this.status = false);
		}
		return (this.status = true);
	}

	async checkIfUsed() {
		const result = await this._connection.query(
			`SELECT * FROM users WHERE Username=$1`,
			[this.obj.name]
		);
		if (result.rows.length !== 0) {
			return true;
		}
		return false;
	}
}
