# Projects-btnPCF
Attempt to make a Button as a PCF component, that is better than either the Classic or Modern controls available through PowerApps.

Complete Classic vs Modern Button property comparison
| Property | Data type | Short description | Classic Button | Modern Button | Comparison / notes |
|---|---|---|:---:|:---:|---|
| **AcceptsFocus** | Boolean | Determines whether the control can receive keyboard focus. | ❌ | ✅ | Modern-specific focus behaviour. |
| **AccessibleLabel** | Text | Descriptive label exposed to screen readers and other assistive technology. | ✅⁕ | ✅ | Particularly important for icon-only buttons. |
| **Align** | Enum | Sets the horizontal alignment of the button's content. | ✅ | ✅ | Modern supports Left, Center, Right and Justify. |
| **Appearance** | Enum | Selects the button's predefined visual style. | ❌ | ✅ | Modern supports Primary, Secondary, Outline, Subtle and Transparent. |
| **AutoDisableOnSelect** | Boolean | Automatically disables the button while its `OnSelect` formula executes. | ✅ | ❌ | Classic-specific behaviour. |
| **BasePaletteColor** | Color | Sets the base colour from which the Modern theme generates the button palette. | ❌ | ✅ | Modern-specific, theme-oriented alternative to several manual state colours. |
| **BorderColor** | Color | Sets the colour of the button border. | ✅ | ✅ | Available on both. |
| **BorderStyle** | Enum | Sets the button border style. | ✅ | ✅ | Modern supports Solid, Dashed, Dotted and None. |
| **BorderThickness** | Number | Sets the thickness of the button border in pixels. | ✅ | ✅ | Available on both. |
| **Color** | Color | Sets the colour of the button label text. | ✅ | ✅ | Current Modern Button exposes text colour. |
| **ContentLanguage** | Text | Specifies the language used for the control's content. | ✅ | ✅ | Useful for localisation and accessibility. |
| **DisabledBorderColor** | Color | Sets the border colour when `DisplayMode` is Disabled. | ✅ | ❌ | Modern derives its disabled appearance through its styling/theme system. |
| **DisabledColor** | Color | Sets the text colour when the button is disabled. | ✅ | ❌ | Classic-specific state styling. |
| **DisabledFill** | Color | Sets the background colour when the button is disabled. | ✅ | ❌ | Classic-specific state styling. |
| **DisplayMode** | Enum | Determines whether the button is active, disabled or displayed read-only. | ✅ | ✅ | Modern supports Edit, View and Disabled. `OnSelect` does not fire when Disabled. |
| **Fill** | Color | Sets the normal background colour of the button. | ✅ | ❌ | Classic exposes the fill directly; Modern primarily uses `Appearance` and theming. |
| **FocusedBorderColor** | Color | Sets the border colour when the control has keyboard focus. | ✅ | ❌ | Classic-specific focus-state styling. |
| **FocusedBorderThickness** | Number | Sets the border thickness when the button has keyboard focus. | ✅ | ❌ | Classic-specific focus-state styling. |
| **Font** | Enum / Font | Sets the font family used for the button text. | ✅ | ✅ | Available on both. |
| **FontWeight** | Enum | Sets the weight or thickness of the button text. | ✅ | ✅ | Modern supports values including Normal, Semibold, Bold and Lighter. |
| **Height** | Number | Sets the vertical size of the button. | ✅ | ✅ | Modern default is 32. |
| **HoverBorderColor** | Color | Sets the border colour while the pointer hovers over the button. | ✅ | ❌ | Classic-specific interaction-state styling. |
| **HoverColor** | Color | Sets the text colour while the pointer hovers over the button. | ✅ | ❌ | Classic-specific interaction-state styling. |
| **HoverFill** | Color | Sets the background colour while the pointer hovers over the button. | ✅ | ❌ | Classic-specific interaction-state styling. |
| **Icon** | Text | Specifies the Fluent icon displayed within the button. | ❌ | ✅ | Modern can display icons such as `"Add"`, `"Save"` and `"Delete"`. |
| **IconStyle** | Enum | Determines whether the button's icon uses an outline or filled style. | ❌ | ✅ | Modern supports `IconStyle.Outline` and `IconStyle.Filled`. |
| **IconRotation** | Number | Rotates the button icon by the specified number of degrees. | ❌ | ✅ | Default is 0 degrees. |
| **Layout** | Enum | Determines the position of the icon relative to the button text. | ❌ | ✅ | Supports IconBefore, IconAfter and IconOnly. |
| **Italic** | Boolean | Determines whether the button text is italicised. | ✅ | ✅ | Available on the current Modern Button. |
| **OnSelect** | Behavior | Power Fx formula executed when the user activates the button. | ✅ | ✅ | Supported by both. Modern also triggers it when Enter or Space activates a keyboard-focused button. |
| **PaddingBottom** | Number | Sets the space between the button content and its bottom edge. | ✅ | ✅ | Available on both. |
| **PaddingLeft** | Number | Sets the space between the button content and its left edge. | ✅ | ✅ | Available on both. |
| **PaddingRight** | Number | Sets the space between the button content and its right edge. | ✅ | ✅ | Available on both. |
| **PaddingTop** | Number | Sets the space between the button content and its top edge. | ✅ | ✅ | Available on both. |
| **PressedBorderColor** | Color | Sets the border colour while the button is being pressed. | ✅ | ❌ | Classic-specific interaction-state styling. |
| **PressedColor** | Color | Sets the text colour while the button is being pressed. | ✅ | ❌ | Classic-specific interaction-state styling. |
| **PressedFill** | Color | Sets the background colour while the button is being pressed. | ✅ | ❌ | Classic-specific interaction-state styling. |
| **RadiusBottomLeft** | Number | Sets the radius of the bottom-left corner. | ✅ | ✅ | Individual corner radii are supported by the current Modern Button. |
| **RadiusBottomRight** | Number | Sets the radius of the bottom-right corner. | ✅ | ✅ | Individual corner radii supported. |
| **RadiusTopLeft** | Number | Sets the radius of the top-left corner. | ✅ | ✅ | Individual corner radii supported. |
| **RadiusTopRight** | Number | Sets the radius of the top-right corner. | ✅ | ✅ | Individual corner radii supported. |
| **Size** | Number | Sets the font size of the button label. | ✅ | ✅ | Available on both controls. |
| **Strikethrough** | Boolean | Determines whether a line appears through the button text. | ✅ | ✅ | Available on the current Modern Button. |
| **TabIndex** | Number | Defines the button's position in keyboard tab navigation. | ✅ | ❌ | Explicitly configurable on Classic; Modern uses the newer focus/accessibility model. |
| **Text** | Text | Specifies the label displayed on the button. | ✅ | ✅ | Accepts literal text or a Power Fx formula returning text. |
| **Tooltip** | Text | Sets explanatory text displayed when the pointer hovers over the control. | ✅ | ✅ | Supported by both controls. |
| **Underline** | Boolean | Determines whether the button text is underlined. | ✅ | ✅ | Available on the current Modern Button. |
| **VerticalAlign** | Enum | Sets the vertical alignment of content within the button. | ✅ | ✅ | Modern supports Top, Middle and Bottom. |
| **Visible** | Boolean | Determines whether the control is rendered in the app. | ✅ | ✅ | May be controlled dynamically using a Power Fx formula. |
| **Width** | Number | Sets the horizontal size of the button. | ✅ | ✅ | Modern default is 96. |
| **Wrap** | Boolean | Determines whether button text wraps onto multiple lines when required. | ✅ | ⚠️ | Not listed in Microsoft's current updated Modern Button documentation. |
| **X** | Number | Sets the horizontal position relative to the button's parent. | ✅ | ✅ | Distance from the left edge of the parent. |
| **Y** | Number | Sets the vertical position relative to the button's parent. | ✅ | ✅ | Distance from the top edge of the parent. |

