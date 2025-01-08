import * as vscode from 'vscode';
import { Manager } from './manager';

export function activate(context: vscode.ExtensionContext) {
	const manager = new Manager();
	registerCommand(context, 'toggle-sidebar-width.toggleWidth', manager.toggleWidth);
	registerCommand(context, 'toggle-sidebar-width.applyWidthA', manager.applyWidthA);
	registerCommand(context, 'toggle-sidebar-width.applyWidthB', manager.applyWidthB);
}

function registerCommand(context: vscode.ExtensionContext, command: string, callback: () => void) {
	const disposable = vscode.commands.registerCommand(command, callback);
	context.subscriptions.push(disposable);
}

export function deactivate() {}
