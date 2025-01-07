import * as vscode from 'vscode';
import { KEY_WIDTH_A, KEY_WIDTH_B } from './constants';
import { SidebarWidthWorker } from './worker';

let self: SidebarWidthManager;

export class SidebarWidthManager {
    private readonly context: vscode.ExtensionContext;
    private readonly worker = new SidebarWidthWorker();
    private aWasLast: boolean = false;

    constructor(context: vscode.ExtensionContext) {
        self = this;
        this.context = context;
        this.worker = new SidebarWidthWorker();
    }

    toggleWidth() {
        console.log('toggleWidth');

        if (self.aWasLast)
            self.applyWidthB();
        else
            self.applyWidthA();
    }

    applyWidthA() {
        console.log('applyWidthA');
        const widthA = self.worker.getConfigNumber(KEY_WIDTH_A);
        self.worker.setWidth(widthA);
        self.aWasLast = true;
    }

    applyWidthB() {
        console.log('applyWidthB');
        const widthB = self.worker.getConfigNumber(KEY_WIDTH_B);
        self.worker.setWidth(widthB);
        self.aWasLast = false;
    }


}