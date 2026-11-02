# Projects-btnPCF
Attempt to make a Button as a PCF component, that is better than either the Classic or Modern controls available through PowerApps.

Complete Classic vs Modern Button property comparison
Property / capability |	Classic Button |	Modern Button |	Comparison |
|---|---|---|---|
| AcceptsFocus |	❌	| ✅ |	Modern-specific accessibility/focus property |
| AccessibleLabel |	✅⁕ |	✅ |	Screen-reader description. Microsoft explicitly documents it for Modern. |
| Align |	✅ |	✅ |	Horizontal content alignment. Modern supports Align.Left, Center, Right, Justify. |
| Appearance |	❌ |	✅ |	Modern-specific. Primary, Secondary, Outline, Subtle, Transparent. |
| AutoDisableOnSelect |	✅ |	❌ |	Classic-specific automatic disabling during OnSelect processing |
| BasePaletteColor |	❌ |	✅ |	Modern theme colour from which the control palette is generated. |
| BorderColor |	✅ |	✅ |	Border colour. |
| BorderStyle |	✅ |	✅ |	Modern supports Solid, Dashed, Dotted and None. |
| BorderThickness |	✅ |	✅ |	Border thickness in pixels. |
| Color |	✅ |	✅ |	Foreground/text colour in the current Modern control. |
| ContentLanguage |	✅ |	✅ |	Language/locale information for control content. |
| DisabledBorderColor |	✅ |	❌ |	Classic gives explicit disabled-state styling |
| DisabledColor |	✅ |	❌ |	Classic gives explicit disabled text colour |
| DisabledFill |	✅ |	❌ |	Classic gives explicit disabled background styling |
| DisplayMode |	✅ |	✅ |	Both support control state. Modern supports Edit, View and Disabled; OnSelect does not fire when disabled. |
| Fill |	✅ |	❌ | / theme-driven	Classic exposes direct background fill; Modern normally derives its surface from Appearance and theming |
| FocusedBorderColor |	✅ |	❌ |	Classic exposes explicit focus-state border colour |
| FocusedBorderThickness |	✅ |	❌ |	Classic exposes explicit focus-state border thickness |
| Font |	✅ |	✅ |	Font family. |
| FontWeight |	✅ |	✅ |	Both support font weight. Modern documents Bold, Semibold, Normal and Lighter. |
| Height |	✅ |	✅ |	Modern default is 32. |
| HoverBorderColor |	✅ |	❌ |	Classic-specific interaction-state styling |
| HoverColor |	✅ |	❌ |	Classic-specific hover text colour |
| HoverFill |	✅ |	❌ |	Classic-specific hover background |
| Icon |	❌ |	✅ |	Modern natively supports Fluent icons such as Add, Save and Delete. |
| IconStyle |	❌ |	✅ |	Outline or Filled. |
| IconRotation |	❌ |	✅ |	Rotation of the Modern button icon in degrees. |
| Layout |	❌ |	✅ |	Controls icon/text arrangement, including IconBefore, IconAfter and IconOnly. |
| Italic |	✅ |	✅ |	Current Modern Button supports italic typography. |
| OnSelect |	✅ |	✅ |	Both now support it. Modern OnSelect also responds to Enter/Space when keyboard focused. |
| PaddingBottom |	✅ |	✅ |	Content padding. |
| PaddingLeft |	✅ |	✅ |	Content padding. |
| PaddingRight |	✅ |	✅ |	Content padding. |
| PaddingTop |	✅ |	✅ |	Content padding. |
| PressedBorderColor |	✅ |	❌ |	Classic-specific pressed-state styling |
| PressedColor |	✅ |	❌ |	Classic-specific pressed text colour |
| PressedFill |	✅ |	❌ |	Classic-specific pressed background |
| RadiusBottomLeft |	✅ |	✅ |	Individual corner radius is available in current Modern Button. |
| RadiusBottomRight |	✅ |	✅ |	Individual corner radius available. |
| RadiusTopLeft |	✅ |	✅ |	Individual corner radius available. |
| RadiusTopRight |	✅ |	✅ |	Individual corner radius available. |
| Size |	✅ |	✅ |	Font size. Current Microsoft documentation describes Modern Size in points. |
| Strikethrough |	✅ |	✅ |	Current Modern Button supports strikethrough. |
| TabIndex |	✅ |	❌ | / handled differently	Classic gives explicit tab-order configuration; Modern uses the newer focus/accessibility approach |
| Text |	✅ |	✅ |	Button label. Can be a literal or Power Fx expression. |
| Tooltip |	✅ |	✅ |	Current Modern Button explicitly supports hover explanatory text. |
| Underline |	✅ |	✅ |	Current Modern Button supports underlined text. |
| VerticalAlign |	✅ |	✅ |	Modern supports Top, Middle and Bottom. |
| Visible |	✅ |	✅ |	Boolean/formula controlling visibility. |
| Width |	✅ |	✅ |	Modern default is 96. |
| Wrap |	✅ |	⚠️ |	Historically exposed by Modern Button versions, but it is not listed in Microsoft's current updated Button property's documentation |
| X |	✅ |	✅ |	Horizontal location relative to parent. |
| Y |	✅ |	✅ |	Vertical location relative to parent. |

⁕ Availability/exposure of some accessibility properties can vary by the version of the Classic control/editor.


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
