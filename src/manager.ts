import * as vscode from 'vscode';

export class SidebarWidthManager {
    private readonly context: vscode.ExtensionContext;

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
    }

    toggleWidth() {
        console.log('toggleWidth');
        // TODO: Implement toggleWidth.
    }

    applyWidthA() {
        console.log('applyWidthA');
        // TODO: Implement applyWidthA.
    }

    applyWidthB() {
        console.log('applyWidthB');
        // TODO: Implement applyWidthB.
    }
}