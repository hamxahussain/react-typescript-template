import { makeObservable, observable, action } from "mobx";
import { v4 as uuid4 } from "uuid";

export type typeNotify = "info" | "warning" | "error" | "success"
export const notify = new (class {
	constructor() {
		makeObservable(this, {
			notifications: observable,
			push: action,
			remove: action,
		});
	}

	notifications: { id?: string, type: typeNotify, message: string }[] = [];
  
	push(type: typeNotify, message: string) {
		this.notifications = [
			...this.notifications,
			{ id: uuid4(), type, message },
		];
  }
  
	remove(id?:string | number) {
		this.notifications = this.notifications.filter(
			(item) => item.id !== id
		);
	}
})();
