import { SidebarWidthManager } from './manager';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const manager = new SidebarWidthManager(context);
	registerCommand(context, 'toggle-sidebar-width.toggleWidth', manager.toggleWidth);
	registerCommand(context, 'toggle-sidebar-width.applyWidthA', manager.applyWidthA);
	registerCommand(context, 'toggle-sidebar-width.applyWidthB', manager.applyWidthB);
}

function registerCommand(context: vscode.ExtensionContext, command: string, callback: () => void) {
	const disposable = vscode.commands.registerCommand(command, callback);
	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
