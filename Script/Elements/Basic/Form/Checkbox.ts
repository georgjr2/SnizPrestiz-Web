import { GenericInput } from "./GenericInput";

/**
 * Zaškrtávácí políčko
 *
 * ```html
 * <input type="checkbox">
 * ```
 */
export class Checkbox extends GenericInput{
	protected get Type(): string { return `checkbox`; }

	/**
	 * Je políčko zaškrtnuté
	 */
	public get Checked(): boolean { return this.Root.checked; }
	public set Checked(v: boolean) {
		this.Root.checked = v;
	}

	public constructor(name?: string, value?: string, label?: string, required: boolean = false) {
		super(name, label, required);
		if (value) this.Value = name;
	}
}
