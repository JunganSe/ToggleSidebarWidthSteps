import * as vscode from 'vscode';

let self: SidebarWidthManager;

export class SidebarWidthManager {
    private readonly context: vscode.ExtensionContext;

    constructor(context: vscode.ExtensionContext) {
        self = this;
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