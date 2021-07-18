// ============================================================
// Copyright (c) 2021 Tatsuya Nakamori. All rights reserved.
// See LICENSE in the project root for license information.
// ============================================================
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.commands.registerCommand('ext.command', () => {
            vscode.window.showInformationMessage('Hello World!');
    }));
}
