# upload-ftp 

This is a vscode extension called "upload-ftp". It helps to upload files to FTP Server Simply. 

---
## Features
This tool has these features now:
- support create directories automatically;
- support upload more than one file at a time;
- support 'workspace' mode in vscode.
---
## Usage

First, you need to create a upload.json file in .vscode folder.

The upload.json file format is easy like this:
```json
{
    "server": {
        "host": "10.9.3.200",
        "port": 21,
        "user": "root",
        "password": "root"
    },
    "files1": [
        {
            "localfile": "/home/sean/Project/upload/test/TestApp",
            "remotefile": "/apps/test/TestApp"
        },
        {
            "localfile": "/home/sean/Project/upload/test/Test.js",
            "remotefile": "/apps/test/test.js"
        }
    ]
}
```

After that, you can right click on the .vscode folder or .vscode father folder, and choose the 'upload' button, then this tool will help you do upload action.

Of course, you can also just click the folder and use `alt + d` to upload quickly.


---
## Known Issues

---

## Release Notes


### 1.0.0

- support create directories automatically;
- support upload more than one file at a time;
- support 'workspace' mode in vscode.



---


**Enjoy!**
