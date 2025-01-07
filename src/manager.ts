import * as vscode from 'vscode';
import { DECREASE_TO_MINIMUM_LOOPCOUNT, KEY_WIDTH_A, KEY_WIDTH_B } from './constants';

let self: SidebarWidthManager;

export class SidebarWidthManager {
    private readonly context: vscode.ExtensionContext;
    private aWasLast: boolean = false;

    constructor(context: vscode.ExtensionContext) {
        self = this;
        this.context = context;
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
        const widthA = self.getConfigNumber(KEY_WIDTH_A);
        self.setWidth(widthA);
        self.aWasLast = true;
    }

    applyWidthB() {
        console.log('applyWidthB');
        const widthB = self.getConfigNumber(KEY_WIDTH_B);
        self.setWidth(widthB);
        self.aWasLast = false;
    }

    private getConfigNumber(key: string) {
        const value = vscode.workspace
            .getConfiguration()
            .get<number>(key);
        return Number(value);
    }

    private setWidth(steps: number) {
        vscode.commands.executeCommand('workbench.action.focusSideBar');
        self.decreaseWithToMinimum();
        self.increaseWidthBySteps(steps);
        vscode.commands.executeCommand('workbench.action.focusLastEditorGroup');
    }

    private decreaseWithToMinimum() {
        for (let i = 0; i < DECREASE_TO_MINIMUM_LOOPCOUNT; i++) {
            vscode.commands.executeCommand('workbench.action.decreaseViewSize');
        }
    }

    private increaseWidthBySteps(steps: number) {
        for (let i = 0; i < steps; i++) {
            vscode.commands.executeCommand('workbench.action.increaseViewSize');
        }
    }
}