- ⁕ = Availability/exposure of some accessibility properties can vary by the version of the Classic control/editor.
- ✅ = Property available
- ❌ = Property not available
- ⚠️ = Version/current-documentation caveat
- **Behavior** = Power Fx behaviour formula rather than a value-producing property
- **Enum** = Property accepts one of a defined set of Power Apps enumeration values
- **Color** = Power Fx colour value, such as `Color.Red` or `RGBA(0, 120, 212, 1)`

| Area |	Winner |	Why
|---|---|---|
| Manual colour control	| Classic	| Explicit Fill/Color state properties |
| Hover/pressed styling	| Classic	| Direct per-state properties |
| Disabled styling	| Classic	| Direct disabled colour/fill properties |
| Fluent/UI consistency	| Modern	| Theme and Appearance driven |
| Built-in icons	| Modern	| Icon, IconStyle, IconRotation and Layout |
| Accessibility	| Modern	| Designed around the newer Fluent/accessibility model |
| Corner/border styling	| Roughly equal now	| Updated Modern Button exposes considerably more styling than earlier releases |
| Power Fx action	| Equal	| Both provide OnSelect |
| Fine-grained design control	| Classic	| Fewer decisions delegated to the theme |
| Standardised app design	| Modern	| Easier to keep controls visually consistent |
