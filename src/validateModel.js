import { userSignUpModel, userSignInModel } from "./models/user.models.js";
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
			case "signin":
				this.model = userSignInModel;
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
		const column = this.obj.name ? "Username" : "Email";
		const result = await this._connection.query(
			`SELECT * FROM users WHERE ${column}=$1`,
			[this.obj.name || this.obj.email]
		);
		if (result.rows.length !== 0) {
			return true;
		}
		return false;
	}
}
