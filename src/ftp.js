const ftp = require('ftp');
const path = require('path');
const fs = require('fs');

// upload a local file to the server
function upload2FtpServer(Server, localFile, Remotefile) {
    return new Promise((resolve, reject) => {
        const c = new ftp();
        c.on('ready', () => {
            // mkdirs
            const dir = path.dirname(Remotefile);
            c.mkdir(dir, true, (err) => {
                if (err) {
                    reject(err);
                }
            });

            fs.access(localFile, fs.F_OK, (err) => {
                if (err) {
                    reject(err)
                }
              
                c.put(localFile, Remotefile, (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                    c.end();
                });
            })
        });

        c.on('error', (err) => {
            reject(err);
        })

        c.connect({
            host: Server.host,
            user: Server.user,
            password: Server.password,
            port: Server.port
        });
    });
}

module.exports = upload2FtpServer;

