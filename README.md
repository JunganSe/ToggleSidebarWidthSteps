### WIP
This extension is in development, and is not yet released.\
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-



# Toggle sidebar width
Toggle the primary sidebar width between two preset sizes.\
Use with commands or keyboard shortcuts.

Due to limitations in the vscode api, the sidebar width can currently only be set in predefined increments/steps. It's a bit of a hack, and there may be some flickering. The step size appears to be 60 px, but may vary by monitor resolution.

## Settings
Width is set in steps, ranging between 0 and 16.
- `toggleSidebarWidth.widthA`: Set the first width.\
  Default: `1`
- `toggleSidebarWidth.widthB`: Set the second width.\
  Default: `6`

## Keyboard shortcuts
- `toggle-sidebar-width.toggleWidth`: Toggle the sidebar width between the preset values.\
  Default: `Alt+B`
- `toggle-sidebar-width.applyWidthA`: Set the sidebar width to the first value.\
  Default: `(unset)`
- `toggle-sidebar-width.applyWidthB`: Set the sidebar width to the second value.\
  Default: `(unset)`
