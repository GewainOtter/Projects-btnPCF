import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { createRoot, Root } from "react-dom/client";
import Button from "./components/Button";
import "./css/Button.css";
import { Colours } from "./components/Colours";
import "./css/Colours.css";


export class btnPCF implements ComponentFramework.StandardControl<IInputs, IOutputs> {
	root: Root; // Replace 'any' with the correct type if available
	private container!: HTMLDivElement;

	/**
	 * Empty constructor.
	 */
	constructor() {
		// Empty
	}

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
	public init(
		context: ComponentFramework.Context<IInputs>,
		notifyOutputChanged: () => void,
		state: ComponentFramework.Dictionary,
		container: HTMLDivElement,
	): void {
		this.container = container;
		this.container.classList.add("btnPCF");
		// // A basic button with vanilla JS and the DOM
		// const btn = document.createElement('button');
		// btn.textContent = 'Click me!';
		// container.appendChild(btn);

		// // A simple event lister for button clicks
		// btn.addEventListener('click', () => {
		//     alert('Button clicked!');
		// });
		this.root = createRoot(container);
	}

	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void {
		// Add code to update control view
		// Add the code below to create a React root that allows us to render our button component.
		this.root.render(
			Button({
				label: "React Button",

				// onClick: () => alert("React Button Clicked!"),
				onClick: () => {
					this.container.dispatchEvent(new CustomEvent("OnPress", { bubbles: true }));
				}
			}),
		);
		this.container.style.setProperty("--btn-acceptsfocus", String(context.parameters.AcceptsFocus.raw));
		this.container.style.setProperty("--btn-accessiblelabel", String(context.parameters.AccessibleLabel.raw));
		this.container.style.setProperty("--btn-align", String(context.parameters.Align.raw));
		this.container.style.setProperty("--btn-appearance", String(context.parameters.Appearance.raw));
		this.container.style.setProperty("--btn-autodisableonselect", String(context.parameters.AutoDisableOnSelect.raw));
		this.container.style.setProperty("--btn-basepalettecolor", String(context.parameters.BasePaletteColor.raw));
		// this.container.style.setProperty("--btn-bordercolor", String(context.parameters.BorderColor.raw));
		const borderColor = context.parameters.BorderColor.raw;

		if (borderColor) {
			this.container.style.setProperty(
				"--btn-border-color",
				`var(${borderColor})`,
			);
		}
		this.container.style.setProperty("--btn-border-style", String(context.parameters.BorderStyle.raw));
		this.container.style.setProperty("--btn-border-thickness", String(context.parameters.BorderThickness.raw) + "px");
		this.container.style.setProperty("--btn-color", String(context.parameters.Color.raw));
		this.container.style.setProperty("--btn-contentlanguage", String(context.parameters.ContentLanguage.raw));
		this.container.style.setProperty("--btn-disabledbordercolor", String(context.parameters.DisabledBorderColor.raw));
		this.container.style.setProperty("--btn-disabledcolor", String(context.parameters.DisabledColor.raw));
		this.container.style.setProperty("--btn-disabledfill", String(context.parameters.DisabledFill.raw));
		this.container.style.setProperty("--btn-displaymode", String(context.parameters.DisplayMode.raw));
		this.container.style.setProperty("--btn-fill", String(context.parameters.Fill.raw));
		this.container.style.setProperty("--btn-focusedbordercolor", String(context.parameters.FocusedBorderColor.raw));
		this.container.style.setProperty("--btn-focusedborderthickness", String(context.parameters.FocusedBorderThickness.raw));
		this.container.style.setProperty("--btn-font", String(context.parameters.Font.raw));
		this.container.style.setProperty("--btn-fontweight", String(context.parameters.FontWeight.raw));
		this.container.style.setProperty("--btn-height", String(context.parameters.Height.raw) + "px");
		this.container.style.setProperty("--btn-hoverbordercolor", String(context.parameters.HoverBorderColor.raw));
		this.container.style.setProperty("--btn-hovercolor", String(context.parameters.HoverColor.raw));
		this.container.style.setProperty("--btn-hoverfill", String(context.parameters.HoverFill.raw));
		this.container.style.setProperty("--btn-icon", String(context.parameters.Icon.raw));
		this.container.style.setProperty("--btn-iconstyle", String(context.parameters.IconStyle.raw));
		this.container.style.setProperty("--btn-iconrotation", String(context.parameters.IconRotation.raw));
		this.container.style.setProperty("--btn-layout", String(context.parameters.Layout.raw));
		this.container.style.setProperty("--btn-italic", String(context.parameters.Italic.raw));
		// this.container.style.setProperty("--btn-onpress", String(context.parameters.OnPress.raw));
		this.container.style.setProperty("--btn-paddingbottom", String(context.parameters.PaddingBottom.raw));
		this.container.style.setProperty("--btn-paddingleft", String(context.parameters.PaddingLeft.raw));
		this.container.style.setProperty("--btn-paddingright", String(context.parameters.PaddingRight.raw));
		this.container.style.setProperty("--btn-paddingtop", String(context.parameters.PaddingTop.raw));
		this.container.style.setProperty("--btn-pressedbordercolor", String(context.parameters.PressedBorderColor.raw));
		this.container.style.setProperty("--btn-pressedcolor", String(context.parameters.PressedColor.raw));
		this.container.style.setProperty("--btn-pressedfill", String(context.parameters.PressedFill.raw));
		this.container.style.setProperty("--btn-radiusbottomleft", String(context.parameters.RadiusBottomLeft.raw));
		this.container.style.setProperty("--btn-radiusbottomright", String(context.parameters.RadiusBottomRight.raw));
		this.container.style.setProperty("--btn-radiustopleft", String(context.parameters.RadiusTopLeft.raw));
		this.container.style.setProperty("--btn-radiustopright", String(context.parameters.RadiusTopRight.raw));
		this.container.style.setProperty("--btn-size", String(context.parameters.Size.raw));
		this.container.style.setProperty("--btn-strikethrough", String(context.parameters.Strikethrough.raw));
		this.container.style.setProperty("--btn-tabindex", String(context.parameters.TabIndex.raw));
		this.container.style.setProperty("--btn-text", String(context.parameters.Text.raw));
		this.container.style.setProperty("--btn-tooltip", String(context.parameters.Tooltip.raw));
		this.container.style.setProperty("--btn-underline", String(context.parameters.Underline.raw));
		this.container.style.setProperty("--btn-verticalalign", String(context.parameters.VerticalAlign.raw));
		this.container.style.setProperty("--btn-visible", String(context.parameters.Visible.raw));
		this.container.style.setProperty("--btn-width", String(context.parameters.Width.raw) + "px");
		this.container.style.setProperty("--btn-wrap", String(context.parameters.Wrap.raw));
		this.container.style.setProperty("--btn-x", String(context.parameters.X.raw));
		this.container.style.setProperty("--btn-y", String(context.parameters.Y.raw));

	}

	/**
	 * It is called by the framework prior to a control receiving new data.
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as "bound" or "output"
	 */
	public getOutputs(): IOutputs {
		return {};
	}

	/**
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void {
		// Add code to cleanup control if necessary
	}
}
