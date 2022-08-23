const vscode = require('vscode');
const upload = require('./src/upload.js');
const channel = vscode.window.createOutputChannel('Upload Info');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('upload-ftp.upload', async function (uri) {
		if (!uri || !uri.fsPath) {
            await vscode.commands.executeCommand('copyFilePath');
            uri = await vscode.env.clipboard.readText();

            uri = vscode.Uri.file(uri);
		} 

		channel.clear();
		upload(uri.fsPath, (file, err) => {
			if (!err) {
				channel.appendLine(`[Success]: ${file.localfile} >> remote:${file.remotefile}\t`);
			} else {
				channel.appendLine(`[Failed]: ${file.localfile} >> remote:${file.remotefile}\t`);
				channel.appendLine(`\t\t<Error>: ${err}\t`);
			}
		}).then(data => {
			channel.appendLine("\n===================== Upload Finish ===========================");
		}).catch(err => {
			channel.appendLine("\n===================== Upload Error ===========================");
			channel.appendLine(err);
		});

		channel.show();
	});

	console.log("push")
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
