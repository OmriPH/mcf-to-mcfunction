import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposables: vscode.Disposable[] = [];
  disposables.push(
    vscode.workspace.onDidCreateFiles((event) => {
      event.files.forEach((element) => {
        console.log(element.path);
        if (element.path.endsWith(".mcf")) {
          vscode.workspace.fs.rename(
            element,
            vscode.Uri.file(element.path + "unction"),
            { overwrite: false }
          );
        }
      });
    })
  );

  context.subscriptions.push(...disposables);
}

export function deactivate() {}
